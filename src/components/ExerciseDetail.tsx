import React, { useState } from 'react';
import { Exercise, ExerciseList, Resolution } from '../types.ts';
import { CodeViewer } from './CodeViewer.tsx';
import { SubmissionForm } from './SubmissionForm.tsx';

interface ExerciseDetailProps {
  exercise: Exercise;
  list: ExerciseList;
  resolutions: Resolution[];
  onBack: () => void;
  onNewResolutionSaved: (newRes: Resolution) => void;
}

export const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  list,
  resolutions,
  onBack,
  onNewResolutionSaved
}) => {
  const [showSubmitForm, setShowSubmitForm] = useState<boolean>(false);

  const handleSuccess = (newRes: Resolution) => {
    setShowSubmitForm(false);
    onNewResolutionSaved(newRes);
  };

  return (
    <div>
      {/* Navegação de topo do exercício */}
      <div className="flex justify-between items-center mb-3">
        <button onClick={onBack} className="btn-classic text-xs">
          &laquo; Voltar para as Listas de Exercícios
        </button>
        <div className="text-xs text-[#003366]">
          <strong>{list.title}</strong> &bull; Exercício #{exercise.number}
        </div>
      </div>

      {/* Painel do Enunciado Completo */}
      <div className="box-classic">
        <div className="box-classic-header flex justify-between items-center">
          <span>
            Questão {exercise.number}: {exercise.title}
          </span>
          <span className="text-xs font-normal">
            {resolutions.length} {resolutions.length === 1 ? 'resolução enviada' : 'resoluções enviadas'}
          </span>
        </div>

        <div className="text-sm leading-relaxed text-[#111111] mb-4">
          <p className="m-0 font-normal whitespace-pre-line">{exercise.description}</p>
        </div>

        {(exercise.inputSpec || exercise.outputSpec) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-xs">
            {exercise.inputSpec && (
              <div className="border border-[#7ea4cc] p-2.5 bg-[#fdfdfd]">
                <strong className="block text-[#003366] border-b border-[#b8daff] pb-1 mb-1.5">
                  Especificação de Entrada:
                </strong>
                <div className="text-[#333333]">{exercise.inputSpec}</div>
              </div>
            )}

            {exercise.outputSpec && (
              <div className="border border-[#7ea4cc] p-2.5 bg-[#fdfdfd]">
                <strong className="block text-[#003366] border-b border-[#b8daff] pb-1 mb-1.5">
                  Especificação de Saída:
                </strong>
                <div className="text-[#333333]">{exercise.outputSpec}</div>
              </div>
            )}
          </div>
        )}

        {/* Exemplos de Entrada e Saída em formato clássico */}
        {(exercise.sampleInput || exercise.sampleOutput) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3 text-xs font-mono">
            {exercise.sampleInput && (
              <div className="border border-[#7ea4cc] bg-[#f8fbff] p-2">
                <div className="font-sans font-bold text-[#003366] text-[11px] uppercase mb-1 border-b border-[#b8daff] pb-0.5">
                  Exemplo de Entrada (Terminal / stdin):
                </div>
                <pre className="m-0 whitespace-pre text-[#111111]">{exercise.sampleInput}</pre>
              </div>
            )}

            {exercise.sampleOutput && (
              <div className="border border-[#7ea4cc] bg-[#f8fbff] p-2">
                <div className="font-sans font-bold text-[#003366] text-[11px] uppercase mb-1 border-b border-[#b8daff] pb-0.5">
                  Exemplo de Saída Esperada (stdout):
                </div>
                <pre className="m-0 whitespace-pre text-[#111111]">{exercise.sampleOutput}</pre>
              </div>
            )}
          </div>
        )}

        {exercise.tip && (
          <div className="bg-[#e8f2fe] border border-[#7ea4cc] p-2 text-xs text-[#002b49]">
            <strong>Dica Didática:</strong> {exercise.tip}
          </div>
        )}
      </div>

      {/* Botão de Enviar Nova Resolução */}
      {!showSubmitForm && (
        <div className="mb-4 flex justify-between items-center bg-[#b8daff] border border-[#003366] px-4 py-2.5">
          <span className="text-xs sm:text-sm text-[#002244] font-medium">
            Possui uma solução diferente ou otimizada para este problema?
          </span>
          <button
            onClick={() => setShowSubmitForm(true)}
            className="btn-classic btn-classic-primary text-xs sm:text-sm"
          >
            [ + Enviar Nova Resolução em C ]
          </button>
        </div>
      )}

      {/* Formulário Embutido de Submissão */}
      {showSubmitForm && (
        <div className="mb-4">
          <SubmissionForm
            lists={[list]}
            preselectedExerciseId={exercise.id}
            onSuccess={handleSuccess}
            onCancel={() => setShowSubmitForm(false)}
          />
        </div>
      )}

      {/* Seção de Resoluções dos Colegas */}
      <div className="box-classic">
        <div className="box-classic-header flex justify-between items-center">
          <span>Resoluções Arquivadas da Turma ({resolutions.length})</span>
          <span className="text-[11px] font-normal text-[#003366]">
            Códigos permanentes &bull; Proibida a exclusão de trabalhos alheios
          </span>
        </div>

        {resolutions.length === 0 ? (
          <div className="p-6 text-center text-sm text-[#666666] bg-[#f9f9f9] border border-dashed border-[#a0a0a0]">
            <p className="m-0 mb-2">Ainda não há nenhuma resolução arquivada para este exercício.</p>
            <p className="text-xs text-[#777777] m-0 mb-3">
              Seja o primeiro colega a contribuir com seu código em C!
            </p>
            <button
              onClick={() => setShowSubmitForm(true)}
              className="btn-classic btn-classic-primary text-xs"
            >
              [ Enviar Resolução Pioneira ]
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {resolutions.map((res, index) => (
              <div key={res.id}>
                <div className="text-xs font-bold text-[#333333] mb-1">
                  Resolução #{index + 1} de {resolutions.length}:
                </div>
                <CodeViewer
                  code={res.code}
                  author={res.author}
                  createdAt={res.createdAt}
                  comment={res.comment}
                  exerciseTitle={exercise.title}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
