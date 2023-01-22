import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MOVIES_MOVIE_DETAILS } from "../../stores/actionType";
import { actionMovieDetails } from "../../stores/actionCreator";
import { fetchMovieDetails } from "../../stores/actionCreator";

const Movie = () => {
    // const [currentMovieDetail, setMovie] = useState();

    const { movieDetails } = useSelector((state) => state.movieDetails);
    // console.log(movieDetails, "movieDetail");
    const dispatch = useDispatch();

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        // fetch(
        //     `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data, "data");
        //         dispatch(actionMovieDetails(data));
        //     });
        dispatch(fetchMovieDetails(id));
    };

    return (
        <div className="movie">
            <div className="movie__intro">
                <img
                    className="movie__backdrop"
                    src={`https://image.tmdb.org/t/p/original${
                        movieDetails ? movieDetails.backdrop_path : ""
                    }`}
                    alt="movie-backdrop"
                />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img
                            className="movie__poster"
                            src={`https://image.tmdb.org/t/p/original${
                                movieDetails ? movieDetails.poster_path : ""
                            }`}
                            alt="movie-poster"
                        />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">
                            {movieDetails ? movieDetails.original_title : ""}
                        </div>
                        <div className="movie__rating">
                            {movieDetails ? movieDetails.vote_average : ""}{" "}
                            <i className="fas fa-star" />
                            <span className="movie__voteCount">
                                {movieDetails
                                    ? "(" + movieDetails.vote_count + ") votes"
                                    : ""}
                            </span>
                        </div>
                        <div className="movie__releaseDate">
                            {movieDetails
                                ? "Release date: " + movieDetails.release_date
                                : ""}
                        </div>
                        <div className="movie__genres">
                            {movieDetails && movieDetails.genre ? (
                                <>
                                    <span
                                        className="movie__genre"
                                        id={movieDetails.genre.id}
                                    >
                                        {movieDetails.genre.name}
                                    </span>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movieDetails ? movieDetails.overview : ""}</div>
                    </div>
                </div>
            </div>
            <div className="movie__heading">Cast</div>
            <div className="movie__production">
                {movieDetails &&
                    movieDetails.MovieCasts &&
                    movieDetails.MovieCasts.map((cast) => (
                        <>
                            {cast.cast.profilePict && (
                                <span className="productionCompanyImage">
                                    <img
                                        className="movie__productionComapany rounded-full"
                                        src={cast.cast.profilePict}
                                        alt="ph-logo"
                                    />
                                    <span>{cast.cast.name}</span>
                                </span>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Movie;
