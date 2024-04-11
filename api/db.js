import { createClient } from "@libsql/client";

const client = createClient({
  url: "libsql://geoguessr-db-korneliushen.turso.io",
  authToken: process.env.TOKEN,
});
