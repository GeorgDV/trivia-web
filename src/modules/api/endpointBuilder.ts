import { Filters } from "../filters";

// URL to which the endpoints are based on.
const MAIN_URL = 'https://opentdb.com/api.php?';

export function buildEndpoint(filters: Filters): string {
  let endpoint = MAIN_URL;
  for (let key in filters) {
    if (filters.hasOwnProperty(key)) {
      endpoint += `${key}=${filters[key]}&`;
    }
  }
  return endpoint;
}