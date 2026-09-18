import { ValidationResult } from '../types.ts';

// Lista de palavras ofensivas comuns em língua portuguesa (termos chulos, insultos)
const OFFENSIVE_TERMS = [
  'arrombado',
  'arrombada',
  'babaca',
  'buceta',
  'boceta',
  'caralho',
  'cacete',
  'chupa',
  'corno',
  'cuzão',
  'cuzao',
  'desgraça',
  'desgraca',
  'foder',
  'fodase',
  'foda-se',
  'fudeu',
  'filho da puta',
  'fdp',
  'merda',
  'otario',
  'otaria',
  'otário',
  'otária',
  'palhaço',
  'pau no cu',
  'pica',
  'piroca',
  'porra',
  'puta',
  'puto',
  'siririca',
  'vadia',
  'viado',
  'viadinho',
  'xoxota',
  'xana',
];

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');
}

/**
 * Remove comentários (// e /* *\/) e o conteúdo de strings/chars do código,
 * preservando o comprimento das linhas para não atrapalhar checagens posteriores.
 * Isso evita falsos positivos/negativos causados por chaves ou ';' dentro de
 * comentários ou literais de string.
 */
function stripCommentsAndLiterals(code: string): string {
  let result = '';
  let i = 0;
  let inLineComment = false;
  let inBlockComment = false;
  let inString = false;
  let inChar = false;

  while (i < code.length) {
    const ch = code[i];
    const next = code[i + 1];

    if (inLineComment) {
      if (ch === '\n') {
        inLineComment = false;
        result += ch;
      } else {
        result += ' ';
      }
      i++;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        result += '  ';
        i += 2;
        continue;
      }
      result += ch === '\n' ? '\n' : ' ';
      i++;
      continue;
    }

    if (inString) {
      if (ch === '\\' && next !== undefined) {
        result += '  ';
        i += 2;
        continue;
      }
      if (ch === '"') {
        inString = false;
        result += ' ';
        i++;
        continue;
      }
      result += ch === '\n' ? '\n' : ' ';
      i++;
      continue;
    }

    if (inChar) {
      if (ch === '\\' && next !== undefined) {
        result += '  ';
        i += 2;
        continue;
      }
      if (ch === "'") {
        inChar = false;
        result += ' ';
        i++;
        continue;
      }
      result += ch === '\n' ? '\n' : ' ';
      i++;
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      result += '  ';
      i += 2;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      result += '  ';
      i += 2;
      continue;
    }

    if (ch === '"') {
      inString = true;
      result += ' ';
      i++;
      continue;
    }

    if (ch === "'") {
      inChar = true;
      result += ' ';
      i++;
      continue;
    }

    result += ch;
    i++;
  }

  return result;
}

/**
 * Checa se os delimitadores estão balanceados e na ordem correta.
 * Retorna null se estiver tudo certo, ou uma mensagem de erro descrevendo o problema.
 */
function checkBalancedDelimiters(cleanCode: string): string | null {
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  const openers = new Set(['(', '[', '{']);
  const stack: string[] = [];

  for (const ch of cleanCode) {
    if (openers.has(ch)) {
      stack.push(ch);
    } else if (ch in pairs) {
      const expected = pairs[ch];
      const top = stack.pop();
      if (top !== expected) {
        return `Delimitadores desbalanceados: encontrado '${ch}' sem '${expected}' correspondente aberto antes.`;
      }
    }
  }

  if (stack.length > 0) {
    const unclosed = stack[stack.length - 1];
    return `Delimitador '${unclosed}' aberto e nunca fechado.`;
  }

  return null;
}

/**
 * Checa se existe uma função main real (int main / void main), não apenas
 * a palavra "main" solta em qualquer lugar (ex: dentro de um comentário ou texto).
 */
