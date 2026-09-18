import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ExerciseList } from '../types.ts';

interface BreadcrumbProps {
  lists: ExerciseList[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ lists }) => {
  const location = useLocation();
  const path = location.pathname;

  if (path === '/') return null;

  let exerciseCrumb: React.ReactNode = null;

  const exerciseMatch = path.match(/^\/exercicio\/(.+)$/);
  if (exerciseMatch) {
    const exerciseId = exerciseMatch[1];
    for (const l of lists) {
      const found = l.exercises.find((ex) => ex.id === exerciseId);
      if (found) {
        exerciseCrumb = (
          <span>
            {' '}
            &gt;{' '}
            <Link to="/listas" className="classic-link cursor-pointer">
              {l.title}
            </Link>{' '}
            &gt; Questão #{found.number}: {found.title}
          </span>
        );
        break;
      }
    }
  }

  return (
    <div className="text-xs text-[#003366] mb-3 px-1">
      <Link to="/" className="classic-link cursor-pointer font-bold">
        Início
      </Link>
      {path === '/listas' && <span> &gt; Listas de Exercícios</span>}
      {path.startsWith('/enviar') && <span> &gt; Submissão de Resolução</span>}
      {path === '/normas' && (
        <span> &gt; Normas de Submissão &amp; Moderação</span>
      )}
      {path === '/dicas-c' && <span> &gt; Guia do Compilador GCC</span>}
      {exerciseCrumb}
    </div>
  );
};
