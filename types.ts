import { Result } from "monads";

export type G4ApiError = {
  status?: number;
  source: "network" | "http" | "auth" | "g4";
  message: string;
  details?: Record<string, unknown>;
};

export type G4ResultPromise<T> = Promise<Result<T, G4ApiError>>;

export type AppMetadata = Record<string, unknown>;
