import React from 'react';

export const GccGuideSection: React.FC = () => {
  return (
    <div className="space-y-4 text-sm">
      <div className="box-classic">
        <div className="box-classic-header">
          Guia Rápido de Compilação &bull; GCC (GNU Compiler Collection)
        </div>
        <p className="m-0 mb-3 text-[#222222] leading-relaxed">
          Para o código funcionar igual no seu computador e no dos colegas, compile seus arquivos <code>.c</code> utilizando as flags recomendadas:
        </p>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          Comando de Compilação no Terminal
        </h3>
        <div className="code-window bg-[#ffffff] p-3 border border-[#4a709c] font-mono text-xs mb-3">
          gcc -Wall -Wextra -pedantic -std=c99 programa.c -o programa
        </div>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          Significado das Flags Principais
        </h3>
        <table className="table-classic text-xs mb-4">
          <thead>
            <tr>
              <th style={{ width: '130px' }}>Flag</th>
              <th>Finalidade Técnica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono font-bold">-Wall</td>
              <td>Habilita todos os avisos (warnings) essenciais sobre construções ambíguas.</td>
            </tr>
            <tr>
              <td className="font-mono font-bold">-Wextra</td>
              <td>Ativa avisos adicionais rigorosos (ex: variáveis não utilizadas, comparações com sinal).</td>
            </tr>
            <tr>
              <td className="font-mono font-bold">-pedantic</td>
              <td>Exige conformidade absoluta com o padrão ISO da linguagem C, rejeitando extensões GNU.</td>
            </tr>
            <tr>
              <td className="font-mono font-bold">-std=c99</td>
              <td>Especifica o padrão ISO C99 (permite declaração de variáveis dentro do laço <code>for</code>).</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          Dicas de Depuração Rápida
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs text-[#333333]">
          <li>
            <strong>Segmentation Fault (Falha de Segmentação):</strong> Ocorre quase sempre por ponteiro nulo (NULL),
            vetor acessado fora dos limites (índice negativo ou &gt;= tamanho) ou esquecimento do <code>&amp;</code> no <code>scanf</code>.
          </li>
          <li>
            <strong>Buffer residual no scanf:</strong> Ao ler caracteres com <code>%c</code> logo após números, utilize um espaço
            antes da especificação de formato: <code>scanf(&quot; %c&quot;, &amp;opcao);</code>.
          </li>
        </ul>
      </div>
    </div>
  );
};
