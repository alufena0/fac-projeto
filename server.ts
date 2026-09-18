import express from 'express';
import path from 'path';
import { neon } from '@neondatabase/serverless';
import { createServer as createViteServer } from 'vite';
import { validateSubmission } from './src/utils/moderation.ts';
import { EXERCISE_LISTS } from './src/data/exercisesData.ts';
import { Resolution, SubmissionPayload } from './src/types.ts';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1mb' }));

// Conexão com o banco Postgres (Neon). A variável de ambiente é injetada
// automaticamente pela Vercel quando o banco está conectado ao projeto.
const sql = neon(process.env.DATABASE_URL!);

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

// Converte uma linha crua do banco (snake_case) para o formato Resolution
// (camelCase) que o resto do app espera.
function rowToResolution(row: any): Resolution {
  return {
    id: row.id,
    exerciseId: row.exercise_id,
    author: row.author,
    comment: row.comment ?? undefined,
    code: row.code,
    createdAt: row.created_at,
    linesCount: row.lines_count,
  };
}

// --- ROTAS DA API ---

// 1. Obter todas as resoluções (ou filtrar por exercício)
app.get('/api/resolutions', async (req, res) => {
  try {
    const exerciseId = req.query.exerciseId as string | undefined;

    const rows = exerciseId
      ? await sql`SELECT * FROM resolutions WHERE exercise_id = ${exerciseId} ORDER BY created_at`
      : await sql`SELECT * FROM resolutions ORDER BY created_at`;

    res.json(rows.map(rowToResolution));
  } catch (err) {
    console.error('Erro ao ler resoluções do banco:', err);
    res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
  }
});

// 2. Enviar nova resolução (com moderação automática severa)
app.post('/api/resolutions', async (req, res) => {
  try {
    const payload: SubmissionPayload = req.body;

    if (!payload || !payload.exerciseId || !payload.code) {
      return res.status(400).json({
        error: 'Preencha o código e escolha o exercício antes de enviar.',
      });
    }

    const code = payload.code.trim();
    const author = payload.author?.trim() || 'Estudante Anônimo';
    const comment = payload.comment?.trim() || '';

    // Validação e Moderação Automática
    const validation = validateSubmission(code, author, comment);
    if (!validation.valid) {
      return res.status(422).json({
        error: validation.error || 'Código rejeitado pela moderação.',
      });
    }

    const newResolution: Resolution = {
      id: `res-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      exerciseId: payload.exerciseId,
      author: author,
      comment: comment || undefined,
      code: code,
      createdAt: getBrazilianTimestamp(),
      linesCount: code.split('\n').length,
    };

    await sql`
      INSERT INTO resolutions (id, exercise_id, author, comment, code, created_at, lines_count)
      VALUES (
        ${newResolution.id},
        ${newResolution.exerciseId},
        ${newResolution.author},
        ${newResolution.comment ?? null},
        ${newResolution.code},
        ${newResolution.createdAt},
        ${newResolution.linesCount}
      )
    `;

    res.status(201).json(newResolution);
  } catch (err) {
    console.error('Erro ao salvar resolução no banco:', err);
    res
      .status(500)
      .json({ error: 'Erro de I/O ao persistir resolução no servidor.' });
  }
});

// 3. Obter estatísticas do banco de resoluções
app.get('/api/stats', async (req, res) => {
  try {
    const rows =
      await sql`SELECT exercise_id, created_at FROM resolutions ORDER BY created_at`;

    const totalSubmissions = rows.length;
    const exercisesWithSolutions = new Set(rows.map((r: any) => r.exercise_id))
      .size;
    const lastSubmission =
      rows.length > 0 ? rows[rows.length - 1].created_at : 'Nenhuma';
    const totalExercises = EXERCISE_LISTS.reduce(
      (acc, l) => acc + l.exercises.length,
      0,
    );

    res.json({
      totalSubmissions,
      exercisesWithSolutions,
      totalExercises,
      lastSubmission,
    });
  } catch (err) {
    console.error('Erro ao calcular estatísticas:', err);
    res.status(500).json({ error: 'Erro ao consultar o banco de dados.' });
  }
});

// Regras de proibição explícita de exclusão/edição
app.delete('/api/resolutions/:id', (req, res) => {
  res.status(403).json({
    error: 'Não é possível excluir resoluções de outras pessoas.',
  });
});

app.put('/api/resolutions/:id', (req, res) => {
  res.status(403).json({
    error: 'As resoluções enviadas não podem ser editadas depois.',
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
    console.log(
      `[FAC Banco de Resolucoes] Servidor executando na porta ${PORT}`,
    );
  });
}

start();
