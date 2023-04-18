//Import du module Express
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./controllers/user");
//Mongoose connect

mongoose
  .connect(
    "mongodb+srv://johndoe:admin42@cluster0.hhewgw5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

//Middlewares
//Interception toutes les requettes contenant du JSON en le déployant dans le body de la req
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
//Middleware permettant d'éviter les conflits CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", stuffRoutes);
// app.use("/api/auth", userRoutes);
module.exports = app;
