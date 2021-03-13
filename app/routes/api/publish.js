const { Router } = require("express");
const { publish } = require("../../controllers");
const { publishing } = require("../../validators/publish");
const router = Router(); 

router.post("/publish/:topic", publishing, publish);
  
module.exports = router; 

     
    