const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const portfolioRoute = require('./portfolioRoute');

router.use('/',userRoute);
router.use('/',portfolioRoute);


module.exports = router