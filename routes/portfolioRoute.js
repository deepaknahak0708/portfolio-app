const express = require('express');
const router = express.Router();

const {portfolioPage} = require('../controllers/portfolioController');

router.get('/',portfolioPage);


module.exports = router