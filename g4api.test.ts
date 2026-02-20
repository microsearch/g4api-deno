import { G4Api } from "./mod.ts";
import { assert, assertEquals } from "jsr:@std/assert";

const appName = "deno-test";
const tenant = "afscme";

// you have to use real credentials for test to work!
// from the command line: deno test -A -- username password
const credentials = {
  username: Deno.args[0] ?? "username",
  password: Deno.args[1] ?? "password",
};

Deno.test("sessionless authentication", async () => {
  const g4api = new G4Api("dev", null, appName);
  const response = await g4api.authenticateUser(credentials);
  response.match({
    ok: (auth) => {
      assert(auth.validCredentials);
      assert(auth.bearer !== null);
    },
    err: (err) => {
      console.log({ err, details: err.details });
      assert(false);
    },
  });
});

Deno.test("get collection list", async () => {
  const g4api = new G4Api("dev", tenant, appName);
  const response = await g4api.connect(credentials);
  response.match({
    ok: (auth) => {
      assert(auth.validCredentials);
      assert(auth.bearer !== null);
      assert(auth.sessionId !== null);
    },
    err: (err) => {
      console.log({ err, details: err.details });
      assert(false);
    },
  });
  if (g4api.connected) {
    const collections = (await g4api.getCollectionList()).unwrap().collections;
    assert(collections.length > 0);
    await g4api.disconnect();
  }
});

Deno.test("get search results", async () => {
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
        assert(response.type === "success");
        if (response.type === "success") {
          assertEquals(
            response.query,
            'g4_collection: IN [/contracts] AND "severance pay"',
          );
          assert(response.total_results > 0);
          assert(response.results.length > 0);
        }
      },
      err: (err) => {
        console.log({ err, details: err.details });
        assert(false);
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
      assert(false, error.message);
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
      assert(false, error.message);
      console.error(error);
    },
  });

  (await g4api.archiveUser(user_id)).match({
    ok: () => {},
    err: (error) => {
      assert(false, error.message);
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
