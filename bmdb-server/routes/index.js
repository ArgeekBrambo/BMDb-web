const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const movieRoute = require('./movieRoute');
// const castRoute = require('./castRoute');
const genreRoute = require('./genreRoute');
// const movieCastRoute = require('./movieCastRoute');
const authentication = require('../middlewares/auth');

router.use('/user', userRoute)
router.use('/movies', authentication, movieRoute)
router.use('/genres', authentication, genreRoute)

module.exports = router;