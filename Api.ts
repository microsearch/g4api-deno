/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @format int32 */
export enum UserStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum UserEventType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value1000 = 1000,
  Value1001 = 1001,
  Value1002 = 1002,
  Value1003 = 1003,
  Value1004 = 1004,
  Value1005 = 1005,
}

export interface AdminUser {
  /** @format int32 */
  id: number;
  /** @format date-time */
  created: string;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  /** @format date-time */
  lastSeen: string | null;
  roleNames: string[];
}

export interface Attachment {
  /** @minLength 1 */
  filename: string;
  /** @minLength 1 */
  signature: string;
}

export interface AuthenticatedSessionResponse {
  validCredentials: boolean;
  accessAllowed: boolean;
  /** @minLength 1 */
  sessionId: string | null;
  /** @format int32 */
  userId: number | null;
  /** @minLength 1 */
  username: string | null;
  /** @minLength 1 */
  fullname: string | null;
  /** @minLength 1 */
  email: string | null;
  /** @minLength 1 */
  bearer: string | null;
  claims: string[] | null;
  roles: string[] | null;
  profiles: string[] | null;
  collections: string[] | null;
  /** @minLength 1 */
  version: string;
}

export interface Collection {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  schema: Record<string, FieldDescriptor>;
  /** @format date-time */
  created: string;
  /** @format date-time */
  updated: string | null;
}

export interface CollectionContentsDocument {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  signature: string;
  docMetadata: Record<string, string>;
  archived: boolean;
}

export interface CollectionContentsDocumentsRequest2 {
  contentsFields: ContentsField[];
  docMetadataFieldnames: string[];
}

export interface CollectionContentsDocumentsResponse {
  documents: CollectionContentsDocument[];
}

export interface CollectionContentsRequest2 {
  contentsFieldnames: string[];
}

export interface CollectionContentsResponse {
  root: CollectionNode;
}

export interface CollectionDocument {
  /** @minLength 1 */
  signature: string;
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  mimeType: string;
  docMetadata: Record<string, string>;
  attachments: Attachment[];
  /** @format date-time */
  archived: string | null;
}

export interface CollectionDocumentUpdate {
  /** @minLength 1 */
  signature: string;
  /** @minLength 1 */
  title: string;
  docMetadata: Record<string, string>;
  attachments: Attachment[];
  /** @format date-time */
  archived?: string | null;
}

export interface CollectionNode {
  /** @minLength 1 */
  value: string;
  key: string[];
  children: CollectionNode[] | null;
}

export interface ContentsField {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  value: string;
}

export interface CreateAdminRequest {
  /** @minLength 1 */
  username: string;
  password?: string;
  passwordCrypto?: string;
  passwordSalt?: string;
  passwordHash?: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
}

export interface CreateAdminResponse {
  /** @format int32 */
  id?: number;
}

export interface CreateCollectionRequest {
  /** @minLength 1 */
  name: string;
  schema: Record<string, FieldDescriptor>;
}

export interface CreateCollectionResponse {
  /** @format int32 */
  id: number;
}

export interface CreateProfileRequest {
  /** @minLength 1 */
  name: string;
  collections: number[];
}

export interface CreateProfileResponse {
  /** @format int32 */
  id: number;
}

export interface CreateRoleRequest {
  defaultScope?: string | null;
  /** @minLength 1 */
  name: string;
  claims?: string[] | null;
}

export interface CreateRoleResponse {
  /** @format int32 */
  id: number;
}

export interface CreateSessionRequest {
  /**
   * @minLength 1
   * @example "user@microsearch.net"
   */
  username: string;
  /**
   * @minLength 1
   * @example "password123"
   */
  password: string;
  data?: any;
  /** @format int32 */
  timeout?: number | null;
  detail?: Record<string, any>;
}

export interface CreateTenantRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
}

export interface CreateTenantResponse {
  /** @format int32 */
  id: number;
}

export interface CreateUserRequest {
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];
  customFields: Record<string, any>;
  /** @minLength 1 */
  appName: string | null;
  appMetadata?: Record<string, any>;
}

export interface CreateUserResponse {
  /** @format int32 */
  id: number;
}

export interface DeleteUnverifiedDocumentsResponse {
  /** @format int32 */
  count: number;
}

export interface DocInfoResponse {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  collectionName: string;
  metadata: Record<string, string>;
  /** @minLength 1 */
  filename: string;
  attachments: Attachment[];
}

export interface ExportUsersResponse {
  /** @minLength 1 */
  tenant: string;
  /** @minLength 1 */
  version: string;
  /** @minLength 1 */
  stage: string;
  /** @format date-time */
  exported: string;
  users: ExportedUser[];
}

