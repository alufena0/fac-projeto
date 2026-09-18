import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (target: string) => {
    if (target === '/') return path === '/';
    return path.startsWith(target);
  };

  const linkClass = (target: string) =>
    `bg-transparent border-0 cursor-pointer p-0 text-sm no-underline ${
      isActive(target)
        ? 'font-bold text-[#002244] underline'
        : 'classic-link text-[#0000cc]'
    }`;

  return (
    <header
      id="site-header"
      className="bg-[#003366] border border-[#002244] mb-4"
    >
      {/* Título Principal Institucional */}
      <div className="px-6 py-4 bg-[#003366]">
        <p className="text-sm text-[#e2effd] mt-1 mb-0">
          Disciplina:{' '}
          <strong className="text-[#ffffcc]">
            Fundamentos de Algoritmos de Computação (1FAC)
          </strong>{' '}
          &bull; Prof. Leonardo Vianna
        </p>
      </div>

      {/* Menu Horizontal de Links de Texto Tradicionais (sem ícones) */}
      <nav
        id="main-navigation"
        className="bg-[#b8daff] border-t-2 border-b border-[#002244] px-4 py-1.5"
      >
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm list-none m-0 p-0">
          <li>
            <Link to="/" className={linkClass('/')}>
              [ Início ]
            </Link>
          </li>
          <li>
            <Link to="/listas" className={linkClass('/listas')}>
              [ Listas de Exercícios (I &ndash; V) ]
            </Link>
          </li>
          <li>
            <Link to="/enviar" className={linkClass('/enviar')}>
              [ Enviar Resolução ]
            </Link>
          </li>
          <li>
            <Link to="/normas" className={linkClass('/normas')}>
              [ Normas &amp; Moderação ]
            </Link>
          </li>
          <li>
            <Link to="/dicas-c" className={linkClass('/dicas-c')}>
              [ Guia do Compilador GCC ]
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
