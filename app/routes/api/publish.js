const { Router } = require("express");
const { publish } = require("../../controllers");
const { publishing: validate_publish } = require("../../validators/publish");
const router = Router(); 
  
router.post("/publish/:topic", validate_publish, publish);
  
module.exports = router; 

     
    