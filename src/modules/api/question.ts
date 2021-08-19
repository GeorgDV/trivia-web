import { Category } from "../category";
import { buildDefaultFilters, Filters } from "../filters.ts";
import { buildEndpoint } from "./endpointBuilder.ts";

export type Question = {
  category: Category,
  correct_answer: string,
  incorrect_answers: string[],
  question: string,
  type: QuestionType,
}

export enum QuestionType {
  BOOLEAN = 'boolean',
  MULTIPLE = 'multiple',
}


export async function findQuestions(filters?: Filters): Promise<Question[]> {
  return fetch(buildEndpoint(filters || buildDefaultFilters()))
    .then((response) => response.json())
    .then((data) => {
      // Respone codes taken from: https://opentdb.com/api_config.php
      switch (data.response_code) {
        // Response code '0' means success.
        case 0:
          return data.results;
        case 1:
          console.error(`Response ${data.response_code}. API did not find enough questions for the query.`);
          break;
        case 2:
          console.error(`Response ${data.response_code}. Query contains invalid parameters.`);
          break;
        case 3:
          console.error(`Response ${data.response_code}. Token not found.`);
          break;
        case 4:
          console.error(`Response ${data.response_code}. Token empty.`);
          break;
      }
    });
}