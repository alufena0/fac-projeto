import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleButtonProps {
  isDark: boolean;
  onToggle: () => void;
}

/**
 * Botão flutuante fixo de troca de tema (claro/escuro).
 * Ícones via lucide-react (já é dependência do projeto), estilo
 * moderno de traço fino. Estilizado via style inline e marcado
 * com data-theme-exempt pra ficar fora do filtro de inversão global.
 * Mostra um tooltip ao passar o mouse indicando a ação do botão.
 */
export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  isDark,
  onToggle,
}) => {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    zIndex: 9999,
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    border: 'none',
    padding: 0,
    transition: 'transform 0.15s ease',
    transform: hovered ? 'scale(1.08)' : 'scale(1)',
  };

  const style: React.CSSProperties = isDark
    ? { ...baseStyle, backgroundColor: '#0d1b2a', border: '2px solid #3a5878' }
    : { ...baseStyle, backgroundColor: '#e2effd', border: '2px solid #50769d' };

  const tooltipStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '24px',
    right: '72px',
    zIndex: 9999,
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'var(--font-main)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    backgroundColor: isDark ? '#0d1b2a' : '#003366',
    color: isDark ? '#e2effd' : '#ffffff',
    border: isDark ? '1px solid #3a5878' : 'none',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.15s ease',
  };

  return (
    <>
      {hovered && (
        <span data-theme-exempt="true" style={tooltipStyle}>
          {isDark ? 'Ativar Modo Claro' : 'Ativar Modo Noturno'}
        </span>
      )}
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo noturno'}
        title={isDark ? 'Modo Claro' : 'Modo Noturno'}
        data-theme-exempt="true"
        style={style}
      >
        {isDark ? (
          <Sun size={22} strokeWidth={1.75} color="#ffd873" />
        ) : (
          <Moon size={20} strokeWidth={1.75} color="#003366" fill="#003366" />
        )}
      </button>
    </>
  );
};
