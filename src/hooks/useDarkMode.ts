import { useEffect, useState } from 'react';

const STORAGE_KEY = 'fac-theme';

/**
 * Hook de modo escuro via inversão de filtro CSS (sem reescrever cada componente).
 * Persiste a escolha do usuário no localStorage.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // localStorage indisponível — segue sem persistir
    }
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
