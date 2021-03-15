const { Router } = require("express");
const router = Router(); 
const publishRoute = require('./publish');
const subscribeRoute  = require('./subscribe');
router.use(publishRoute);
router.use(subscribeRoute);


module.exports = router; 