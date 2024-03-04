import { Err, Ok } from "monads";

import {
  G4ResultPromise,
  ManifestResponse,
  SearchRequest,
  SearchResponse,
} from "./types.ts";

export class G4ApiImpl {
  protected constructor(stage: string, tenant: string, appName?: string) {
    this.endpoint = `https://g4-${stage}.v1.mrcapi.net`;
    this.search_endpoint = `https://g4-search-${stage}.v1.mrcapi.net`;
    this.tenant = tenant;
    this.appName = appName;
  }

  protected get = async <RespT>(path: string): G4ResultPromise<RespT> =>
    await this.http("GET", path);

  protected put = async <ReqT, RespT>(
    path: string,
    request: ReqT,
  ): G4ResultPromise<RespT> => await this.http("PUT", path, request);

  protected post = async <ReqT, RespT>(
    path: string,
    request?: ReqT,
  ): G4ResultPromise<RespT> => await this.http("POST", path, request);

  protected delete = async (path: string): G4ResultPromise<void> =>
    await this.http("DELETE", path);

  protected async http<ReqT, RespT>(
    method: string,
    path: string,
    request?: ReqT,
  ): G4ResultPromise<RespT> {
    try {
      const headers: Record<string, string> = { "x-g4-tenant": this.tenant };
      if (this.appName) headers["x-g4-application"] = this.appName;
      if (request) headers["Content-Type"] = "application/json";
      if (this.apikey !== null) {
        headers["Authorization"] = `apikey ${this.apikey}`;
      } else if (this.session !== null) {
        headers["Authorization"] = `bearer ${this.session}`;
      } else if (this.bearer !== null) {
        headers["Authorization"] = `bearer ${this.bearer}`;
      }
      const response = await fetch(`${this.endpoint}${path}`, {
        method,
        headers,
        body: request ? JSON.stringify(request) : undefined,
      });
      const bearer = response.headers.get("x-g4-bearer");
      if (bearer != null) this.bearerToken = bearer;
      return await mapG4Response(response);
    } catch (error: unknown) {
      return Err({
        source: "network",
        message: error instanceof Error ? error.message : "unknown error",
      });
    }
  }

  protected async searchPost<ReqT, RespT>(
    path: string,
    request: ReqT,
  ): G4ResultPromise<RespT> {
    try {
      const headers: Record<string, string> = {
        "x-g4-tenant": this.tenant,
        "Content-type": "application/json",
      };
      if (this.appName) headers["x-g4-application"] = this.appName;
      if (this.sessionId !== null || this.bearer !== null) {
        headers["Authorization"] = `Bearer ${this.sessionId ?? this.bearer}`;
      }
      const response = await fetch(`${this.search_endpoint}${path}`, {
        method: "POST",
        headers,
        body: JSON.stringify(request),
      });
      const bearer = response.headers.get("x-g4-bearer");
      if (bearer != null) this.bearerToken = bearer;
      return await mapG4Response(response);
    } catch (error: unknown) {
      return Err({
        source: "network",
        message: error instanceof Error ? error.message : "unknown error",
      });
    }
  }

  set sessionId(sessionId: string | null) {
    this.session = sessionId;
  }

  get sessionId(): string | null {
    return this.session;
  }

  set bearerToken(bearer: string | null) {
    this.bearer = bearer;
  }

  get bearerToken(): string | null {
    return this.bearer;
  }

  set apiKey(apikey: string | null) {
    this.apikey = apikey;
  }

  async search(request: SearchRequest): G4ResultPromise<SearchResponse> {
    return await this.searchPost<SearchRequest, SearchResponse>(
      `/search/${this.tenant}`,
      request,
    );
  }

  async manifest(): G4ResultPromise<ManifestResponse> {
    try {
      const headers: Record<string, string> = {
        "x-g4-tenant": this.tenant,
        "Content-type": "application/json",
      };
      if (this.appName) headers["x-g4-application"] = this.appName;
      if (this.sessionId !== null || this.bearer !== null) {
        headers["Authorization"] = `Bearer ${this.sessionId ?? this.bearer}`;
      }
      const response = await fetch(
        `${this.search_endpoint}/manifest/${this.tenant}`,
        {
          method: "POST",
          headers,
        },
      );
      const bearer = response.headers.get("x-g4-bearer");
      if (bearer != null) this.bearerToken = bearer;
      return await mapG4Response(response);
    } catch (error: unknown) {
      return Err({
        source: "network",
        message: error instanceof Error ? error.message : "unknown error",
      });
    }
  }

  private endpoint: string;
  private search_endpoint: string;
  private tenant: string;
  private appName?: string;
  private bearer: string | null = null;
  private apikey: string | null = null;
  private session: string | null = null;
}

async function mapG4Response<RespT>(
  response: Response,
): G4ResultPromise<RespT> {
  switch (response.status) {
    case 200:
      try {
        return Ok(await response.json());
      } catch (err: unknown) {
        return Ok({} as RespT);
      }
    case 204:
      return Err({
        status: response.status,
        source: "g4",
        message: response.statusText,
      });
    case 400: {
      const g4error = response.headers.get("x-g4-error");
      return Err({
        status: response.status,
        message: response.statusText,
        ...(g4error === null
          ? {
            source: "http",
            details: { text: await response.text() },
          }
          : {
            source: "g4",
            details: await response.json(),
          }),
      });
    }
    case 401:
      return Err({
        status: response.status,
        source: "auth",
        message: "unauthorized request",
      });
    default:
      return Err({
        status: response.status,
        source: "http",
        message: response.statusText,
      });
  }
}
