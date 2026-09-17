/**
 * Utilitários para formatação e destaque de sintaxe em linguagem C.
 * Estilo discreto e sóbrio para exibição institucional.
 */

// Palavras-chave fundamentais da linguagem C (C89/C99)
export const C_KEYWORDS = new Set([
  'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
  'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
  'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof', 'static',
  'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile',
  'while', 'inline', 'restrict', '_Bool', 'bool', 'true', 'false', 'NULL',
  'size_t', 'FILE'
]);

// Funções e identificadores comuns da biblioteca padrão (stdio, stdlib, string, math)
export const C_STDLIB_FUNCS = new Set([
  'printf', 'scanf', 'puts', 'gets', 'fgets', 'fputs', 'fprintf', 'fscanf',
  'malloc', 'calloc', 'realloc', 'free', 'exit', 'abs', 'rand', 'srand',
  'strlen', 'strcpy', 'strncpy', 'strcat', 'strcmp', 'strncmp', 'strchr',
  'strstr', 'memcpy', 'memset', 'sqrt', 'pow', 'sin', 'cos', 'tan', 'ceil',
  'floor', 'fopen', 'fclose', 'fread', 'fwrite', 'feof', 'main'
]);

/**
 * Realiza auto-indentação de código C baseado nas chaves {}
 */
export function formatCCode(code: string, indentSize: number = 4): string {
  if (!code) return '';

  const lines = code.split('\n');
  const indentStep = ' '.repeat(indentSize);
  let currentIndent = 0;
  const formattedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Se a linha estiver vazia, mantém linha em branco
    if (trimmed === '') {
      formattedLines.push('');
      continue;
    }

    // Diretivas de pré-processador (#include, #define, etc.) sempre no início da coluna (indent 0)
    if (trimmed.startsWith('#')) {
      formattedLines.push(trimmed);
      continue;
    }

    // Conta chaves abertas e fechadas na linha (ignorando dentro de strings/chars simples se possível)
    let openCount = 0;
    let closeCount = 0;
    let inString = false;
    let inChar = false;

    for (let c = 0; c < trimmed.length; c++) {
      const ch = trimmed[c];
      const prev = c > 0 ? trimmed[c - 1] : '';

      if (ch === '"' && prev !== '\\' && !inChar) {
        inString = !inString;
      } else if (ch === "'" && prev !== '\\' && !inString) {
        inChar = !inChar;
      } else if (!inString && !inChar) {
        if (ch === '{') openCount++;
        else if (ch === '}') closeCount++;
      }
    }

    // Se a linha começa com fecha-chave, reduz a indentação desta linha antes de aplicá-la
    const startsWithClose = trimmed.startsWith('}');
    let lineIndentLevel = currentIndent;

    if (startsWithClose) {
      lineIndentLevel = Math.max(0, currentIndent - 1);
    }

    // Casos especiais: case ou default dentro de switch
    if (trimmed.startsWith('case ') || trimmed.startsWith('default:')) {
      lineIndentLevel = Math.max(0, lineIndentLevel - 1);
    }

    const indentation = indentStep.repeat(lineIndentLevel);
    formattedLines.push(indentation + trimmed);

    // Atualiza a indentação para as próximas linhas
    currentIndent = Math.max(0, currentIndent + openCount - closeCount);
  }

  return formattedLines.join('\n');
}

export interface HighlightToken {
  type: 'keyword' | 'type' | 'function' | 'string' | 'comment' | 'preprocessor' | 'number' | 'operator' | 'plain';
  text: string;
}

/**
 * Tokenizador simples e robusto para destaque de sintaxe C.
 */
export function tokenizeCLine(line: string, inMultiCommentState: { inComment: boolean }): HighlightToken[] {
  const tokens: HighlightToken[] = [];
  let index = 0;
  const len = line.length;

  // Tratar comentário multi-linha continuado de linhas anteriores
  if (inMultiCommentState.inComment) {
    const endIdx = line.indexOf('*/');
    if (endIdx === -1) {
      tokens.push({ type: 'comment', text: line });
      return tokens;
    } else {
      tokens.push({ type: 'comment', text: line.substring(0, endIdx + 2) });
      inMultiCommentState.inComment = false;
      index = endIdx + 2;
    }
  }

  // Pré-processador no início
  const trimmed = line.trimStart();
  if (trimmed.startsWith('#') && index === 0) {
    tokens.push({ type: 'preprocessor', text: line });
    return tokens;
  }

  while (index < len) {
    // Comentário de linha //
    if (line[index] === '/' && line[index + 1] === '/') {
      tokens.push({ type: 'comment', text: line.substring(index) });
      break;
    }

    // Início de comentário multi-linha /*
    if (line[index] === '/' && line[index + 1] === '*') {
      const endIdx = line.indexOf('*/', index + 2);
      if (endIdx === -1) {
        tokens.push({ type: 'comment', text: line.substring(index) });
        inMultiCommentState.inComment = true;
        break;
      } else {
        tokens.push({ type: 'comment', text: line.substring(index, endIdx + 2) });
        index = endIdx + 2;
        continue;
      }
    }

    // String literal "..."
    if (line[index] === '"') {
      let strEnd = index + 1;
      while (strEnd < len) {
        if (line[strEnd] === '"' && line[strEnd - 1] !== '\\') {
          strEnd++;
          break;
        }
        strEnd++;
      }
      tokens.push({ type: 'string', text: line.substring(index, strEnd) });
      index = strEnd;
      continue;
    }

    // Caractere literal '.'
    if (line[index] === "'") {
      let charEnd = index + 1;
      while (charEnd < len) {
        if (line[charEnd] === "'" && line[charEnd - 1] !== '\\') {
          charEnd++;
          break;
        }
        charEnd++;
      }
      tokens.push({ type: 'string', text: line.substring(index, charEnd) });
      index = charEnd;
      continue;
    }

    // Números (hexadecimal, float ou decimal)
    if (/\d/.test(line[index]) || (line[index] === '.' && /\d/.test(line[index + 1] || ''))) {
      let numEnd = index;
      while (numEnd < len && /[0-9a-fA-FxX.eE+-]/.test(line[numEnd])) {
        numEnd++;
      }
      tokens.push({ type: 'number', text: line.substring(index, numEnd) });
      index = numEnd;
      continue;
    }

    // Identificadores e palavras-chave
    if (/[a-zA-Z_]/.test(line[index])) {
      let idEnd = index;
      while (idEnd < len && /[a-zA-Z0-9_]/.test(line[idEnd])) {
        idEnd++;
      }
      const word = line.substring(index, idEnd);
      if (C_KEYWORDS.has(word)) {
        tokens.push({ type: 'keyword', text: word });
      } else if (C_STDLIB_FUNCS.has(word)) {
        tokens.push({ type: 'function', text: word });
      } else {
        tokens.push({ type: 'plain', text: word });
      }
      index = idEnd;
      continue;
    }

    // Espaços ou pontuações
    tokens.push({ type: 'plain', text: line[index] });
    index++;
  }

  return tokens;
}
