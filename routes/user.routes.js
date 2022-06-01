 
const controller = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
 
     
router.get("/getAllAdmin",controller.getAllAdmin);
router.get("/getSingleAdmin/:id",controller.getSingleAdmin)
router.put("/updateAdmin/:id",controller.updateAdmin)
router.delete("/deleteAdmin/:id_admin",controller.deleteAdmin)
 

 
  
  module.exports = router;