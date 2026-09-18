import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';
import { EXERCISE_LISTS, INITIAL_RESOLUTIONS } from './data/exercisesData.ts';
import { Exercise, ExerciseList, Resolution } from './types.ts';
import { Header } from './components/Header.tsx';
import { Breadcrumb } from './components/Breadcrumb.tsx';
import { HomeSection } from './components/HomeSection.tsx';
import { ExerciseListTable } from './components/ExerciseListTable.tsx';
import { ExerciseDetail } from './components/ExerciseDetail.tsx';
import { SubmissionForm } from './components/SubmissionForm.tsx';
import { RulesSection } from './components/RulesSection.tsx';
import { GccGuideSection } from './components/GccGuideSection.tsx';
import { Footer } from './components/Footer.tsx';
import { useMarqueeTitle } from './hooks/useMarqueeTitle';
import { useDarkMode } from './hooks/useDarkMode';
import { ThemeToggleButton } from './components/ThemeToggleButton.tsx';

// --- Provedor de dados compartilhado entre todas as rotas ---
function useAppData() {
  const [lists] = useState<ExerciseList[]>(EXERCISE_LISTS);
  const [resolutions, setResolutions] =
    useState<Resolution[]>(INITIAL_RESOLUTIONS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      console.warn(
        'Usando resoluções locais em memória devido a indisponibilidade temporária da API:',
        err,
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResolutions();
  }, []);

  const handleNewResolutionSaved = (newRes: Resolution) => {
    setResolutions((prev) => [...prev, newRes]);
  };

  return { lists, resolutions, isLoading, handleNewResolutionSaved };
}

// --- Página: Home ---
function HomePage({
  lists,
  resolutions,
}: {
  lists: ExerciseList[];
  resolutions: Resolution[];
}) {
  const navigate = useNavigate();
  return (
    <HomeSection
      lists={lists}
      resolutions={resolutions}
      onNavigate={(view) => navigate(view === 'home' ? '/' : `/${view}`)}
      onSelectExerciseById={(exerciseId) =>
        navigate(`/exercicio/${exerciseId}`)
      }
    />
  );
}

// --- Página: Listas de Exercícios ---
function ListasPage({
  lists,
  resolutions,
}: {
  lists: ExerciseList[];
  resolutions: Resolution[];
}) {
  const navigate = useNavigate();
  return (
    <ExerciseListTable
      lists={lists}
      resolutions={resolutions}
      onSelectExercise={(exercise) => navigate(`/exercicio/${exercise.id}`)}
      onOpenSubmitForExercise={(exerciseId) =>
        navigate(`/enviar/${exerciseId}`)
      }
    />
  );
}

// --- Página: Detalhe do Exercício ---
function ExerciseDetailPage({
  lists,
  resolutions,
  onNewResolutionSaved,
}: {
  lists: ExerciseList[];
  resolutions: Resolution[];
  onNewResolutionSaved: (r: Resolution) => void;
}) {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  const navigate = useNavigate();

  let currentExercise: Exercise | null = null;
  let currentList: ExerciseList | null = null;

  for (const l of lists) {
    const found = l.exercises.find((ex) => ex.id === exerciseId);
    if (found) {
      currentExercise = found;
      currentList = l;
      break;
    }
  }

  if (!currentExercise || !currentList) {
    return <Navigate to="/listas" replace />;
  }

  return (
    <ExerciseDetail
      exercise={currentExercise}
      list={currentList}
      resolutions={resolutions.filter(
        (r) => r.exerciseId === currentExercise!.id,
      )}
      onBack={() => navigate('/listas')}
      onNewResolutionSaved={(newRes) => {
        onNewResolutionSaved(newRes);
        navigate(`/exercicio/${newRes.exerciseId}`);
      }}
    />
  );
}

// --- Página: Enviar Resolução ---
function EnviarPage({
  lists,
  onNewResolutionSaved,
}: {
  lists: ExerciseList[];
  onNewResolutionSaved: (r: Resolution) => void;
}) {
  const { exerciseId } = useParams<{ exerciseId?: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-3">
        <button
          onClick={() => navigate('/listas')}
          className="btn-classic text-xs"
        >
          &laquo; Voltar para as Listas
        </button>
      </div>
      <SubmissionForm
        lists={lists}
        preselectedExerciseId={exerciseId}
        onSuccess={(newRes) => {
          onNewResolutionSaved(newRes);
          navigate(`/exercicio/${newRes.exerciseId}`);
        }}
        onCancel={() => navigate('/listas')}
      />
    </div>
  );
}

// --- Layout raiz: cabeçalho, breadcrumb, rodapé e o <Outlet> das rotas ---
function AppLayout() {
  const { lists, resolutions, handleNewResolutionSaved } = useAppData();
  const navigate = useNavigate();

  const rootStyle = { fontFamily: 'var(--font-main)' };
  useMarqueeTitle('FAC Banco de Resoluções da Turma');
  const { isDark, toggle } = useDarkMode();

  return (
    <div style={rootStyle} className="min-h-screen bg-[#cce5ff] text-[#111111]">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 py-3">
        <Header />

        <Breadcrumb lists={lists} />

        <main id="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage lists={lists} resolutions={resolutions} />}
            />
            <Route
              path="/listas"
              element={<ListasPage lists={lists} resolutions={resolutions} />}
            />
            <Route
              path="/exercicio/:exerciseId"
              element={
                <ExerciseDetailPage
                  lists={lists}
                  resolutions={resolutions}
                  onNewResolutionSaved={handleNewResolutionSaved}
                />
              }
            />
            <Route
              path="/enviar"
              element={
                <EnviarPage
                  lists={lists}
                  onNewResolutionSaved={handleNewResolutionSaved}
                />
              }
            />
            <Route
              path="/enviar/:exerciseId"
              element={
                <EnviarPage
                  lists={lists}
                  onNewResolutionSaved={handleNewResolutionSaved}
                />
              }
            />
            <Route path="/normas" element={<RulesSection />} />
            <Route path="/dicas-c" element={<GccGuideSection />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <ThemeToggleButton isDark={isDark} onToggle={toggle} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
