import * as api from "./Api.ts";
import { G4ApiImpl } from "./impl.ts";
import { AppMetadata, G4ResultPromise } from "./types.ts";

export class G4Api extends G4ApiImpl {
  constructor(endpoint: string, tenant: string, appName?: string) {
    super(endpoint, tenant, appName);
  }
  /*
    admins API
  */
  getAdminUserList = async (): G4ResultPromise<api.GetAdminsResponse> =>
    await this.get("/admins");

  createAdminUser = async (
    request: api.CreateAdminRequest
  ): G4ResultPromise<api.CreateAdminResponse> =>
    await this.post("/admin", request);

  /*
    authentication API
  */
  authenticateUser = async (
    request: api.UserAuthenticationRequest
  ): G4ResultPromise<api.UserAuthenticationResponse> =>
    await this.post("/auth", request);

  refreshAuthentication = async (): G4ResultPromise<api.RefreshResponse> =>
    await this.get("/auth");

  getPasswordPolicy = async (): G4ResultPromise<api.PasswordPolicy> =>
    await this.get("/policy/password");

  changePassword = async (
    request: api.PasswordChangeRequest
  ): G4ResultPromise<void> => await this.put("/password", request);

  processPendingG3Requests = async (): G4ResultPromise<void> =>
    await this.post("/sync");

  /*
    collections API
  */
  getCollectionList = async (): G4ResultPromise<api.GetCollectionsResponse> =>
    await this.get("/collections");

  createCollection = async (
    request: api.CreateCollectionRequest
  ): G4ResultPromise<api.CreateCollectionResponse> =>
    await this.post("/collections", request);

  updateCollection = async (
    request: api.UpdateCollectionRequest
  ): G4ResultPromise<api.UpdateCollectionResponse> =>
    await this.post("/collection", request);

  getCollectionContents = async (
    request: api.CollectionContentsRequest
  ): G4ResultPromise<api.CollectionContentsResponse> =>
    await this.post("/collection-contents", request);

  getCollectionContentsDocuments = async (
    request: api.CollectionContentsDocumentsRequest
  ): G4ResultPromise<api.CollectionContentsDocumentsResponse> =>
    await this.post("/collection-contents-documents", request);

  getCollectionMetadata = async (
    id: number,
    app?: string
  ): G4ResultPromise<AppMetadata> =>
    await this.get(metadataPath("collection", id, app));

  setCollectionMetadata = async (
    id: number,
    metadata: AppMetadata,
    app?: string
  ): G4ResultPromise<void> =>
    await this.put(metadataPath("collection", id, app), metadata);

  /*
    documents API
  */
  prepareDocumentUpload = async (
    request: api.LoadDocumentRequest
  ): G4ResultPromise<api.LoadDocumentResponse> =>
    await this.post("/documents", request);

  verifyDocumentUpload = async (id: number): G4ResultPromise<void> =>
    await this.post(`/document/${id}`);

  /*
    import/export API
  */
  exportUsers = async (): G4ResultPromise<api.ExportUsersResponse> =>
    await this.post("/export-users");

  importUsers = async (
    request: api.ImportUsersRequest
  ): G4ResultPromise<api.ImportUsersResponse> =>
    await this.post("/import-users", request);

  /*
    internal API
  */
  requestUserClaimTokens = async (
    email: string
  ): G4ResultPromise<api.SecurityToken> =>
    await this.get(`/user-claim-tokens?email=${encodeURIComponent(email)}`);

  requestUserPasswordResetTokens = async (
    email: string
  ): G4ResultPromise<api.SecurityToken> =>
    await this.get(`/user-reset-tokens?email=${encodeURIComponent(email)}`);

  claimAccount = async (
    request: api.UserClaimAccountRequest
  ): G4ResultPromise<void> => await this.put("/user-claim", request);

  resetUserPassword = async (
    request: api.UserResetPasswordRequest
  ): G4ResultPromise<void> => await this.put("/user-password", request);

  getUserDetails = async (
    id: number
  ): G4ResultPromise<api.GetUserDetailsResponse> =>
    await this.get(`/user-details/${id}`);

  /*
    profiles API
  */
  getProfileList = async (): G4ResultPromise<api.GetProfilesResponse> =>
    await this.get("/profiles");

  getProfile = async (id: number): G4ResultPromise<api.GetProfileResponse> =>
    await this.get(`/profile/${id}`);

  updateProfile = async (
    id: number,
    request: api.UpdateProfileRequest
  ): G4ResultPromise<api.UpdateProfileResponse> =>
    await this.put(`/profile/${id}`, request);

  deleteProfile = async (id: number): G4ResultPromise<void> =>
    await this.delete(`/profile/${id}`);

  createProfile = async (
    request: api.CreateProfileRequest
  ): G4ResultPromise<api.CreateProfileResponse> =>
    await this.post("/profile", request);

