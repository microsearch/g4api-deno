import { UserStatus } from "./Api.ts";
import { G4Api } from "./mod.ts";
import { assert } from "assert";

const appName = "deno-test";
const tenant = "afscme";

// you have to use real credentials for test to work!
// from the command line: deno test -A -- username password
const credentials = {
  username: Deno.args[0] ?? "username",
  password: Deno.args[1] ?? "password",
};

// not really a test; it just dumps its results
Deno.test("dump collection list", async () => {
  const g4api = new G4Api("dev", tenant, appName);
  const response = await g4api.connect(credentials);
  response.match({
    ok: (auth) => {
      console.log({ auth });
    },
    err: (err) => {
      console.log({ err, details: err.details });
    },
  });
  if (g4api.connected) {
    const collections = (await g4api.getCollectionList()).unwrap().collections;
    console.log({ collections });
    await g4api.disconnect();
  }
});

Deno.test("dump search results", async () => {
  const g4api = new G4Api("dev", tenant, appName);
  await g4api.connect(credentials);
  if (g4api.connected) {
    (
      await g4api.search({
        collections: ["contracts"],
        count: 10,
        start: 0,
        query: '"severance pay"',
      })
    ).match({
      ok: (response) => {
        console.log({ response });
      },
      err: (err) => {
        console.log({ err, details: err.details });
      },
    });
    await g4api.disconnect();
  }
});

// Deno.test("dump index schema", async () => {
//   const g4api = new G4Api("dev", tenant, appName);
//   await g4api.connect(credentials);
//   if (g4api.connected) {
//     (await g4api.indexSchema(tenant)).match({
//       ok: (response) => {
//         console.log({ response });
//       },
//       err: (err) => {
//         console.log({ err, details: err.details });
//       },
//     });
//     await g4api.disconnect();
//   }
// });

Deno.test("change password", async () => {
  const g4api = new G4Api("dev", tenant, appName);
  await g4api.connect(credentials);
  assert(g4api.connected);

  const user_id = (await g4api.createUser({
    status: 1,
    username: "afakename",
    password: "Not a real User!",
    email: "alias@fakename.org",
    fullname: "Alias Fakename",
    roles: [],
    profiles: [],
    collections: [],
    denyCollections: [],
    customFields: {},
    appName: "deno-test",
    appMetadata: {},
  })).match({
    ok: (response) => {
      assert(response.id > 0);
      return response.id;
    },
    err: (error) => {
      assert(false);
      return 0;
    },
  });
  assert(user_id > 0);

  (await g4api.changePassword({
    username: "afakename",
    password: "Not a real User!",
    newPassword: "A real password!!!",
  })).match({
    ok: () => {},
    err: (error) => {
      assert(false);
      console.error(error);
    },
  });

  (await g4api.archiveUser(user_id)).match({
    ok: () => {},
    err: (error) => {
      assert(false);
      console.error(error);
    },
  });
});

// Deno.test("doc info", async () => {
//   const g4api = new G4Api("dev", tenant, appName);
//   await g4api.connect(credentials);

//   const response = (await g4api.docInfo(
//     "2A73EQdSmDoPCczfyalzSb7EvTAX9LIupgB6iFx2ekE",
//   )).unwrap();
//   console.log({ response });
// });