export interface ExportedUser {
  /** @format date-time */
  created: string;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: string[];
  profiles: string[];
  collections: string[];
  denyCollections: string[];
  /** @minLength 1 */
  passwordHash: string;
  /** @format date-time */
  archived?: string | null;
  metadata: Record<string, Record<string, any>>;
}

export type FieldDescriptor = object;

export interface G4AuthAuthMessage {
  validCredentials: boolean;
  accessAllowed: boolean;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  host: string;
}

export interface G4CollectionLoadedMessage {
  /** @format int32 */
  count: number;
  /** @minLength 1 */
  name: string;
}

export interface G4CollectionLoadingMessage {
  /** @format int32 */
  count: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  title: string;
}

export interface G4DocumentLoadedMessage {
  /** @minLength 1 */
  username: string;
  /** @format int64 */
  docId: number;
  /** @minLength 1 */
  signature: string;
  /** @minLength 1 */
  mimeType: string | null;
  /** @minLength 1 */
  filename: string | null;
  /** @minLength 1 */
  loaded: string | null;
  policies: string[];
  /** @minLength 1 */
  jobId: string | null;
}

export interface G4SessionCloseMessage {
  /** @minLength 1 */
  sessionId: string;
  /** @minLength 1 */
  host: string;
}

export interface G4SessionCreateMessage {
  /** @minLength 1 */
  sessionId: string;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  host: string;
}

export interface G4SessionFailMessage {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  host: string;
}

export interface G4TenantArchiveMessage {
  /** @format int32 */
  tenantId: number;
}

export interface G4TenantCreateMessage {
  /** @format int32 */
  tenantId: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  description: string | null;
}

export interface G4UserArchiveMessage {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  host: string;
}

export interface G4UserCreateMessage {
  /** @minLength 1 */
  username: string;
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  host: string;
}

export interface G4UserImportMessage {
  /** @minLength 1 */
  username: string;
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  host: string;
}

export interface G4UserUpdateMessage {
  /** @minLength 1 */
  username: string | null;
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  host: string;
}

export interface GetAdminsResponse {
  admins?: AdminUser[] | null;
}

export interface GetCollectionResponse {
  /** @minLength 1 */
  bucketName: string;
  /** @format uuid */
  tenantRepoId: string;
  documents: CollectionDocument[];
}

export interface GetCollectionsResponse {
  collections: Collection[];
}

export interface GetProfileResponse {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  collections: number[];
}

export interface GetProfilesResponse {
  profiles: GetProfileResponse[];
}

export interface GetRolesResponse {
  scopes: string[];
  roles: RoleResponse[];
}

export interface GetSessionResponse {
  /** @minLength 1 */
  bearer: string;
  /** @format int32 */
  userId: number;
  data: any;
}

export interface GetTenantResponse {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @format date-time */
  created: string;
  /** @minLength 1 */
  description: string | null;
  /** @format uuid */
  repository: string;
  activeUsers: {
    /** @format int32 */
    Pending?: number;
    /** @format int32 */
    Active?: number;
    /** @format int32 */
    Inactive?: number;
    /** @format int32 */
    Reset?: number;
    /** @format int32 */
    Validating?: number;
    /** @format int32 */
    Anonymous?: number;
  };
  archivedUsers: {
    /** @format int32 */
    Pending?: number;
    /** @format int32 */
    Active?: number;
    /** @format int32 */
    Inactive?: number;
    /** @format int32 */
    Reset?: number;
    /** @format int32 */
    Validating?: number;
    /** @format int32 */
    Anonymous?: number;
  };
  userEvents: {
    /** @format int32 */
    UserAuthenticated?: number;
    /** @format int32 */
    UserAuthenticationFailure?: number;
    /** @format int32 */
    UserClaimTokens?: number;
    /** @format int32 */
    UserResetTokens?: number;
    /** @format int32 */
    UserClaimTokenVerification?: number;
    /** @format int32 */
    UserResetTokenVerification?: number;
    /** @format int32 */
    AdminCreated?: number;
    /** @format int32 */
    UserCreated?: number;
    /** @format int32 */
    UserImported?: number;
    /** @format int32 */
    UserUpdated?: number;
    /** @format int32 */
    PasswordChanged?: number;
    /** @format int32 */
    UserArchived?: number;
  };
  /** @format date-time */
  firstEvent: string | null;
  /** @format date-time */
  lastEvent: string | null;
}

export interface GetTenantsResponse {
  tenants: GetTenantResponse[];
}

