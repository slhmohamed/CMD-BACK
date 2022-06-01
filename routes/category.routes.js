const controller = require("../controllers/category.controller");
const express = require("express");
const router = express.Router();
 
     
router.post("/addCategory",controller.create);
router.get("/allCategory",controller.getAllCategory)
router.delete("/deleteCategory/:id_categorie",controller.deleteCategory)
router.get("/getSingleCategory/:id",controller.findOneCategory)
router.put("/UpdateCategory/:id",controller.updateCategory)

 
 
  module.exports = router;