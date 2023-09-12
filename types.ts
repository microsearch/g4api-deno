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
  collections: string[];
  query: string;
  start: number;
  count: number;
  max_chars?: number;
};

export type SearchResponse = {
  error: string | null;
  totalResults: number;
  results: SearchResponseResult[];
};

export type SearchResponseResult = {
  index: number;
  score: number;
  signature: string;
  title: string;
  collection: string;
  snippet: string;
};

export type FieldIndexSchema = {
  fieldname: string;
  index_type: string;
};

export type IndexSchemaResponse = {
  error: string | null;
  indexes: FieldIndexSchema[];
};
