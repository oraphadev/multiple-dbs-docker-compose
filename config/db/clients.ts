import { Pool } from "pg";
import { baseConfig } from "@/config/db/base";

export const databaseOneClient = new Pool({
  ...baseConfig,
  database: "database_one",
});

export const databaseTwoClient = new Pool({
  ...baseConfig,
  database: "database_two",
});

export const databaseThreeClient = new Pool({
  ...baseConfig,
  database: "database_three",
});
