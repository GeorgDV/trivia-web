import { QuestionType } from "./api/question.ts"
import { Difficulty } from "./difficulty.ts"

export type Filters = {
  amount: number,
  category?: number|null,
  difficulty?: Difficulty|null,
  type?: QuestionType|null,
}

// Default filters.
export function buildDefaultFilters(): Filters {
  return {
    amount: 10,
  }
}