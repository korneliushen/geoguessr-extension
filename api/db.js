import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 4321,
  database: "geoguessr_db",
});

export function query(text, params) {
  return pool.query(text, params);
}
