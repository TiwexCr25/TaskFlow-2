import Database from "better-sqlite3";

const db = new Database("./data/taskflow.db");

db.exec(`CREATE TABLE IF NOT EXISTS tasks(
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    priority TEXT
);`);

export default db;