export interface GetUserDetailsResponse {
  /** @format int32 */
  id: number;
  /** @format date-time */
  created: string;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, Record<string, any>>;
  roleNames: string[];
  profileNames: string[];
}

export interface GetUserEventsRequest {
  /** @format int32 */
  userId?: number | null;
  /** @format date-time */
  start?: string | null;
  /** @format date-time */
  stop?: string | null;
  eventType?: UserEventType;
  host?: string | null;
  appName?: string | null;
  /** @format int32 */
  skip?: number | null;
  /** @format int32 */
  take?: number | null;
}

export interface GetUserEventsResponse {
  request: GetUserEventsRequest;
  /** @format int32 */
  total: number;
  events: RetrievedUserEvent[];
}

export interface GetUserResponse {
  /** @format int32 */
  id: number;
  /** @format date-time */
  created: string;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  /** @format date-time */
  lastSeen: string;
  metadata: Record<string, any>;
  roleNames: string[];
  profileNames: string[];
}

export interface GetUsersRequest {
  appName?: string | null;
  contains?: string | null;
  /** @format int32 */
  skip?: number | null;
  /** @format int32 */
  take?: number | null;
  archived?: boolean | null;
}

export interface GetUsersWithAppMetadataResponse {
  /** @format int32 */
  total: number;
  /** @minLength 1 */
  contains: string | null;
  /** @format int32 */
  skip: number | null;
  /** @format int32 */
  take: number | null;
  archived: boolean | null;
  users: UserWithAppMetadata[];
}

export interface ImportUserRequest {
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  passwordCrypto: string;
  /** @minLength 1 */
  passwordSalt: string;
  /** @minLength 1 */
  passwordHash: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];
  customFields?: Record<string, any>;
  appName?: string | null;
  appMetadata?: Record<string, any>;
}

export interface ImportUserResponse {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  bearer: string;
}

export interface ImportUsersRequest {
  /** @minLength 1 */
  tenant: string;
  users: ExportedUser[];
}

export interface ImportUsersResponse {
  /** @format int32 */
  importErrors: number;
  /** @format int32 */
  usersImported: number;
  errors: string[];
  imports: string[];
}

export interface LoadDocumentRequest {
  /** @minLength 1 */
  signature: string;
  filename?: string | null;
  process?: ProcessingSettings;
}

export interface LoadDocumentResponse {
  /** @format int64 */
  id: number;
  /** @minLength 1 */
  signedUploadUrl: string | null;
}

export interface LoadedDocumentsResponse {
  signatures: string[];
}

export interface PasswordChangeRequest {
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  password: string;
  /** @minLength 1 */
  newPassword: string;
}

export interface PasswordPolicy {
  /** @format int32 */
  minLength?: number;
  /** @format int32 */
  minNumeric?: number;
  /** @format int32 */
  minUpperCase?: number;
  /** @format int32 */
  minLowerCase?: number;
  /** @format int32 */
  minNonAlphanumeric?: number;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export interface ProcessingSettings {
  html?: boolean;
  pdf?: boolean;
}

export interface RefreshResponse {
  /** @minLength 1 */
  username: string;
  claims: string[];
  /** @minLength 1 */
  bearer: string;
}

export interface RetrievedUserEvent {
  /** @format int32 */
  userId: number;
  /** @format int32 */
  activeUserId: number;
  /** @format date-time */
  occurred: string;
  eventType: UserEventType;
  /** @minLength 1 */
  host: string;
  /** @minLength 1 */
  appName: string | null;
  detail: Record<string, any>;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  activeUsername: string;
  /** @minLength 1 */
  activeFullname: string;
  status: UserStatus;
}

export interface RoleResponse {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  scope: string;
  /** @minLength 1 */
  name: string;
  claims: string[];
}

export interface SecurityToken {
  /** @minLength 1 */
  username: string | null;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  token: string;
}

export interface UnprocessedDocumentsResponse {
  signatures: string[];
}

export interface UpdateCollectionRequest {
  updates: CollectionDocumentUpdate[];
  deletes: string[];
}

export interface UpdateCollectionResponse {
  /** @format int32 */
  id: number;
  results: UpdateResult[];
}

export interface UpdateProfileRequest {
  name?: string | null;
  collections?: number[] | null;
}

export interface UpdateProfileResponse {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  collections: number[];
}

export interface UpdateResult {
  /** @minLength 1 */
  signature: string;
  /** @minLength 1 */
  result: string;
  /** @minLength 1 */
  detail: string | null;
}

export interface UpdateRoleRequest {
  defaultScope?: string | null;
  newName?: string | null;
  claims?: string[] | null;
}

export interface UpdateUserRequest {
  status?: UserStatus;
  username?: string | null;
  fullname?: string | null;
  email?: string | null;
  scope?: string | null;
  roles?: number[] | null;
  profiles?: number[] | null;
  collections?: number[] | null;
  denyCollections?: number[] | null;
  customFields?: Record<string, any>;
  password?: string | null;
  passwordCrypto?: string | null;
  passwordSalt?: string | null;
  passwordHash?: string | null;
  appName?: string | null;
  appMetadata?: Record<string, any>;
}

export interface UpdateUserResponse {
  /** @format int32 */
  id: number;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];
  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, any>;
}

