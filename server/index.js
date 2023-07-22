import express from "express";
import dotenv from "dotenv";
import db from "./db/db.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;
  db.query(
    "INSERT INTO empleados(nombre, edad, pais, cargo, anios) VALUES(?, ?, ?, ?, ?)",
    [nombre, edad, pais, cargo, anios],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Empleado registrado con exito");
      }
    }
  );
});

app.get("/empleados", (req, res) => {

  db.query(
    "SELECT * FROM empleados",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
