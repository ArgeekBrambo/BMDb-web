const express = require('express');
const router = express.Router();
const ControllerMovie = require('../controllers/ControllerMovie');

router.get('/', ControllerMovie.getAll);

module.exports = router;