const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");

//------------POST------Nouvel--objet------------------
router.post("/", stuffCtrl.createThing);

//--------------GET------PAGE-PRODUIT---------------
router.get("/:id", stuffCtrl.getOneThing);

//--------UPDATE---------EDITION------------
router.put("/:id", stuffCtrl.modifyThing);

//---------DELETE---------
router.delete("/:id", stuffCtrl.deleteThing);

//----------GET---------PAGE-D'ACCUEIL----------------
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
