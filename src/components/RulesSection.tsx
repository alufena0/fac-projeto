import React from 'react';

export const RulesSection: React.FC = () => {
  return (
    <div className="space-y-4 text-sm">
      <div className="box-classic">
        <div className="box-classic-header">
          Regras do Banco de Resoluções &bull; Turma de FAC
        </div>
        <p className="m-0 mb-3 text-[#222222] leading-relaxed">
          Regras básicas para manter esse espaço útil pra todo mundo:
        </p>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          1. Moderação Automática Prévia
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#333333] mb-4">
          <li>
            <strong>Bloqueio de Links (Anti-Spam):</strong> É proibida a inclusão
            de endereços web (URLs, prefixos <code>http://</code>, <code>https://</code>, <code>www.</code>,
            encurtadores ou domínios de internet). Códigos ou comentários com esses links são
            rejeitados automaticamente na submissão.
          </li>
          <li>
            <strong>Filtro de Conteúdo:</strong> Ofensas, palavrões ou termos depreciativos acarretarão rejeição imediata.
          </li>
          <li>
            <strong>Tamanho Mínimo e Validade Estrutural:</strong> Submissões com menos de 30 caracteres ou sem elementos
            básicos da linguagem C (como chaves <code>&#123;&#125;</code>, terminação com ponto-e-vírgula <code>;</code>
            ou diretivas <code>#include</code>) são bloqueadas para evitar envios vazios ou ruído.
          </li>
        </ul>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          2. Imutabilidade e Permanência dos Registros
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#333333] mb-4">
          <li>
            <strong>Proibição de Exclusão ou Edição de Terceiros:</strong> Uma vez arquivada,
            uma resolução torna-se parte do acervo da turma. Ninguém pode alterar ou apagar o trabalho enviado por outro colega.
          </li>
          <li>
            <strong>Complementaridade:</strong> Caso discorde de uma implementação ou encontre algum erro de lógica,
            o ideal é submeter uma <em>nova resolução corrigida</em>, detalhando a observação no campo de notas.
          </li>
        </ul>

        <h3 className="text-sm font-bold text-[#003366] border-b border-[#b8daff] pb-1 mb-2">
          3. Boas Práticas de Codificação em C
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#333333]">
          <li>Utilize nomes de variáveis autoexplicativos em português ou inglês.</li>
          <li>Sempre libere com <code>free()</code> qualquer bloco alocado dinamicamente.</li>
          <li>Evite variáveis globais desnecessárias; prefira passagem de parâmetros e ponteiros.</li>
          <li>Ao utilizar <code>int main()</code>, finalize com <code>return 0;</code>.</li>
        </ul>
      </div>
    </div>
  );
};
