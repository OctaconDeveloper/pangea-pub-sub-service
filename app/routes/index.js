const { Router } = require("express");
const router = Router(); 

const apiRoutes = require('./api');
 
router.use('/v1',apiRoutes);


module.exports = router; 