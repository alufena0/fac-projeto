// src/hooks/useMarqueeTitle.ts
import { useEffect } from 'react';

/**
 * Faz o título da aba rodar como um letreiro (efeito marquee clássico).
 * @param text Texto completo a ser exibido em loop.
 * @param speedMs Intervalo entre cada "frame" do letreiro (ms).
 */
export function useMarqueeTitle(text: string, speedMs = 300) {
  useEffect(() => {
    const original = document.title;
    // Espaço extra no fim pra dar um respiro visual antes de repetir
    const full = text + '   •   ';
    let index = 0;

    const interval = setInterval(() => {
      document.title = full.substring(index) + full.substring(0, index);
      index = (index + 1) % full.length;
    }, speedMs);

    return () => {
      clearInterval(interval);
      document.title = original;
    };
  }, [text, speedMs]);
}
