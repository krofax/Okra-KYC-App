const express = require('express');

const bvnRoute = require('../controller/kyc') 

const router = express.Router();

router
  .post("/bvn", bvnRoute.bvnCheck)

module.exports = router;