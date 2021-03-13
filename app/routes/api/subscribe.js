const { Router } = require("express");
const { subscribe } = require("../../controllers");
const { subscription: validateSubscriber } = require("../../validators")
const router = Router(); 

router.post("/subscribe/:topic", validateSubscriber,  subscribe);
  
module.exports = router; 
     