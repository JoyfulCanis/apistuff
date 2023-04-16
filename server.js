//Import du module HTTP puis du contenu du fichier app.js
const http = require("http");
const app = require("./app");
//Configuration du port sur lequel l'application va émettre
app.set("port", process.env.PORT || 3000)
//Création du server en lui imbriquant le contenu de app.js
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
