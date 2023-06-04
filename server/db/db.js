import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: process.env.DB_CONNECTION,
});

export default db;
