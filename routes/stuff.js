const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config")
const stuffCtrl = require("../controllers/stuff");

//------------POST------Nouvel--objet------------------
router.post("/", auth, multer, stuffCtrl.createThing);

//--------------GET------PAGE-PRODUIT---------------
router.get("/:id", auth, stuffCtrl.getOneThing);

//--------UPDATE---------EDITION------------
router.put("/:id", auth, multer, stuffCtrl.modifyThing);

//---------DELETE---------
router.delete("/:id", auth, stuffCtrl.deleteThing);

//----------GET---------PAGE-D'ACCUEIL----------------
router.get("/", auth, stuffCtrl.getAllThings);

module.exports = router;
