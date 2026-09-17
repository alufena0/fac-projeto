import React, { useState } from 'react';
import { ExerciseList, Resolution } from '../types.ts';
import { formatCCode } from '../utils/cFormatter.ts';
import { validateSubmission } from '../utils/moderation.ts';
import { CodeViewer } from './CodeViewer.tsx';

interface SubmissionFormProps {
  lists: ExerciseList[];
  preselectedExerciseId?: string;
  onSuccess: (newResolution: Resolution) => void;
  onCancel?: () => void;
}

const TEMPLATE_INT_MAIN = `#include <stdio.h>

int main()
{
    /* Escreva sua resolucao aqui */

    return 0;
}`;

const TEMPLATE_VOID_MAIN = `#include <stdio.h>

void main()
{
    /* Escreva sua resolucao aqui */
}`;

export const SubmissionForm: React.FC<SubmissionFormProps> = ({
  lists,
  preselectedExerciseId,
  onSuccess,
  onCancel
}) => {
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(
    preselectedExerciseId || (lists[0]?.exercises[0]?.id ?? 'ex-1-1')
  );
  const [author, setAuthor] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  // Auto-indentação do código digitado
  const handleAutoIndent = () => {
    if (!code) return;
    const formatted = formatCCode(code, 4);
    setCode(formatted);
  };

  const handleApplyTemplate = (type: 'int' | 'void') => {
    const selectedTemplate = type === 'int' ? TEMPLATE_INT_MAIN : TEMPLATE_VOID_MAIN;
    setCode(selectedTemplate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validação de moderação pré-envio no cliente
    const validation = validateSubmission(code, author, comment);
    if (!validation.valid) {
      setErrorMessage(validation.error || 'Erro na validação do código.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/resolutions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          exerciseId: selectedExerciseId,
          author: author.trim() || undefined,
          comment: comment.trim() || undefined,
          code: code.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || 'Não foi possível registrar a resolução.');
        setIsSubmitting(false);
        return;
      }

      setSuccessMessage('Resolução enviada! Já está disponível para a turma.');
      setIsSubmitting(false);
      
      // Notifica o componente pai
      setTimeout(() => {
        onSuccess(data);
      }, 1200);
    } catch (err) {
      setErrorMessage('Não foi possível enviar agora. Tente de novo em instantes.');
      setIsSubmitting(false);
    }
  };

  // Encontrar o exercício selecionado para exibir seu título
  const allExercises = lists.flatMap((l) => l.exercises);
  const currentExercise = allExercises.find((ex) => ex.id === selectedExerciseId);

  return (
    <div className="box-classic">
      <div className="box-classic-header flex justify-between items-center">
        <span>Enviar Resolução em C</span>
        {onCancel && (
          <button onClick={onCancel} className="btn-classic text-xs py-0 px-2">
            [ Fechar ]
          </button>
        )}
      </div>

      {errorMessage && (
        <div className="bg-[#ffebeb] border border-[#cc0000] p-3 mb-4 text-xs text-[#990000]">
          <strong>Atenção:</strong> {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="bg-[#e6f4ea] border border-[#137333] p-3 mb-4 text-xs text-[#0d652d]">
          <strong>Confirmação:</strong> {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <table className="w-full border-collapse mb-4 text-xs sm:text-sm">
          <tbody>
            <tr>
              <td className="w-40 py-2 pr-2 font-bold text-[#003366] align-top">
                Questão / Exercício:
              </td>
              <td className="py-2">
                <select
                  value={selectedExerciseId}
                  onChange={(e) => setSelectedExerciseId(e.target.value)}
                  className="input-classic w-full max-w-xl text-xs sm:text-sm"
                  disabled={isSubmitting}
                >
                  {lists.map((list) => (
                    <optgroup key={list.id} label={`${list.numberRomano}. ${list.title}`}>
                      {list.exercises.map((ex) => (
                        <option key={ex.id} value={ex.id}>
                          Lista {list.numberRomano} - Ex. {ex.number}: {ex.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {currentExercise && (
                  <div className="mt-2 p-2.5 bg-[#ffffff] border border-[#7ea4cc] text-xs text-[#222222]">
                    <div className="font-bold text-[#003366] mb-1">
                      Enunciado Completo da Questão:
                    </div>
                    <div className="whitespace-pre-line leading-relaxed text-[#111111]">
                      {currentExercise.description}
                    </div>
                    {(currentExercise.inputSpec || currentExercise.outputSpec) && (
                      <div className="mt-2 pt-2 border-t border-[#d8e8f8] text-[11px] text-[#444444] space-y-1">
                        {currentExercise.inputSpec && (
                          <div>
                            <strong className="text-[#003366]">Entrada:</strong> {currentExercise.inputSpec}
                          </div>
                        )}
                        {currentExercise.outputSpec && (
                          <div>
                            <strong className="text-[#003366]">Saída:</strong> {currentExercise.outputSpec}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </td>
            </tr>

            <tr>
              <td className="py-2 pr-2 font-bold text-[#003366] align-top">
                Nome do Autor(a):
              </td>
              <td className="py-2">
                <input
                  type="text"
                  placeholder="Ex: João da Silva ou deixe em branco para 'Estudante Anônimo'"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  maxLength={60}
                  className="input-classic w-full max-w-md text-xs sm:text-sm"
                  disabled={isSubmitting}
                />
                <span className="text-xs text-[#666666] ml-2">(Opcional)</span>
              </td>
            </tr>

            <tr>
              <td className="py-2 pr-2 font-bold text-[#003366] align-top">
                Abordagem / Observação:
              </td>
              <td className="py-2">
                <input
                  type="text"
                  placeholder="Ex: Utilizei ponteiros para evitar cópia de memória / Complexidade O(n)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={150}
                  className="input-classic w-full max-w-xl text-xs sm:text-sm"
                  disabled={isSubmitting}
                />
                <span className="text-xs text-[#666666] ml-2">(Opcional)</span>
              </td>
            </tr>

            <tr>
              <td className="py-2 pr-2 font-bold text-[#003366] align-top">
                Código em C:
              </td>
              <td className="py-2">
                {/* Opção de escolha de template antes da caixa de código */}
                <div className="mb-2 p-2 bg-[#f4f9ff] border border-[#7ea4cc] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="font-bold text-[#003366]">Inserir Template:</span>
                    <button
                      type="button"
                      onClick={() => handleApplyTemplate('int')}
                      className="btn-classic text-xs"
                      title="Inserir estrutura canônica com int main() e return 0"
                    >
                      [ int main() ]
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApplyTemplate('void')}
                      className="btn-classic text-xs"
                      title="Inserir estrutura direta com void main()"
                    >
                      [ void main() ]
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={handleAutoIndent}
                      className="btn-classic text-xs"
                      title="Alinha o código respeitando a profundidade de chaves {}"
                    >
                      [ Auto-Indentar ]
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewMode(!previewMode)}
                      className="btn-classic text-xs"
                    >
                      {previewMode ? '[ Editar Código ]' : '[ Pré-visualizar ]'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCode('')}
                      className="btn-classic text-xs"
                      title="Limpar o conteúdo da caixa de código"
                    >
                      [ Limpar ]
                    </button>
                  </div>
                </div>

                {!previewMode ? (
                  <div>
                    <textarea
                      rows={14}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="#include <stdio.h>&#10;&#10;int main()&#10;{&#10;    /* Escreva sua resolucao aqui */&#10;&#10;    return 0;&#10;}"
                      className="input-classic w-full font-mono text-xs sm:text-sm leading-tight p-2"
                      style={{ tabSize: 4 }}
                      spellCheck={false}
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between text-xs text-[#555555] mt-1">
                      <span>Mínimo 30 caracteres &bull; Sem links externos &bull; Sem ofensas</span>
                      <span>{code.length} caracteres &bull; {code.split('\n').length} linhas</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-2">
                    <p className="text-xs text-[#555555] m-0 mb-1">
                      Pré-visualização com destaque de sintaxe e indentação aplicada:
                    </p>
                    <CodeViewer
                      code={code || '// Nenhum código digitado'}
                      author={author || 'Estudante Anônimo'}
                      createdAt="Agora"
                      comment={comment}
                    />
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="classic-hr" />

        <div className="flex justify-between items-center">
          <div className="text-xs text-[#666666]">
            * O código enviado será validado pelo filtro de moderação e compartilhado com a turma.
          </div>
          <div className="flex space-x-2">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                disabled={isSubmitting}
                className="btn-classic"
              >
                Cancelar
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting || !code.trim()}
              className="btn-classic btn-classic-primary"
            >
              {isSubmitting ? 'Validando e Gravando...' : 'Gravar Resolução no Banco'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
