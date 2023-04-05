const express = require("express");
const Controllers = require('../Controllers/jokes');
const app = express();


app.get("/api/Chistes/", Controllers.ListaChistes)

app.get("/api/Chistes/:id", Controllers.BuscarChistes)

app.post("/api/Chistes/", Controllers.CrearChiste)

app.put("/api/Chistes/:id", Controllers.ActualizarChiste)

app.delete("/api/Chistes/:id", Controllers.EliminarChiste)


module.exports = app;


