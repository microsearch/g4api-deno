import { Result } from "monads";

export type G4ApiError = {
  status: number;
  source: "network" | "http" | "auth" | "g4";
  message: string;
  details: Record<string, unknown>;
};

export type G4ResultPromise<T> = Promise<Result<T, G4ApiError>>;

export type AppMetadata = Record<string, unknown>;

// search

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

// snippets

export type SnippetsRequest = {
  collections: string[];
  signatures: string[];
  query: string;
  start: number;
  count: number;
  max_words?: number;
  hilite?: boolean;
};

export type SnippetsResult = {
  type: typeof SUCCESS;
  query: string;
  total_results: number;
  results: SnippetsResponseResult[];
};

export type SnippetsError = {
  type: typeof ERROR;
  message: string;
};

export type SnippetsResponse = SnippetsResult | SnippetsError;

export type SnippetsResponseResult = {
  index: number;
  score: number;
  signature: string;
  title: string;
  collection: string;
  snippets: string[];
  archived: boolean;
};

export type ManifestResponse = {
  error: string | null;
  manifest: G4Manifest | null;
};

export type CollectionName = string;
export type IndexManifest = Record<CollectionName, FieldIndexManifest>;

export type FieldName = string;
export type FieldIndexManifest = Record<FieldName, FieldIndexDesc>;

export type G4Manifest = {
  tag: string;
  version: string;
  tenant: string;
  tenantRepoId: string;
  indexes: FieldIndexSchema[];
  index_manifest: IndexManifest;
  collections: CollectionManifest[];
};

export type FieldIndexSchema = {
  fieldname: string;
  index_type: FieldIndexType;
};

export type FieldIndexType = "text" | "date" | "number" | "character";

// index_type is the discriminant
export type FieldIndexDesc =
  | TextIndexData
  | DateIndexData
  | NumericIndexData
  | CharacterIndexData;

export type TextIndexData = {
  index_type: "text";
  values: number;
};

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
