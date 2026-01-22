import {
  databaseOneClient,
  databaseTwoClient,
  databaseThreeClient
} from "@/config/db/clients";

await Promise.all([
  databaseOneClient.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255))"),
  databaseTwoClient.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255))"),
  databaseThreeClient.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255))"),
]);

await Promise.all([
  databaseOneClient.query("INSERT INTO users (name) VALUES ('John Doe')"),
  databaseTwoClient.query("INSERT INTO users (name) VALUES ('Jane Doe')"),
  databaseThreeClient.query("INSERT INTO users (name) VALUES ('Jim Doe')"),
]);

const res = await Promise.all([
  databaseOneClient.query("SELECT * FROM users"),
  databaseTwoClient.query("SELECT * FROM users"),
  databaseThreeClient.query("SELECT * FROM users"),
]);

console.log(res.map((r) => r.rows));
