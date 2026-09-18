import React, { useState } from 'react';
import { Exercise, ExerciseList, Resolution } from '../types.ts';

interface ExerciseListTableProps {
  lists: ExerciseList[];
  resolutions: Resolution[];
  onSelectExercise: (exercise: Exercise, list: ExerciseList) => void;
  onOpenSubmitForExercise: (exerciseId: string) => void;
}

export const ExerciseListTable: React.FC<ExerciseListTableProps> = ({
  lists,
  resolutions,
  onSelectExercise,
  onOpenSubmitForExercise,
}) => {
  const [activeListId, setActiveListId] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(
    null,
  );

  const getResolutionCount = (exerciseId: string) => {
    return resolutions.filter((r) => r.exerciseId === exerciseId).length;
  };

  const filteredLists = lists.filter((list) => {
    if (activeListId !== 'all' && list.id !== activeListId) {
      return false;
    }
    return true;
  });

  const toggleExpand = (exerciseId: string) => {
    setExpandedExerciseId((prev) => (prev === exerciseId ? null : exerciseId));
  };

  return (
    <div>
      {/* Barra de Filtro e Busca Rápida */}
      <div className="box-classic mb-4">
        <div className="box-classic-header">
          Filtro das Listas de Exercícios da Disciplina de FAC
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-bold text-[#000000]">Exibir:</span>
            <button
              onClick={() => setActiveListId('all')}
              className={`btn-classic text-xs ${activeListId === 'all' ? 'btn-classic-primary' : ''}`}
            >
              [ Todas as 5 Listas ]
            </button>
            {lists.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveListId(l.id)}
                className={`btn-classic text-xs ${activeListId === l.id ? 'btn-classic-primary' : ''}`}
              >
                [ {l.numberRomano} ]
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="search-input" className="text-xs text-[#333333]">
              Buscar questão:
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Ex: Bhaskara, primo, matriz..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-classic text-xs w-48"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="btn-classic text-xs py-0 px-1"
                title="Limpar busca"
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Exibição das Listas */}
      {filteredLists.map((list) => {
        const exercises = list.exercises.filter((ex) => {
          if (!searchTerm.trim()) return true;
          const term = searchTerm.toLowerCase();
          return (
            ex.title.toLowerCase().includes(term) ||
            ex.description.toLowerCase().includes(term) ||
            ex.number.toString().includes(term)
          );
        });

        if (exercises.length === 0) return null;

        return (
          <div key={list.id} className="mb-6">
            <div className="bg-[#b8daff] border border-[#003366] border-b-0 px-3 py-2">
              <h2 className="text-base font-bold text-[#002b49] m-0">
                {list.title}
              </h2>
              <div className="text-xs text-[#003366] mt-0.5">
                <em>{list.description}</em>
              </div>
            </div>

            <table className="table-classic">
              <thead>
                <tr>
                  <th style={{ width: '45px' }} className="text-center">
                    Nº
                  </th>
                  <th style={{ width: '220px' }}>Título do Exercício</th>
                  <th>Enunciado Completo</th>
                  <th style={{ width: '120px' }} className="text-center">
                    Resoluções
                  </th>
                  <th style={{ width: '175px' }} className="text-center">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((ex) => {
                  const count = getResolutionCount(ex.id);
                  const isExpanded = expandedExerciseId === ex.id;

                  return (
                    <React.Fragment key={ex.id}>
                      <tr className={isExpanded ? 'bg-[#f0f5fa]' : ''}>
                        <td className="text-center font-bold text-[#333333] align-top">
                          #{ex.number}
                        </td>
                        <td className="font-bold text-[#002b49] align-top">
                          <button
                            onClick={() => onSelectExercise(ex, list)}
                            className="classic-link text-left bg-transparent border-0 p-0 font-bold"
                          >
                            {ex.title}
                          </button>
                        </td>
                        <td className="text-xs sm:text-sm text-[#222222] align-top">
                          <p className="m-0 leading-relaxed whitespace-pre-line">
                            {ex.description}
                          </p>
                          <div className="mt-1 text-[11px] text-[#555555]">
                            <button
                              onClick={() => toggleExpand(ex.id)}
                              className="classic-link text-[11px] bg-transparent border-0 p-0"
                            >
                              {isExpanded
                                ? '[-] Ocultar especificações de I/O'
                                : '[+] Ver especificações e exemplos'}
                            </button>
                          </div>
                        </td>
                        <td className="text-center align-top whitespace-nowrap">
                          {count > 0 ? (
                            <span className="font-bold text-[#0000cc] bg-[#eef3fb] border border-[#a4c0e4] px-1.5 py-0.5 text-xs">
                              {count} {count === 1 ? 'código' : 'códigos'}
                            </span>
                          ) : (
                            <span className="text-xs text-[#777777] italic">
                              Nenhum ainda
                            </span>
                          )}
                        </td>
                        <td className="text-center align-top">
                          <div className="flex flex-col gap-1 items-stretch">
                            <button
                              onClick={() => onSelectExercise(ex, list)}
                              className="btn-classic text-xs w-full whitespace-nowrap overflow-hidden text-ellipsis"
                              style={{ minHeight: '26px' }}
                              title="Acessa a página da questão com todas as resoluções enviadas"
                            >
                              Ver Resoluções ({count})
                            </button>
                            <button
                              onClick={() => onOpenSubmitForExercise(ex.id)}
                              className="btn-classic text-xs w-full font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                              style={{ minHeight: '26px' }}
                              title="Enviar uma resolução em C para esta questão"
                            >
                              + Enviar Solução
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Linha expansível com detalhes rápidos do problema */}
                      {isExpanded && (
                        <tr className="bg-[#f9fbfd]">
                          <td
                            colSpan={5}
                            className="p-3 border-t-0 border-b border-[#003366]"
                          >
                            <div className="border border-[#4a709c] bg-[#ffffff] p-3 text-xs">
                              <div className="font-bold text-[#003366] mb-1">
                                Detalhes Rápidos &mdash; {ex.title}:
                              </div>
                              {(ex.inputSpec || ex.outputSpec) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                                  {ex.inputSpec && (
                                    <div>
                                      <strong>Entrada:</strong> {ex.inputSpec}
                                    </div>
                                  )}
                                  {ex.outputSpec && (
                                    <div>
                                      <strong>Saída:</strong> {ex.outputSpec}
                                    </div>
                                  )}
                                </div>
                              )}
                              {(ex.sampleInput || ex.sampleOutput) && (
                                <div className="flex flex-wrap gap-4 font-mono text-[11px] bg-[#f4f4f4] p-2 border border-[#d0d0d0]">
                                  {ex.sampleInput && (
                                    <div>
                                      <span className="font-sans font-bold">
                                        Entrada Exemplo:
                                      </span>{' '}
                                      {ex.sampleInput.replace(/\n/g, ' ')}
                                    </div>
                                  )}
                                  {ex.sampleOutput && (
                                    <div>
                                      <span className="font-sans font-bold">
                                        Saída Exemplo:
                                      </span>{' '}
                                      {ex.sampleOutput.replace(/\n/g, ' ')}
                                    </div>
                                  )}
                                </div>
                              )}
                              <div className="mt-2 text-right">
                                <button
                                  onClick={() => onSelectExercise(ex, list)}
                                  className="btn-classic text-xs"
                                >
                                  Abrir Página Completa da Questão &raquo;
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
