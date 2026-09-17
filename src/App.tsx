import React, { useState, useEffect } from 'react';
import { EXERCISE_LISTS, INITIAL_RESOLUTIONS } from './data/exercisesData.ts';
import { Exercise, ExerciseList, Resolution } from './types.ts';
import { Header } from './components/Header.tsx';
import { HomeSection } from './components/HomeSection.tsx';
import { ExerciseListTable } from './components/ExerciseListTable.tsx';
import { ExerciseDetail } from './components/ExerciseDetail.tsx';
import { SubmissionForm } from './components/SubmissionForm.tsx';
import { RulesSection } from './components/RulesSection.tsx';
import { GccGuideSection } from './components/GccGuideSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [lists] = useState<ExerciseList[]>(EXERCISE_LISTS);
  const [resolutions, setResolutions] = useState<Resolution[]>(INITIAL_RESOLUTIONS);
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Buscar resoluções salvas de forma persistente no servidor
  const fetchResolutions = async () => {
    try {
      const res = await fetch('/api/resolutions');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setResolutions(data);
        }
      }
    } catch (err) {
      console.warn('Usando resoluções locais em memória devido a indisponibilidade temporária da API:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResolutions();
  }, []);

  const handleToggleFont = () => {
    setFontFamily((prev) => (prev === 'serif' ? 'sans' : 'serif'));
  };

  const handleSelectExercise = (exercise: Exercise, list: ExerciseList) => {
    setSelectedExerciseId(exercise.id);
    setCurrentView('detalhe');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectExerciseById = (exerciseId: string) => {
    setSelectedExerciseId(exerciseId);
    setCurrentView('detalhe');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenSubmitForExercise = (exerciseId: string) => {
    setSelectedExerciseId(exerciseId);
    setCurrentView('enviar');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNewResolutionSaved = (newRes: Resolution) => {
    setResolutions((prev) => [...prev, newRes]);
    setSelectedExerciseId(newRes.exerciseId);
    setCurrentView('detalhe');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Encontrar o exercício e a lista selecionados atualmente
  let currentExercise: Exercise | null = null;
  let currentList: ExerciseList | null = null;

  if (selectedExerciseId) {
    for (const l of lists) {
      const found = l.exercises.find((ex) => ex.id === selectedExerciseId);
      if (found) {
        currentExercise = found;
        currentList = l;
        break;
      }
    }
  }

  const rootStyle = {
    fontFamily: 'var(--font-main)',
  };

  return (
    <div style={rootStyle} className="min-h-screen bg-[#cce5ff] text-[#111111]">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 py-3">
        {/* Cabeçalho Fixo Institucional */}
        <Header
          currentView={currentView}
          onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          fontFamily={fontFamily}
          onToggleFont={handleToggleFont}
          totalResolutions={resolutions.length}
        />

        {/* Trilha de Navegação (Breadcrumb) clássica */}
        <div className="text-xs text-[#003366] mb-3 px-1">
          <span className="classic-link cursor-pointer font-bold" onClick={() => setCurrentView('home')}>
            Início
          </span>
          {currentView === 'listas' && <span> &gt; Listas de Exercícios</span>}
          {currentView === 'enviar' && <span> &gt; Submissão de Resolução</span>}
          {currentView === 'normas' && <span> &gt; Normas de Submissão &amp; Moderação</span>}
          {currentView === 'dicas-c' && <span> &gt; Guia do Compilador GCC</span>}
          {currentView === 'detalhe' && currentList && currentExercise && (
            <span>
              {' '}
              &gt;{' '}
              <span className="classic-link cursor-pointer" onClick={() => setCurrentView('listas')}>
                {currentList.title}
              </span>{' '}
              &gt; Questão #{currentExercise.number}: {currentExercise.title}
            </span>
          )}
        </div>

        {/* Conteúdo Principal de Acordo com a Visualização */}
        <main id="main-content">
          {currentView === 'home' && (
            <HomeSection
              lists={lists}
              resolutions={resolutions}
              onNavigate={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onSelectExerciseById={handleSelectExerciseById}
            />
          )}

          {currentView === 'listas' && (
            <ExerciseListTable
              lists={lists}
              resolutions={resolutions}
              onSelectExercise={handleSelectExercise}
              onOpenSubmitForExercise={handleOpenSubmitForExercise}
            />
          )}

          {currentView === 'detalhe' && currentExercise && currentList && (
            <ExerciseDetail
              exercise={currentExercise}
              list={currentList}
              resolutions={resolutions.filter((r) => r.exerciseId === currentExercise!.id)}
              onBack={() => setCurrentView('listas')}
              onNewResolutionSaved={handleNewResolutionSaved}
            />
          )}

          {currentView === 'enviar' && (
            <div>
              <div className="mb-3">
                <button
                  onClick={() => setCurrentView('listas')}
                  className="btn-classic text-xs"
                >
                  &laquo; Voltar para as Listas
                </button>
              </div>
              <SubmissionForm
                lists={lists}
                preselectedExerciseId={selectedExerciseId || undefined}
                onSuccess={handleNewResolutionSaved}
                onCancel={() => setCurrentView('listas')}
              />
            </div>
          )}

          {currentView === 'normas' && <RulesSection />}

          {currentView === 'dicas-c' && <GccGuideSection />}
        </main>

        {/* Rodapé Simples */}
        <Footer />
      </div>
    </div>
  );
}
