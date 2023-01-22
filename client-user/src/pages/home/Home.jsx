import React, { useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import { useSelector, useDispatch } from "react-redux"; // useSelector is a hook that allows us to get the state from the store, and useDispatch is a hook that allows us to dispatch an action to the reducer
// import { MOVIES_POPULAR_MOVIES } from "../../stores/actionType";
import { fetchMovies } from "../../stores/actionCreator";

const Home = () => {
    const { movies } = useSelector((state) => state.movies); // movies is the name of the reducer, and state.movies is the name of the state
    // console.log(movies, 'movies selector');

    const dispatch = useDispatch(); // dispatch is a function that sends an action to the reducer, and the reducer will update the state
    // const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        // useEffect is a hook that runs when the component is mounted, and it runs only once
        // fetch(
        //     "https://api.themoviedb.org/3/movie/popular?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US"
        // )
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw res;
        //         }
        //         return res.json();
        //     }) // res.json() is a promise, so we need to use .then, and the data is the response from the API
        //     .then((data) => {
        //         // data is the response from the API, and we can use it to update the state
        //         // console.log(data, "<<<<<");
        //         dispatch(actionPopularMovies(data.results));
        //     })
        //     .catch((res) => {
        //         console.log("ERROR");
        //         console.log(res);
        //     });
        dispatch(fetchMovies());
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
                {movies.map(
                    (
                        movie // movies.results is the array of movies, and we map through it to get each movie
                    ) => (
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
                    )
                )}
            </Carousel>
            <div className="popularMovies">
                <MovieList />
            </div>
        </div>
    );
};

export default Home;
