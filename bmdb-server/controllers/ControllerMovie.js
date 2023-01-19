const { Movie, User, Cast, Genre, MovieCast } = require("../models");

class ControllerMovie {
    static async getAll(req, res, next) {
        try {
            const movies = await Movie.findAll({
                include: [
                    { 
                        model: MovieCast,
                        include: [
                            { 
                                model: Cast, 
                                as: "cast",
                                attributes: ["id", "name", "profilePict"]
                            }
                        ],
                        attributes: { exclude: ["createdAt", "updatedAt", "castId", "movieId"] }
                    },
                    { 
                        model: Genre, 
                        as: "genre" ,
                        attributes: ["id", "name"]
                    },
                    { 
                        model: User, 
                        as: "author",
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt", "role", "phoneNumber", "address"]
                        }
                    },
                ],
                attributes: { exclude: ["createdAt", "updatedAt", "authorId", "genreId"] },
                order: [["id", "ASC"]]
            });
            res.status(200).json(movies);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerMovie;
