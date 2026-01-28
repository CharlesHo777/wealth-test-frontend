// src/api/types.ts

export type QuestionType = "likert" | "mcq" | string;

export interface ApiOption {
  id: string;
  value: string;
  label: string;
  order?: number;
}

export interface ApiQuestion {
  id: string;
  text: string;        // <-- backend uses "text"
  type: QuestionType;  // <-- "likert" | "mcq"
  order?: number;
  metadata?: Record<string, unknown>;
  options: ApiOption[]; // backend sends [] for likert
}

export interface ActiveContentResponse {
  contentVersionId: string;
  versionName?: string;
  questions: ApiQuestion[];
}

export interface CreateSessionResponse {
  sessionId: string;
  contentVersionId: string;
}

export type AnswerValue = number | string;

export interface AnswerDTO {
  questionId: string;
  answerValue: AnswerValue;
}

export interface PatchAnswersRequest {
  answers: AnswerDTO[];
}

/**
 * Submit returns a "snapshot" (idempotent) according to your spec.
 * Keep as unknown for now; we’ll define a concrete type once you confirm the shape.
 */
export type ResultSnapshot = unknown;

export interface SubmitSessionRequest {
  email?: string;
}

export interface SubmitSessionResponse {
  resultSnapshot: ResultSnapshot;
  [k: string]: unknown;
}
