import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US"
        )
            .then((res) => res.json())
            .then((data) => setPopularMovies(data.results));
    }, []);

    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={1000}
                infiniteLoop={true}
                showStatus={false}
                interval={5000}
            >
                {popularMovies.map((movie) => (
                    <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/movie/${movie.id}`}
                    >
                        <div className="posterImage">
                            <img
                                src={`https://image.tmdb.org/t/p/original${
                                    movie && movie.backdrop_path
                                }`}
                                alt=""
                            />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">
                                {movie ? movie.original_title : ""}
                            </div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average : ""}
                                </span>
                                <i className="fas fa-star" />{" "}
                            </div>
                            <div className="posterImage__description">
                                {movie ? movie.overview : ""}
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
            <div className="popularMovies">
                <MovieList />
            </div>
        </div>
    );
};

export default Home;
