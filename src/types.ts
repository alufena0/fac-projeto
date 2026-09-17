export interface Resolution {
  id: string;
  exerciseId: string;
  author: string;
  code: string;
  comment?: string;
  createdAt: string;
  linesCount: number;
}

export interface Exercise {
  id: string;
  listId: 'lista-1' | 'lista-2' | 'lista-3' | 'lista-4' | 'lista-5';
  number: number;
  title: string;
  description: string;
  inputSpec?: string;
  outputSpec?: string;
  sampleInput?: string;
  sampleOutput?: string;
  tip?: string;
}

export interface ExerciseList {
  id: 'lista-1' | 'lista-2' | 'lista-3' | 'lista-4' | 'lista-5';
  numberRomano: string;
  title: string;
  topic: string;
  description: string;
  exercises: Exercise[];
}

export interface SubmissionPayload {
  exerciseId: string;
  author?: string;
  comment?: string;
  code: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}
