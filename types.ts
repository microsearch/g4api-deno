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

export const SUCCESS = "success";
export const ERROR = "error";

export type SearchResult = {
  type: typeof SUCCESS;
  query: string;
  total_results: number;
  results: SearchResponseResult[];
};

export type SearchError = {
  type: typeof ERROR;
  message: string;
};

export type SearchResponse = SearchResult | SearchError;

export type SearchResponseResult = {
  index: number;
  score: number;
  signature: string;
  title: string;
  collection: string;
  snippet: string;
  archived: boolean;
};

export type ManifestResponse = {
  error: string | null;
  manifest: G4Manifest | null;
};

export type G4Manifest = {
  tag: string;
  version: string;
  tenant: string;
  tenantRepoId: string;
  indexes: FieldIndexSchema[];
  index_data: FieldIndexData[];
  collections: CollectionManifest[];
};

export type FieldIndexSchema = {
  fieldname: string;
  index_type: string;
};

export type FieldIndexDesc =
  | TextIndexData
  | DateIndexData
  | NumericIndexData
  | CharacterIndexData;

export type FieldIndexData = {
  fieldname: string;
  index_desc: FieldIndexDesc;
};

export type TextIndexData = { index_type: "text" };
export type DateIndexData = {
  index_type: "date";
  values: { lo: number; hi: number };
};
export type NumericIndexData = {
  index_type: "number";
  values: { lo: number; hi: number };
};
export type CharacterIndexData = {
  index_type: "character";
  values: CharacterValue[];
};
export type CharacterValue = { value: string; count: number };

export type CollectionManifest = {
  id: number;
  name: string;
  schema: string[];
  active: number;
  archived: number;
};
