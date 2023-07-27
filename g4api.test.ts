import { G4Api } from "./mod.ts";

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
      await g4api.search("contracts", {
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