  getProfileMetadata = async (
    id: number,
    app?: string
  ): G4ResultPromise<AppMetadata> =>
    await this.get(metadataPath("profile", id, app));

  setProfileMetadata = async (
    id: number,
    metadata: AppMetadata,
    app?: string
  ): G4ResultPromise<void> =>
    await this.put(metadataPath("profile", id, app), metadata);

  /*
    roles API
  */
  getRolesInScope = async (
    scope: string
  ): G4ResultPromise<api.GetRolesResponse> =>
    await this.get(`/roles/${encodeURI(scope)}`);

  getRolesList = async (): G4ResultPromise<api.GetRolesResponse> =>
    await this.get("/roles");

  getRole = async (id: number): G4ResultPromise<api.RoleResponse> =>
    await this.get(`/role/${id}`);

  updateRole = async (
    id: number,
    request: api.UpdateRoleRequest
  ): G4ResultPromise<api.RoleResponse> =>
    await this.put(`/role/${id}`, request);

  deleteRole = async (id: number): G4ResultPromise<void> =>
    await this.delete(`/role/${id}`);

  createRole = async (
    request: api.CreateRoleRequest
  ): G4ResultPromise<api.CreateRoleResponse> =>
    await this.post("/role", request);

  getRoleMetadata = async (
    id: number,
    app?: string
  ): G4ResultPromise<AppMetadata> =>
    await this.get(metadataPath("role", id, app));

  setRoleMetadata = async (
    id: number,
    metadata: AppMetadata,
    app?: string
  ): G4ResultPromise<void> =>
    await this.put(metadataPath("role", id, app), metadata);

  /*
    sessions API
  */
  createSession = async (
    request: api.CreateSessionRequest
  ): G4ResultPromise<api.AuthenticatedSessionResponse> =>
    await this.post("/session", request);

  getSession = async (id: string): G4ResultPromise<api.GetSessionResponse> =>
    await this.get(`/session/${id}`);

  updateSession = async (id: string, data: unknown): G4ResultPromise<void> =>
    await this.put(`/session/${id}`, data);

  closeSession = async (id: string): G4ResultPromise<void> =>
    await this.delete(`/session/${id}`);

  /*
    tenants API
  */
  getTenantsList = async (): G4ResultPromise<api.GetTenantResponse> =>
    await this.get("/tenants");

  purgeArchivedTenants = async (days: number): G4ResultPromise<void> =>
    await this.delete(`/tenants?days=${days}`);

  getTenant = async (id: number): G4ResultPromise<api.GetTenantResponse> =>
    await this.get(`/tenant/${id}`);

  archiveTenant = async (id: number): G4ResultPromise<void> =>
    await this.delete(`/tenant/${id}`);

  createTenant = async (
    request: api.CreateTenantRequest
  ): G4ResultPromise<api.CreateTenantResponse> =>
    await this.post("/tenant", request);

  /*
    users API
  */
  getUserList = async (
    request: api.GetUsersRequest
  ): G4ResultPromise<api.GetUsersWithAppMetadataResponse> =>
    await this.post("/users", request);

  getUser = async (id: number): G4ResultPromise<api.GetUserResponse> =>
    await this.get(`/user/${id}`);

  updateUser = async (
    id: number,
    request: api.UpdateUserRequest
  ): G4ResultPromise<api.UpdateUserResponse> =>
    await this.put(`/user/${id}`, request);

  archiveUser = async (id: number): G4ResultPromise<void> =>
    await this.delete(`/user/${id}`);

  createUser = async (
    request: api.CreateUserRequest
  ): G4ResultPromise<api.CreateUserResponse> =>
    await this.post("/user", request);

  getUserEvents = async (
    request: api.GetUserEventsRequest
  ): G4ResultPromise<api.GetUserEventsResponse> =>
    await this.post("/user-events", request);

  getUserMetadata = async (
    id: number,
    app?: string
  ): G4ResultPromise<AppMetadata> =>
    await this.get(metadataPath("user", id, app));

  setUserMetadata = async (
    id: number,
    metadata: AppMetadata,
    app?: string
  ): G4ResultPromise<void> =>
    await this.put(metadataPath("user", id, app), metadata);

  getTenantMetadata = async (
    id: number,
    app?: string
  ): G4ResultPromise<AppMetadata> =>
    await this.get(metadataPath("tenant", id, app));

  setTenantMetadata = async (
    id: number,
    metadata: AppMetadata,
    app?: string
  ): G4ResultPromise<void> =>
    await this.put(metadataPath("tenant", id, app), metadata);
}

function metadataPath(name: string, id: number, app?: string) {
  let path = `/${name}-metadata/${id}`;
  if (app) path += `?app=${encodeURIComponent(app)}`;
  return path;
}
