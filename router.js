const express = require('express');
const router = express.Router();
const phonesRouter = require('./routes/phonesRouter');

router.use('/phones', phonesRouter);

module.exports = router;