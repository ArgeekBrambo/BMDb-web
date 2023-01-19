const { Genre } = require('../models');

class ControllerGenre {
    static getAll(req, res, next) {
        Genre.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerGenre;