const express = require('express');
const router = express.Router();
const ControllerGenre = require('../controllers/ControllerGenre');

router.get('/', ControllerGenre.getAll);

module.exports = router;