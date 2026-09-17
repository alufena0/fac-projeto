import React from 'react';
import { ExerciseList, Resolution } from '../types.ts';

interface HomeSectionProps {
  lists: ExerciseList[];
  resolutions: Resolution[];
  onNavigate: (view: string) => void;
  onSelectExerciseById: (exerciseId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  lists,
  resolutions,
  onNavigate,
  onSelectExerciseById
}) => {
  const totalExercises = lists.reduce((acc, l) => acc + l.exercises.length, 0);
  const totalSubmissions = resolutions.length;
  const recentSubmissions = [...resolutions].reverse().slice(0, 5);

  return (
    <div className="space-y-4">
      {/* Quadro de Boas-Vindas Institucional */}
      <div className="box-classic">
        <div className="box-classic-header">
          Aviso &bull; Disciplina: Fundamentos de Algoritmos de Computação (1FAC) &bull; Prof. Leonardo Vianna
        </div>
        <p className="m-0 mb-2 leading-relaxed text-sm text-[#111111]">
          Bem-vindo(a) ao <strong>Banco de Resoluções da Turma</strong>. Este repositório foi desenvolvido
          pela turma com o objetivo de centralizar soluções comentadas dos exercícios práticos
          em linguagem <strong>C</strong>. O objetivo é propiciar a comparação de abordagens
          algorítmicas, análise de código e auxílio mútuo na preparação para as provas.
        </p>
        <p className="m-0 text-xs text-[#555555]">
          Atenção: A consulta a este banco visa o aprendizado e o esclarecimento de dúvidas. Incentive-se a tentar
          resolver as questões de maneira autônoma antes de consultar o código dos colegas.
        </p>
      </div>

      {/* Resumo Estatístico em Estilo de Tabela Antiga */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-[#003366] bg-[#ffffff] p-3">
          <div className="text-xs font-bold text-[#003366] uppercase border-b border-[#b8daff] pb-1 mb-2">
            Listas de Exercícios
          </div>
          <div className="text-2xl font-bold text-[#003366]">
            5 Listas
          </div>
          <div className="text-xs text-[#555555] mt-1">
            Total de {totalExercises} exercícios catalogados
          </div>
        </div>

        <div className="border border-[#003366] bg-[#ffffff] p-3">
          <div className="text-xs font-bold text-[#003366] uppercase border-b border-[#b8daff] pb-1 mb-2">
            Resoluções Arquivadas
          </div>
          <div className="text-2xl font-bold text-[#0000cc]">
            {totalSubmissions} Códigos
          </div>
          <div className="text-xs text-[#555555] mt-1">
            Persistência compartilhada no servidor
          </div>
        </div>

        <div className="border border-[#003366] bg-[#ffffff] p-3">
          <div className="text-xs font-bold text-[#003366] uppercase border-b border-[#b8daff] pb-1 mb-2">
            Ambiente de Execução
          </div>
          <div className="text-base font-bold text-[#003366]">
            GCC / Linux
          </div>
          <div className="text-xs text-[#555555] mt-1">
            Compilação C (-Wall -pedantic)
          </div>
        </div>
      </div>

      {/* Tabela de Visão Geral das 5 Listas */}
      <div className="box-classic">
        <div className="box-classic-header">
          Índice das Listas de Exercícios
        </div>
        <table className="table-classic">
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Lista</th>
              <th>Título / Descrição da Lista</th>
              <th style={{ width: '90px' }} className="text-center">Questões</th>
              <th style={{ width: '100px' }} className="text-center">Resoluções</th>
              <th style={{ width: '130px' }} className="text-center">Acesso</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => {
              const listResolutionsCount = list.exercises.reduce((acc, ex) => {
                return acc + resolutions.filter((r) => r.exerciseId === ex.id).length;
              }, 0);

              return (
                <tr key={list.id}>
                  <td className="font-bold text-[#003366]">
                    Lista {list.numberRomano}
                  </td>
                  <td>
                    <strong className="text-[#002244]">{list.title}</strong>
                    <div className="text-xs text-[#555555]">{list.description}</div>
                  </td>
                  <td className="text-center">{list.exercises.length}</td>
                  <td className="text-center font-bold text-[#0000cc]">
                    {listResolutionsCount}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => onNavigate('listas')}
                      className="btn-classic text-xs py-0.5 px-2"
                    >
                      [ Abrir Lista ]
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Submissões Recentes da Turma */}
      <div className="box-classic">
        <div className="box-classic-header flex justify-between items-center">
          <span>Últimas Resoluções Submetidas pelos Colegas</span>
          <button
            onClick={() => onNavigate('enviar')}
            className="btn-classic text-xs py-0 px-2"
          >
            [ + Enviar Nova ]
          </button>
        </div>

        {recentSubmissions.length === 0 ? (
          <p className="text-xs text-[#666666] m-0 py-2">
            Nenhuma submissão registrada até o momento.
          </p>
        ) : (
          <table className="table-classic text-xs">
            <thead>
              <tr>
                <th style={{ width: '130px' }}>Data / Hora</th>
                <th>Exercício Relacionado</th>
                <th style={{ width: '180px' }}>Autor</th>
                <th style={{ width: '90px' }} className="text-center">Extensão</th>
                <th style={{ width: '110px' }} className="text-center">Ação</th>
              </tr>
            </thead>
            <tbody>
              {recentSubmissions.map((res) => {
                const exercise = lists
                  .flatMap((l) => l.exercises)
                  .find((ex) => ex.id === res.exerciseId);

                return (
                  <tr key={res.id}>
                    <td className="text-[#555555]">{res.createdAt}</td>
                    <td>
                      <strong>{exercise ? exercise.title : res.exerciseId}</strong>
                      {res.comment && (
                        <div className="text-[11px] text-[#666666] italic">
                          &ldquo;{res.comment}&rdquo;
                        </div>
                      )}
                    </td>
                    <td className="font-bold text-[#003366]">{res.author}</td>
                    <td className="text-center">{res.linesCount} linhas</td>
                    <td className="text-center">
                      <button
                        onClick={() => onSelectExerciseById(res.exerciseId)}
                        className="classic-link text-xs bg-transparent border-0"
                      >
                        [ Ver Código ]
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
