//Import du module Express
const express = require("express");
const app = express();

//Middlewares
app.use((req, res, next) => {
  res.status(201).json({ message: "Votre requête a bien été reçue" });
  next();
});


module.exports = app;
