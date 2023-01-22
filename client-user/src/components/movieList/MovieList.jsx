import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../stores/actionCreator";

const MovieList = () => {
    // const [movieList, setMovieList] = useState([]);
    // const { type } = useParams();

    // useEffect(() => {
    //     getData();
    // }, []);

    // useEffect(() => {
    //     getData();
    // }, [type]);

    // const getData = () => {
    //     fetch(
    //         `https://api.themoviedb.org/3/movie/${
    //             type ? type : "popular"
    //         }?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US`
    //     )
    //         .then((res) => res.json())
    //         .then((data) => setMovieList(data.results));
    // };
    const { movies } = useSelector((state) => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    return (
        <div className="movie__List">
            {/* <h2 className="list__title">
                {(type ? type : "POPULAR").toUpperCase()}
            </h2> */}
            <div className="list__cards">
                {movies.map((movie, i) => (
                    <Card movie={movie} key={i} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