export interface UserAuthenticationRequest {
  /**
   * @minLength 1
   * @example "user@microsearch.net"
   */
  username: string;
  /**
   * @minLength 1
   * @example "password123"
   */
  password: string;
  detail?: Record<string, any>;
}

export interface UserAuthenticationResponse {
  validCredentials: boolean;
  accessAllowed: boolean;
  /** @format int32 */
  userId: number | null;
  /** @minLength 1 */
  username: string | null;
  /** @minLength 1 */
  fullname: string | null;
  /** @minLength 1 */
  email: string | null;
  /** @minLength 1 */
  bearer: string | null;
  claims: string[] | null;
  roles: string[] | null;
  profiles: string[] | null;
  collections: string[] | null;
  /** @minLength 1 */
  version: string;
}

export interface UserClaimAccountRequest {
  /** @minLength 1 */
  token: string;
  username?: string | null;
  password?: string | null;
}

export interface UserResetPasswordRequest {
  /** @minLength 1 */
  token: string;
  password?: string | null;
}

export interface UserWithAppMetadata {
  /** @format int32 */
  id: number;
  status: UserStatus;
  /** @minLength 1 */
  username: string;
  /** @minLength 1 */
  fullname: string;
  /** @minLength 1 */
  email: string;
  roles: number[];
  profiles: number[];
  collections: number[];
  denyCollections: number[];
  /** @format date-time */
  lastSeen: string | null;
  metadata: Record<string, any>;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${
      encodeURIComponent(typeof value === "number" ? value : `${value}`)
    }`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body: typeof body === "undefined" || body === null
          ? null
          : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat ? r : await response[responseFormat]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title G4 API
 * @version v1
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admins = {
    /**
     * @description Returns the list of all admin user records.
     *
     * @tags Admins
     * @name AdminsList
     * @summary Get admin user list
     * @request GET:/admins
     * @secure
     */
    adminsList: (params: RequestParams = {}) =>
      this.request<GetAdminsResponse, ProblemDetails>({
        path: `/admins`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags Admins
     * @name AdminCreate
     * @summary Create new admin user
     * @request POST:/admin
     * @secure
     */
    adminCreate: (data: CreateAdminRequest, params: RequestParams = {}) =>
      this.request<CreateAdminResponse, ProblemDetails>({
        path: `/admin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name AuthCreate
     * @summary Authenticate user credentials
     * @request POST:/auth
     * @secure
     */
    authCreate: (data: UserAuthenticationRequest, params: RequestParams = {}) =>
      this.request<UserAuthenticationResponse, ProblemDetails>({
        path: `/auth`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name AuthList
     * @summary Refresh authentication token
     * @request GET:/auth
     * @secure
     */
    authList: (params: RequestParams = {}) =>
      this.request<RefreshResponse, ProblemDetails>({
        path: `/auth`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  policy = {
    /**
     * No description
     *
     * @tags Authentication
     * @name PasswordList
     * @summary Get a tenant's password policy
     * @request GET:/policy/password
     * @secure
     */
    passwordList: (params: RequestParams = {}) =>
      this.request<PasswordPolicy, ProblemDetails>({
        path: `/policy/password`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  password = {
    /**
     * No description
     *
     * @tags Authentication
     * @name PasswordUpdate
     * @summary Change password
     * @request PUT:/password
     * @secure
     */
    passwordUpdate: (data: PasswordChangeRequest, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/password`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  sync = {
    /**
     * No description
     *
     * @tags Authentication
     * @name SyncCreate
     * @summary Process any pending G3 account synchronization requests
     * @request POST:/sync
     * @secure
     */
    syncCreate: (params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/sync`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  collections = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsList
     * @summary Get list of document collections
     * @request GET:/collections
     * @secure
     */
    collectionsList: (params: RequestParams = {}) =>
      this.request<GetCollectionsResponse, ProblemDetails>({
        path: `/collections`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name CollectionsCreate
     * @summary Create document collection
     * @request POST:/collections
     * @secure
     */
    collectionsCreate: (
      data: CreateCollectionRequest,
      params: RequestParams = {},
    ) =>
      this.request<CreateCollectionResponse, ProblemDetails>({
        path: `/collections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  collection = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionDetail
     * @summary Get collection contents
     * @request GET:/collection/{id}
     * @secure
     */
    collectionDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetCollectionResponse, ProblemDetails>({
        path: `/collection/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name CollectionCreate
     * @summary Update collection contents
     * @request POST:/collection/{id}
     * @secure
     */
    collectionCreate: (
      id: number,
      data: UpdateCollectionRequest,
      params: RequestParams = {},
    ) =>
      this.request<UpdateCollectionResponse, ProblemDetails>({
        path: `/collection/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name CollectionDelete
     * @summary Archive document collection
     * @request DELETE:/collection/{id}
     * @secure
     */
    collectionDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/collection/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  collectionContents = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionContentsCreate
     * @summary Get TOC tree for collection
     * @request POST:/collection-contents/{collection}
     * @secure
     */
    collectionContentsCreate: (
      collection: string,
      data: CollectionContentsRequest2,
      params: RequestParams = {},
    ) =>
      this.request<CollectionContentsResponse, ProblemDetails>({
        path: `/collection-contents/${collection}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  collectionContentsDocuments = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionContentsDocumentsCreate
     * @summary Get TOC node documents for collection
     * @request POST:/collection-contents-documents/{collection}
     * @secure
     */
    collectionContentsDocumentsCreate: (
      collection: string,
      data: CollectionContentsDocumentsRequest2,
      params: RequestParams = {},
    ) =>
      this.request<CollectionContentsDocumentsResponse, ProblemDetails>({
        path: `/collection-contents-documents/${collection}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  collectionMetadata = {
    /**
     * No description
     *
     * @tags Collections
     * @name CollectionMetadataDetail
     * @summary Get collection metadata
     * @request GET:/collection-metadata/{id}
     * @secure
     */
    collectionMetadataDetail: (
      id: number,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ProblemDetails>({
        path: `/collection-metadata/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Collections
     * @name CollectionMetadataUpdate
     * @summary Set collection metadata
     * @request PUT:/collection-metadata/{id}
     * @secure
     */
    collectionMetadataUpdate: (
      id: number,
      data: Record<string, any>,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/collection-metadata/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  documents = {
    /**
     * No description
     *
     * @tags Documents
     * @name DocumentsCreate
     * @summary Prepare for document upload
     * @request POST:/documents
     * @secure
     */
    documentsCreate: (data: LoadDocumentRequest, params: RequestParams = {}) =>
      this.request<LoadDocumentResponse, ProblemDetails>({
        path: `/documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  document = {
    /**
     * No description
     *
     * @tags Documents
     * @name DocumentCreate
     * @summary Verify an uploaded document
     * @request POST:/document/{id}
     * @secure
     */
    documentCreate: (
      id: number,
      query?: {
        /** Job Id */
        jobid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/document/${id}`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Documents
     * @name DocumentDetail
     * @summary Retrieve original document from repository
     * @request GET:/document/{signature}
     * @secure
     */
    documentDetail: (signature: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/document/${signature}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  htmlfile = {
    /**
     * No description
     *
     * @tags Documents
     * @name HtmlfileDetail
     * @summary Retrieve raw HTML file from repository (NOT SUPPORTED: Use search service /html API instead)
     * @request GET:/htmlfile/{tenant}/{sessionId}/{signature}/{filename}
     * @secure
     */
    htmlfileDetail: (
      tenant: string,
      sessionId: string,
      signature: string,
      filename: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/htmlfile/${tenant}/${sessionId}/${signature}/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  docfile = {
    /**
     * No description
     *
     * @tags Documents
     * @name DocfileDetail
     * @summary Retrieve original document file from repository (For use in HTML attributes only)
     * @request GET:/docfile/{tenant}/{sessionId}/{signature}
     * @secure
     */
    docfileDetail: (
      tenant: string,
      sessionId: string,
      signature: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/docfile/${tenant}/${sessionId}/${signature}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  docinfo = {
    /**
     * No description
     *
     * @tags Documents
     * @name DocinfoDetail
     * @summary Retrieve document info
     * @request GET:/docinfo/{signature}
     * @secure
     */
    docinfoDetail: (signature: string, params: RequestParams = {}) =>
      this.request<DocInfoResponse[], ProblemDetails>({
        path: `/docinfo/${signature}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  loadedDocuments = {
    /**
     * No description
     *
     * @tags Documents
     * @name LoadedDocumentsList
     * @summary Get list of loaded documents
     * @request GET:/loaded-documents
     * @secure
     */
    loadedDocumentsList: (
      query?: {
        /** Document MIME type filter */
        mimeType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LoadedDocumentsResponse, ProblemDetails>({
        path: `/loaded-documents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  unprocessedDocuments = {
    /**
     * No description
     *
     * @tags Documents
     * @name UnprocessedDocumentsList
     * @summary Get list of unprocessed documents
     * @request GET:/unprocessed-documents
     * @secure
     */
    unprocessedDocumentsList: (params: RequestParams = {}) =>
      this.request<UnprocessedDocumentsResponse, ProblemDetails>({
        path: `/unprocessed-documents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  unverifiedDocuments = {
    /**
     * No description
     *
     * @tags Documents
     * @name UnverifiedDocumentsDelete
     * @summary Delete unverified documents
     * @request DELETE:/unverified-documents
     * @secure
     */
    unverifiedDocumentsDelete: (params: RequestParams = {}) =>
      this.request<DeleteUnverifiedDocumentsResponse, ProblemDetails>({
        path: `/unverified-documents`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  exportUsers = {
    /**
     * No description
     *
     * @tags ImportExport
     * @name ExportUsersCreate
     * @summary Export users
     * @request POST:/export-users
     * @secure
     */
    exportUsersCreate: (params: RequestParams = {}) =>
      this.request<ExportUsersResponse, ProblemDetails>({
        path: `/export-users`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  importUsers = {
    /**
     * No description
     *
     * @tags ImportExport
     * @name ImportUsersCreate
     * @summary Import users
     * @request POST:/import-users
     * @secure
     */
    importUsersCreate: (data: ImportUsersRequest, params: RequestParams = {}) =>
      this.request<ImportUsersResponse, ProblemDetails>({
        path: `/import-users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userClaimTokens = {
    /**
     * No description
     *
     * @tags Internal
     * @name UserClaimTokensList
     * @summary Request user claim tokens
     * @request GET:/user-claim-tokens
     * @secure
     */
    userClaimTokensList: (
      query?: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SecurityToken[], ProblemDetails>({
        path: `/user-claim-tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  userResetTokens = {
    /**
     * No description
     *
     * @tags Internal
     * @name UserResetTokensList
     * @summary Request user password reset tokens
     * @request GET:/user-reset-tokens
     * @secure
     */
    userResetTokensList: (
      query?: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SecurityToken[], ProblemDetails>({
        path: `/user-reset-tokens`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  userClaim = {
    /**
     * No description
     *
     * @tags Internal
     * @name UserClaimUpdate
     * @summary Assign credentials to an anonymous account
     * @request PUT:/user-claim
     * @secure
     */
    userClaimUpdate: (
      data: UserClaimAccountRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/user-claim`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  userPassword = {
    /**
     * No description
     *
     * @tags Internal
     * @name UserPasswordUpdate
     * @summary Reset a user password
     * @request PUT:/user-password
     * @secure
     */
    userPasswordUpdate: (
      data: UserResetPasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/user-password`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  userDetails = {
    /**
     * No description
     *
     * @tags Internal
     * @name UserDetailsDetail
     * @summary Get user details by user id
     * @request GET:/user-details/{id}
     * @secure
     */
    userDetailsDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetUserDetailsResponse, ProblemDetails>({
        path: `/user-details/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  notify = {
    /**
     * No description
     *
     * @tags Notifications
     * @name NotifyCreate
     * @summary Handle SNS subscription messages
     * @request POST:/notify
     * @secure
     */
    notifyCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/notify`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  profiles = {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfilesList
     * @summary Get profile list for a tenant
     * @request GET:/profiles
     * @secure
     */
    profilesList: (params: RequestParams = {}) =>
      this.request<GetProfilesResponse, ProblemDetails>({
        path: `/profiles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  profile = {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileDetail
     * @summary Get a profile by id
     * @request GET:/profile/{id}
     * @secure
     */
    profileDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, ProblemDetails>({
        path: `/profile/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileUpdate
     * @summary Update a profile
     * @request PUT:/profile/{id}
     * @secure
     */
    profileUpdate: (
      id: number,
      data: UpdateProfileRequest,
      params: RequestParams = {},
    ) =>
      this.request<UpdateProfileResponse, ProblemDetails>({
        path: `/profile/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileDelete
     * @summary Archive a profile
     * @request DELETE:/profile/{id}
     * @secure
     */
    profileDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/profile/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileCreate
     * @summary Create a new profile
     * @request POST:/profile
     * @secure
     */
    profileCreate: (data: CreateProfileRequest, params: RequestParams = {}) =>
      this.request<CreateProfileResponse, ProblemDetails>({
        path: `/profile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  profileMetadata = {
    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileMetadataDetail
     * @summary Get profile metadata
     * @request GET:/profile-metadata/{id}
     * @secure
     */
    profileMetadataDetail: (
      id: number,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ProblemDetails>({
        path: `/profile-metadata/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profiles
     * @name ProfileMetadataUpdate
     * @summary Set profile metadata
     * @request PUT:/profile-metadata/{id}
     * @secure
     */
    profileMetadataUpdate: (
      id: number,
      data: Record<string, any>,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/profile-metadata/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  roles = {
    /**
     * No description
     *
     * @tags Roles
     * @name RolesDetail
     * @summary Get role list for a tenant and scope
     * @request GET:/roles/{scope}
     * @secure
     */
    rolesDetail: (scope: string, params: RequestParams = {}) =>
      this.request<GetRolesResponse, ProblemDetails>({
        path: `/roles/${scope}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RolesList
     * @summary Get role list for a tenant
     * @request GET:/roles
     * @secure
     */
    rolesList: (params: RequestParams = {}) =>
      this.request<GetRolesResponse, ProblemDetails>({
        path: `/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  role = {
    /**
     * No description
     *
     * @tags Roles
     * @name RoleDetail
     * @summary Get a role by id
     * @request GET:/role/{id}
     * @secure
     */
    roleDetail: (id: number, params: RequestParams = {}) =>
      this.request<RoleResponse, ProblemDetails>({
        path: `/role/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RoleUpdate
     * @summary Update a role
     * @request PUT:/role/{id}
     * @secure
     */
    roleUpdate: (
      id: number,
      data: UpdateRoleRequest,
      params: RequestParams = {},
    ) =>
      this.request<RoleResponse, ProblemDetails>({
        path: `/role/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RoleDelete
     * @summary Archive a role
     * @request DELETE:/role/{id}
     * @secure
     */
    roleDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/role/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RoleCreate
     * @summary Create a new role
     * @request POST:/role
     * @secure
     */
    roleCreate: (data: CreateRoleRequest, params: RequestParams = {}) =>
      this.request<CreateRoleResponse, ProblemDetails>({
        path: `/role`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  roleMetadata = {
    /**
     * No description
     *
     * @tags Roles
     * @name RoleMetadataDetail
     * @summary Get role metadata
     * @request GET:/role-metadata/{id}
     * @secure
     */
    roleMetadataDetail: (
      id: number,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ProblemDetails>({
        path: `/role-metadata/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name RoleMetadataUpdate
     * @summary Set role metadata
     * @request PUT:/role-metadata/{id}
     * @secure
     */
    roleMetadataUpdate: (
      id: number,
      data: Record<string, any>,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/role-metadata/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  session = {
    /**
     * No description
     *
     * @tags Sessions
     * @name SessionCreate
     * @summary Create a persistent session
     * @request POST:/session
     * @secure
     */
    sessionCreate: (data: CreateSessionRequest, params: RequestParams = {}) =>
      this.request<AuthenticatedSessionResponse, ProblemDetails>({
        path: `/session`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sessions
     * @name SessionDetail
     * @summary Get session
     * @request GET:/session/{id}
     * @secure
     */
    sessionDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetSessionResponse, ProblemDetails>({
        path: `/session/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sessions
     * @name SessionUpdate
     * @summary Update session data
     * @request PUT:/session/{id}
     * @secure
     */
    sessionUpdate: (id: string, data: any, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/session/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sessions
     * @name SessionDelete
     * @summary Delete session
     * @request DELETE:/session/{id}
     * @secure
     */
    sessionDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/session/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  staticSession = {
    /**
     * No description
     *
     * @tags Sessions
     * @name StaticSessionDetail
     * @summary Get session without updating ttl (internal use)
     * @request GET:/static-session/{id}
     * @secure
     */
    staticSessionDetail: (id: string, params: RequestParams = {}) =>
      this.request<GetSessionResponse, ProblemDetails>({
        path: `/static-session/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  tenants = {
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantsList
     * @summary Get tenant list
     * @request GET:/tenants
     * @secure
     */
    tenantsList: (params: RequestParams = {}) =>
      this.request<GetTenantsResponse, ProblemDetails>({
        path: `/tenants`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenants
     * @name TenantsDelete
     * @summary Purge archived tenants
     * @request DELETE:/tenants
     * @secure
     */
    tenantsDelete: (
      query?: {
        /**
         * Minimum age in days
         * @format int32
         */
        days?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/tenants`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  tenant = {
    /**
     * No description
     *
     * @tags Tenants
     * @name TenantDetail
     * @summary Get tenant by id
     * @request GET:/tenant/{id}
     * @secure
     */
    tenantDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetTenantResponse, ProblemDetails>({
        path: `/tenant/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenants
     * @name TenantDelete
     * @summary Archive a tenant
     * @request DELETE:/tenant/{id}
     * @secure
     */
    tenantDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/tenant/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenants
     * @name TenantCreate
     * @summary Create a new tenant
     * @request POST:/tenant
     * @secure
     */
    tenantCreate: (data: CreateTenantRequest, params: RequestParams = {}) =>
      this.request<CreateTenantResponse, ProblemDetails>({
        path: `/tenant`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Returns the list of user records which match the specified (optional) criteria.
     *
     * @tags Users
     * @name UsersList
     * @summary Get user list (DEPRECATED: use POST /users instead)
     * @request GET:/users
     * @secure
     */
    usersList: (
      query?: {
        /** Returns only users whose username, email or fullname contains a string (case insensitive, default: null = match all) */
        contains?: string;
        /**
         * Number of users to skip (default: 0)
         * @format int32
         */
        skip?: number;
        /**
         * Maximum number of users to return (default: all users)
         * @format int32
         */
        take?: number;
        /** Return archived users */
        archived?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetUsersWithAppMetadataResponse, ProblemDetails>({
        path: `/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of user records which match the specified (optional) criteria.
     *
     * @tags Users
     * @name UsersCreate
     * @summary Get user list
     * @request POST:/users
     * @secure
     */
    usersCreate: (data: GetUsersRequest, params: RequestParams = {}) =>
      this.request<GetUsersWithAppMetadataResponse, ProblemDetails>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags Users
     * @name UserDetail
     * @summary Get user by user id
     * @request GET:/user/{id}
     * @secure
     */
    userDetail: (id: number, params: RequestParams = {}) =>
      this.request<GetUserResponse, ProblemDetails>({
        path: `/user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserUpdate
     * @summary Update existing user
     * @request PUT:/user/{id}
     * @secure
     */
    userUpdate: (
      id: number,
      data: UpdateUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<UpdateUserResponse, ProblemDetails>({
        path: `/user/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserDelete
     * @summary Archive a user
     * @request DELETE:/user/{id}
     * @secure
     */
    userDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/user/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserCreate
     * @summary Create new user
     * @request POST:/user
     * @secure
     */
    userCreate: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.request<CreateUserResponse, ProblemDetails>({
        path: `/user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userImport = {
    /**
     * No description
     *
     * @tags Users
     * @name UserImportCreate
     * @summary Import a new user (DEPRECATED: use POST /import-users instead)
     * @request POST:/user-import
     * @secure
     */
    userImportCreate: (data: ImportUserRequest, params: RequestParams = {}) =>
      this.request<ImportUserResponse, ProblemDetails>({
        path: `/user-import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userEvents = {
    /**
     * @description Returns a list of user events.
     *
     * @tags Users
     * @name UserEventsCreate
     * @summary Get user events
     * @request POST:/user-events
     * @secure
     */
    userEventsCreate: (
      data: GetUserEventsRequest,
      params: RequestParams = {},
    ) =>
      this.request<GetUserEventsResponse, ProblemDetails>({
        path: `/user-events`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userMetadata = {
    /**
     * No description
     *
     * @tags Users
     * @name UserMetadataDetail
     * @summary Get user metadata
     * @request GET:/user-metadata/{id}
     * @secure
     */
    userMetadataDetail: (
      id: number,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ProblemDetails>({
        path: `/user-metadata/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserMetadataUpdate
     * @summary Set user metadata
     * @request PUT:/user-metadata/{id}
     * @secure
     */
    userMetadataUpdate: (
      id: number,
      data: Record<string, any>,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/user-metadata/${id}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tenantMetadata = {
    /**
     * No description
     *
     * @tags Users
     * @name TenantMetadataList
     * @summary Get tenant metadata
     * @request GET:/tenant-metadata
     * @secure
     */
    tenantMetadataList: (
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ProblemDetails>({
        path: `/tenant-metadata`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name TenantMetadataUpdate
     * @summary Set tenant metadata
     * @request PUT:/tenant-metadata
     * @secure
     */
    tenantMetadataUpdate: (
      data: Record<string, any>,
      query?: {
        /** Override x-g4-application */
        app?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, ProblemDetails>({
        path: `/tenant-metadata`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
