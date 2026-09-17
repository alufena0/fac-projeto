import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { validateSubmission } from './src/utils/moderation.ts';
import { INITIAL_RESOLUTIONS, EXERCISE_LISTS } from './src/data/exercisesData.ts';
import { Resolution, SubmissionPayload } from './src/types.ts';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1mb' }));

// Caminho para o arquivo de persistência de resoluções
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'resolutions.json');

function ensureDataFile(): Resolution[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(INITIAL_RESOLUTIONS, null, 2), 'utf-8');
      return INITIAL_RESOLUTIONS;
    }

    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return INITIAL_RESOLUTIONS;
  } catch (err) {
    console.error('Erro ao ler arquivo de persistência:', err);
    return INITIAL_RESOLUTIONS;
  }
}

function saveResolutions(resolutions: Resolution[]): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(resolutions, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Erro ao salvar resoluções:', err);
    return false;
  }
}

// Formatar timestamp no padrão brasileiro clássico: DD/MM/AAAA HH:mm
function getBrazilianTimestamp(): string {
  const now = new Date();
  const pad = (n: number) => (n < 10 ? '0' + n : n.toString());
  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// --- ROTAS DA API ---

// 1. Obter todas as resoluções (ou filtrar por exercício)
app.get('/api/resolutions', (req, res) => {
  const exerciseId = req.query.exerciseId as string | undefined;
  const resolutions = ensureDataFile();

  if (exerciseId) {
    const filtered = resolutions.filter((r) => r.exerciseId === exerciseId);
    return res.json(filtered);
  }

  res.json(resolutions);
});

// 2. Enviar nova resolução (com moderação automática severa)
app.post('/api/resolutions', (req, res) => {
  const payload: SubmissionPayload = req.body;

  if (!payload || !payload.exerciseId || !payload.code) {
    return res.status(400).json({
      error: 'Preencha o código e escolha o exercício antes de enviar.'
    });
  }

  const code = payload.code.trim();
  const author = payload.author?.trim() || 'Estudante Anônimo';
  const comment = payload.comment?.trim() || '';

  // Validação e Moderação Automática
  const validation = validateSubmission(code, author, comment);
  if (!validation.valid) {
    return res.status(422).json({
      error: validation.error || 'Código rejeitado pela moderação.'
    });
  }

  const resolutions = ensureDataFile();

  const newResolution: Resolution = {
    id: `res-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    exerciseId: payload.exerciseId,
    author: author,
    comment: comment || undefined,
    code: code,
    createdAt: getBrazilianTimestamp(),
    linesCount: code.split('\n').length
  };

  resolutions.push(newResolution);
  const success = saveResolutions(resolutions);

  if (!success) {
    return res.status(500).json({ error: 'Erro de I/O ao persistir resolução no servidor.' });
  }

  res.status(201).json(newResolution);
});

// 3. Obter estatísticas do banco de resoluções
app.get('/api/stats', (req, res) => {
  const resolutions = ensureDataFile();
  const totalSubmissions = resolutions.length;
  const exercisesWithSolutions = new Set(resolutions.map((r) => r.exerciseId)).size;
  const lastSubmission = resolutions.length > 0 ? resolutions[resolutions.length - 1].createdAt : 'Nenhuma';
  const totalExercises = EXERCISE_LISTS.reduce((acc, l) => acc + l.exercises.length, 0);

  res.json({
    totalSubmissions,
    exercisesWithSolutions,
    totalExercises,
    lastSubmission
  });
});

// Regras de proibição explícita de exclusão/edição
app.delete('/api/resolutions/:id', (req, res) => {
  res.status(403).json({
    error: 'Não é possível excluir resoluções de outras pessoas.'
  });
});

app.put('/api/resolutions/:id', (req, res) => {
  res.status(403).json({
    error: 'As resoluções enviadas não podem ser editadas depois.'
  });
});

// --- INICIALIZAÇÃO COM VITE OU ARQUIVOS ESTÁTICOS ---
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[FAC Banco de Resolucoes] Servidor executando na porta ${PORT}`);
  });
}

start();
