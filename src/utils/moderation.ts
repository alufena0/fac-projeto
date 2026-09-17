import { ValidationResult } from '../types.ts';

// Lista de palavras ofensivas comuns em língua portuguesa (termos chulos, insultos)
const OFFENSIVE_TERMS = [
  'arrombado', 'arrombada', 'babaca', 'buceta', 'boceta', 'caralho', 'cacete',
  'chupa', 'corno', 'cuzão', 'cuzao', 'desgraça', 'desgraca', 'foder', 'fodase',
  'foda-se', 'fudeu', 'filho da puta', 'fdp', 'merda', 'otario', 'otaria',
  'otário', 'otária', 'palhaço', 'pau no cu', 'pica', 'piroca', 'porra',
  'puta', 'puto', 'siririca', 'vadia', 'viado', 'viadinho', 'xoxota', 'xana'
];

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');
}

export function validateSubmission(code: string, author?: string, comment?: string): ValidationResult {
  if (!code || typeof code !== 'string') {
    return {
      valid: false,
      error: 'Cole o código antes de enviar.'
    };
  }

  const trimmedCode = code.trim();

  // 1. Tamanho mínimo
  if (trimmedCode.length < 30) {
    return {
      valid: false,
      error: 'O código está curto demais (mínimo de 30 caracteres).'
    };
  }

  // 2. Verificação de estrutura mínima da linguagem C
  const hasBasicCSyntax = 
    (trimmedCode.includes('{') && trimmedCode.includes('}')) ||
    trimmedCode.includes(';') ||
    trimmedCode.includes('#include') ||
    trimmedCode.includes('main');

  if (!hasBasicCSyntax) {
    return {
      valid: false,
      error: 'Isso não parece um código em C. Confira se colou certo.'
    };
  }

  // 3. Detecção de links e endereços de internet (bloqueio de spam)
  const fullTextToInspect = `${author || ''} ${comment || ''} ${code}`;
  const urlRegex = /(https?:\/\/|www\.|\.com\b|\.org\b|\.net\b|\.br\b|\.xyz\b|\.io\b|bit\.ly|t\.co)/i;
  
  // Exceções permitidas em C: referências puramente locais ou cabeçalhos padrão como <stdio.h> não devem ser afetados por .h
  if (urlRegex.test(fullTextToInspect)) {
    return {
      valid: false,
      error: 'Não são permitidos links no código ou nos campos de texto.'
    };
  }

  // 4. Moderação de palavras ofensivas
  const normalizedText = normalizeText(fullTextToInspect);
  const words = normalizedText.split(/\s+/);

  for (const term of OFFENSIVE_TERMS) {
    const normalizedTerm = normalizeText(term);
    if (words.includes(normalizedTerm) || normalizedText.includes(` ${normalizedTerm} `)) {
      return {
        valid: false,
        error: 'Conteúdo impróprio detectado. Revise antes de enviar.'
      };
    }
  }

  // Validação do nome do autor (se preenchido)
  if (author && author.trim().length > 60) {
    return {
      valid: false,
      error: 'O nome está longo demais (máximo 60 caracteres).'
    };
  }

  return { valid: true };
}
