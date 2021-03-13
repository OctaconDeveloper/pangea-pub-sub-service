const { Router } = require("express");
const { subscribe } = require("../../controllers");
const { subscription: validate_subscriber } = require("../../validators")
const router = Router(); 

router.post("/subscribe/:topic", validate_subscriber,  subscribe);
  
module.exports = router; 
     