function hasRealMainFunction(cleanCode: string): boolean {
  const mainRegex = /\b(int|void)\s+main\s*\(\s*(void)?\s*\)\s*\{?/;
  return mainRegex.test(cleanCode);
}

/**
 * Checagem leve (heurística, não 100% precisa) de que a maioria das linhas
 * que parecem comandos termina com ';'. Ignora linhas de controle de fluxo,
 * diretivas de pré-processador, linhas vazias e linhas que só abrem/fecham blocos.
 */
function checkStatementTermination(cleanCode: string): string | null {
  const lines = cleanCode
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const controlKeywords =
    /^(if|else|for|while|do|switch|case|default|struct|union|typedef|enum)\b/;
  let commandLines = 0;
  let unterminated = 0;

  for (const line of lines) {
    if (line.startsWith('#')) continue; // pré-processador
    if (line === '{' || line === '}' || line.endsWith('{') || line === '};')
      continue;
    if (controlKeywords.test(line)) continue;
    if (line.startsWith('}')) continue;

    commandLines++;
    if (!line.endsWith(';') && !line.endsWith(',') && !line.endsWith('{')) {
      unterminated++;
    }
  }

  // Só reporta erro se uma fração significativa das linhas de comando não termina com ';'
  if (commandLines >= 3 && unterminated / commandLines > 0.4) {
    return 'Várias linhas de comando parecem não terminar com ";". Confira o código antes de enviar.';
  }

  return null;
}

/**
 * Checa correspondência básica entre funções da biblioteca padrão usadas
 * no código e o #include necessário para elas.
 */
function checkMissingIncludes(cleanCode: string): string | null {
  const includeMap: {
    funcRegex: RegExp;
    header: string;
    funcNames: string[];
  }[] = [
    {
      funcRegex:
        /\b(printf|scanf|puts|gets|fopen|fclose|fprintf|fscanf|fgets|putchar|getchar|sprintf|sscanf)\s*\(/,
      header: 'stdio.h',
      funcNames: ['printf/scanf/puts/etc.'],
    },
    {
      funcRegex:
        /\b(sqrt|pow|floor|ceil|fabs|sin|cos|tan|log|log10|round)\s*\(/,
      header: 'math.h',
      funcNames: ['sqrt/pow/etc.'],
    },
    {
      funcRegex:
        /\b(malloc|calloc|realloc|free|exit|atoi|atof|rand|srand)\s*\(/,
      header: 'stdlib.h',
      funcNames: ['malloc/free/rand/etc.'],
    },
    {
      funcRegex:
        /\b(strlen|strcpy|strcat|strcmp|strncmp|strncpy|strstr|strchr)\s*\(/,
      header: 'string.h',
      funcNames: ['strlen/strcpy/etc.'],
    },
  ];

  for (const { funcRegex, header } of includeMap) {
    if (funcRegex.test(cleanCode)) {
      const includeRegex = new RegExp(
        `#include\\s*[<"]${header.replace('.', '\\.')}[>"]`,
      );
      if (!includeRegex.test(cleanCode)) {
        return `Código usa função(ões) de <${header}> mas falta o #include <${header}>.`;
      }
    }
  }

  return null;
}

export function validateSubmission(
  code: string,
  author?: string,
  comment?: string,
): ValidationResult {
  if (!code || typeof code !== 'string') {
    return {
      valid: false,
      error: 'Cole o código antes de enviar.',
    };
  }

  const trimmedCode = code.trim();

  // 1. Tamanho mínimo
  if (trimmedCode.length < 30) {
    return {
      valid: false,
      error: 'O código está curto demais (mínimo de 30 caracteres).',
    };
  }

  // Versão do código sem comentários nem conteúdo de strings/chars,
  // usada por todas as checagens sintáticas abaixo.
  const cleanCode = stripCommentsAndLiterals(trimmedCode);

  // 2. Verificação de estrutura mínima da linguagem C
  const hasBasicCSyntax =
    (trimmedCode.includes('{') && trimmedCode.includes('}')) ||
    trimmedCode.includes(';') ||
    trimmedCode.includes('#include') ||
    trimmedCode.includes('main');

  if (!hasBasicCSyntax) {
    return {
      valid: false,
      error: 'Isso não parece um código em C. Confira se colou certo.',
    };
  }

  // 3. Balanceamento real de {}, () e []
  const delimiterError = checkBalancedDelimiters(cleanCode);
  if (delimiterError) {
    return { valid: false, error: delimiterError };
  }

  // 4. Presença de uma função main real
  if (!hasRealMainFunction(cleanCode)) {
    return {
      valid: false,
      error:
        'Não foi encontrada uma função main válida (ex: "int main()" ou "void main(void)").',
    };
  }

  // 5. Terminação de comandos com ';' (checagem leve/heurística)
  const terminationError = checkStatementTermination(cleanCode);
  if (terminationError) {
    return { valid: false, error: terminationError };
  }

  // 6. Correspondência entre funções usadas e #include correspondente
  const includeError = checkMissingIncludes(cleanCode);
  if (includeError) {
    return { valid: false, error: includeError };
  }

  // 7. Detecção de links e endereços de internet (bloqueio de spam)
  const fullTextToInspect = `${author || ''} ${comment || ''} ${code}`;
  const urlRegex =
    /(https?:\/\/|www\.|\.com\b|\.org\b|\.net\b|\.br\b|\.xyz\b|\.io\b|bit\.ly|t\.co)/i;

  if (urlRegex.test(fullTextToInspect)) {
    return {
      valid: false,
      error: 'Não são permitidos links no código ou nos campos de texto.',
    };
  }

  // 8. Moderação de palavras ofensivas
  const normalizedText = normalizeText(fullTextToInspect);
  const words = normalizedText.split(/\s+/);

  for (const term of OFFENSIVE_TERMS) {
    const normalizedTerm = normalizeText(term);
    if (
      words.includes(normalizedTerm) ||
      normalizedText.includes(` ${normalizedTerm} `)
    ) {
      return {
        valid: false,
        error: 'Conteúdo impróprio detectado. Revise antes de enviar.',
      };
    }
  }

  // Validação do nome do autor (se preenchido)
  if (author && author.trim().length > 60) {
    return {
      valid: false,
      error: 'O nome está longo demais (máximo 60 caracteres).',
    };
  }

  return { valid: true };
}
