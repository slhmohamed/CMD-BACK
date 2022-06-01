const controller = require("../controllers/produit.controller");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const multer = require("multer");
var path = require('path');
 // handle storage using multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });
     
router.post("/addProduct", upload.single("file"),controller.createProduct);
 
 router.get("/getAllProducts",controller.getAllProducts)
 router.get("/findOneProduct/:id",controller.findOneProduct)
 router.put("/updateProduct/:id",controller.updateProduct)
 router.delete("/deleteProduct/:id_produit",controller.deleteProduct)

 
  module.exports = router;