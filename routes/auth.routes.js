 
const controller = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();
 
     
router.post("/register",controller.signup);
router.post("/signin",controller.signin);
 

 
 
  module.exports = router;