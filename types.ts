import { Result } from "monads";

export type G4ApiError = {
  status?: number;
  source: "network" | "http" | "auth" | "g4";
  message: string;
  details?: Record<string, unknown>;
};

export type G4ResultPromise<T> = Promise<Result<T, G4ApiError>>;

export type AppMetadata = Record<string, unknown>;

export type SearchRequest = {
  query: string;
  start: number;
  count: number;
  max_chars?: number;
};

export type SearchResponse = {
  error: string | null;
  total_results: number;
  results: {
    index: number;
    score: number;
    signature: string;
    title: string;
    snippet: string;
  }[];
};
