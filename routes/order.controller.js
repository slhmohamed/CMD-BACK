const controller = require("../controllers/order.controller");
const express = require("express");
const router = express.Router();
 
     
router.post("/addOrder",controller.create);
router.get("/allOrder",controller.getAllOrder)
router.delete("/deleteCategory/:id_order",controller.deleteOrder)
  
 
 
  module.exports = router;