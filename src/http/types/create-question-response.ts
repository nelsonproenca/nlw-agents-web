interface QuestionResponse {
  questionId: string,
  answer: string | null
}

export type CreateQuestionResponse = QuestionResponse