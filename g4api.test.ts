import { assert, assertEquals } from "asserts";

import { G4Api } from "./mod.ts";

const appName = "deno-test";
const endpoint = "https://g4-dev.v1.mrcapi.net";
const tenant = "afscme";
const credentials = {
  username: Deno.args[0] ?? "username",
  password: Deno.args[1] ?? "password",
};

Deno.test("invalid endpoint", async () => {
  const g4api = new G4Api("http://localhost:12345", "xyzzy");
  const response = await g4api.createSession({
    username: "xxx",
    password: "yyy",
  });
  assert(response.isErr());
  assertEquals(response.unwrapErr().source, "network");
});

// not really a test; it just dumps its results
Deno.test("dump collection list", async () => {
  const g4api = new G4Api(endpoint, tenant, appName);
  const response = await g4api.createSession(credentials);
  response.match({
    ok: (auth) => {
      console.log({ auth });
      g4api.bearerToken = auth.bearer;
    },
    err: (err) => {
      console.log({ err, details: err.details });
    },
  });
  if (!g4api.authenticated) return;
  const collections = (await g4api.getCollectionList()).unwrap().collections;
  console.log({ collections });
});
