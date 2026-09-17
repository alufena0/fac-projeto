import React from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  fontFamily: 'serif' | 'sans';
  onToggleFont: () => void;
  totalResolutions: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  fontFamily,
  onToggleFont,
  totalResolutions
}) => {
  return (
    <header id="site-header" className="bg-[#003366] border border-[#002244] mb-4">
      {/* Faixa superior de identificação acadêmica */}
      <div className="bg-[#002244] border-b border-[#001933] px-4 py-1.5 text-xs text-[#e2effd] flex justify-between items-center">
        <div>
          <span className="font-bold text-[#ffffcc] tracking-wide">FAC &mdash; Fundamentos de Algoritmos de Computação</span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <span>Tipografia: <strong>Inter / Segoe UI</strong></span>
          <span>&bull;</span>
          <span>Resoluções Arquivadas: <strong className="text-[#ffffcc]">{totalResolutions}</strong></span>
        </div>
      </div>

      {/* Título Principal Institucional */}
      <div className="px-6 py-4 bg-[#003366]">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight m-0 text-[#ffffff]">
          FAC &mdash; Banco de Resoluções da Turma
        </h1>
        <p className="text-sm text-[#e2effd] mt-1 mb-0">
          Disciplina: <strong className="text-[#ffffcc]">Fundamentos de Algoritmos de Computação (1FAC)</strong> &bull; Prof. Leonardo Vianna
        </p>
      </div>

      {/* Menu Horizontal de Links de Texto Tradicionais (sem ícones) */}
      <nav id="main-navigation" className="bg-[#b8daff] border-t-2 border-b border-[#002244] px-4 py-1.5">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm list-none m-0 p-0">
          <li>
            <button
              onClick={() => onNavigate('home')}
              className={`bg-transparent border-0 cursor-pointer p-0 text-sm ${
                currentView === 'home' ? 'font-bold text-[#002244] underline' : 'classic-link text-[#0000cc]'
              }`}
            >
              [ Início ]
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('listas')}
              className={`bg-transparent border-0 cursor-pointer p-0 text-sm ${
                currentView === 'listas' ? 'font-bold text-[#002244] underline' : 'classic-link text-[#0000cc]'
              }`}
            >
              [ Listas de Exercícios (I &ndash; V) ]
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('enviar')}
              className={`bg-transparent border-0 cursor-pointer p-0 text-sm ${
                currentView === 'enviar' ? 'font-bold text-[#002244] underline' : 'classic-link text-[#0000cc]'
              }`}
            >
              [ Submeter Resolução ]
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('normas')}
              className={`bg-transparent border-0 cursor-pointer p-0 text-sm ${
                currentView === 'normas' ? 'font-bold text-[#002244] underline' : 'classic-link text-[#0000cc]'
              }`}
            >
              [ Normas &amp; Moderação ]
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('dicas-c')}
              className={`bg-transparent border-0 cursor-pointer p-0 text-sm ${
                currentView === 'dicas-c' ? 'font-bold text-[#002244] underline' : 'classic-link text-[#0000cc]'
              }`}
            >
              [ Guia do Compilador GCC ]
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
