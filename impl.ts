import { Err, Ok } from "monads";

import {
  FieldIndexDesc,
  G4ResultPromise,
  ManifestResponse,
  SearchRequest,
  SearchResponse,
} from "./types.ts";
import { G4ApiError } from "./mod.ts";

export class G4ApiImpl {
  protected constructor(stage: string, tenant: string, appName?: string) {
    this.endpoint = `https://g4-${stage}.v1.mrcapi.net`;
    this.search_endpoint = `https://g4-search-${stage}.v1.mrcapi.net`;
    this.tenant = tenant;
    this.appName = appName;
  }

  /*
    endpoint overrides - call immediately after constructor - for debugging only
  */
  public local_api(endpoint?: string) {
    this.endpoint = endpoint ?? "http://localhost:5000";
    console.log("api endpoint:", this.endpoint);
  }

  public local_search(endpoint?: string) {
    this.search_endpoint = endpoint ?? "http://localhost:3000";
    console.log("search endpoint:", this.search_endpoint);
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
      return Err(networkError(error));
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
      return Err(networkError(error));
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
      `/search`,
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
        `${this.search_endpoint}/manifest`,
        {
          method: "POST",
          headers,
        },
      );
      const bearer = response.headers.get("x-g4-bearer");
      if (bearer != null) this.bearerToken = bearer;
      return await mapG4Response(response);
    } catch (error: unknown) {
      return Err(networkError(error));
    }
  }

  async index_field_manifest(
    fieldname: string,
    collections: string[],
  ): G4ResultPromise<FieldIndexDesc> {
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
        `${this.search_endpoint}/index-field-manifest`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ fieldname, collections }),
        },
      );
      const bearer = response.headers.get("x-g4-bearer");
      if (bearer != null) this.bearerToken = bearer;
      return await mapG4Response(response);
    } catch (error: unknown) {
      return Err(networkError(error));
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

function networkError(error: unknown): G4ApiError {
  return error instanceof Error
    ? {
      status: 0,
      source: "network",
      message: error.message,
      details: { name: error.name },
    }
    : {
      status: 0,
      source: "network",
      message: "unknown error",
      details: {},
    };
}

async function mapG4Response<RespT>(
  response: Response,
): G4ResultPromise<RespT> {
  switch (response.status) {
    case 200:
      return Ok(await response.json());
    case 204: {
      const error: G4ApiError = {
        status: response.status,
        source: "g4",
        message: response.statusText,
        details: {},
      };
      return Err(error);
    }
    case 400: {
      const g4error = response.headers.get("x-g4-error");
      if (g4error) {
        const error: G4ApiError = {
          status: response.status,
          source: "g4",
          message: g4error,
          details: await response.json(),
        };
        return Err(error);
      } else {
        const error: G4ApiError = {
          status: response.status,
          source: "http",
          message: response.statusText,
          details: await response.json(),
        };
        return Err(error);
      }
    }
    case 401: {
      const error: G4ApiError = {
        status: response.status,
        source: "auth",
        message: "unauthorized request",
        details: {},
      };
      return Err(error);
    }
    case 409: {
      const error: G4ApiError = {
        status: response.status,
        source: "g4",
        message: response.statusText,
        details: {},
      };
      return Err(error);
    }
    default: {
      const error: G4ApiError = {
        status: response.status,
        source: "http",
        message: response.statusText,
        details: await response.json(),
      };
      return Err(error);
    }
  }
}
