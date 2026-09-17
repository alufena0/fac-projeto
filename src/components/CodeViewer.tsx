import React, { useState } from 'react';
import { tokenizeCLine, formatCCode } from '../utils/cFormatter.ts';

interface CodeViewerProps {
  code: string;
  author: string;
  createdAt: string;
  comment?: string;
  exerciseTitle?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  author,
  createdAt,
  comment,
  exerciseTitle
}) => {
  const [currentCode, setCurrentCode] = useState<string>(code);
  const [copied, setCopied] = useState<boolean>(false);
  const [isReformatted, setIsReformatted] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAutoIndent = () => {
    const formatted = formatCCode(currentCode, 4);
    setCurrentCode(formatted);
    setIsReformatted(true);
  };

  const handleResetOriginal = () => {
    setCurrentCode(code);
    setIsReformatted(false);
  };

  // Linhas tokenizadas para destaque de sintaxe
  const lines = currentCode.split('\n');
  const commentState = { inComment: false };

  return (
    <div className="border border-[#003366] bg-[#ffffff] mb-4 text-xs">
      {/* Cabeçalho de Metadados da Resolução */}
      <div className="bg-[#b8daff] border-b border-[#003366] px-3 py-2 flex flex-wrap justify-between items-center gap-2">
        <div>
          <span className="font-bold text-[#002b49]">Autor(a):</span> <span className="font-semibold text-[#002244]">{author}</span>&nbsp;|&nbsp;
          <span className="font-bold text-[#002b49]">Data de Envio:</span> {createdAt}&nbsp;|&nbsp;
          <span className="font-bold text-[#002b49]">Linhas:</span> {lines.length}
        </div>
        <div className="flex items-center space-x-2">
          {!isReformatted ? (
            <button
              onClick={handleAutoIndent}
              className="btn-classic text-xs py-0.5 px-2"
              title="Aplica auto-indentação de 4 espaços com base nas chaves do C"
            >
              [ Auto-Indentar Chaves ]
            </button>
          ) : (
            <button
              onClick={handleResetOriginal}
              className="btn-classic text-xs py-0.5 px-2"
              title="Restaura a indentação original submetida pelo aluno"
            >
              [ Indentação Original ]
            </button>
          )}
          <button
            onClick={handleCopy}
            className="btn-classic text-xs py-0.5 px-2 font-bold"
          >
            {copied ? '[ Código Copiado! ]' : '[ Copiar Código ]'}
          </button>
        </div>
      </div>

      {/* Comentário do Autor se houver */}
      {comment && (
        <div className="bg-[#ffffea] border-b border-[#d0d0d0] px-3 py-1.5 text-xs text-[#333333]">
          <strong>Nota do Autor:</strong> {comment}
        </div>
      )}

      {/* Bloco de Código com Destaque de Sintaxe Discreto */}
      <div className="code-window max-h-[500px] overflow-y-auto">
        <table className="w-full border-collapse font-mono text-xs">
          <tbody>
            {lines.map((lineText, idx) => {
              const tokens = tokenizeCLine(lineText, commentState);
              return (
                <tr key={idx} className="hover:bg-[#f2f6fa]">
                  <td className="w-10 text-right pr-3 pl-1 select-none text-[#777777] border-r border-[#d4d4d4] align-top bg-[#fafafa]">
                    {idx + 1}
                  </td>
                  <td className="pl-3 py-0 whitespace-pre font-mono text-[#111111]">
                    {tokens.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      tokens.map((tok, tIdx) => {
                        let className = 'c-plain';
                        if (tok.type === 'keyword') className = 'c-kw';
                        else if (tok.type === 'function') className = 'c-fn';
                        else if (tok.type === 'string') className = 'c-str';
                        else if (tok.type === 'comment') className = 'c-com';
                        else if (tok.type === 'preprocessor') className = 'c-prep';
                        else if (tok.type === 'number') className = 'c-num';

                        return (
                          <span key={tIdx} className={className}>
                            {tok.text}
                          </span>
                        );
                      })
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-[#e8f2fe] border-t border-[#003366] px-3 py-1 text-[11px] text-[#002b49]">
        <span>Código compartilhado com a turma</span>
      </div>
    </div>
  );
};
