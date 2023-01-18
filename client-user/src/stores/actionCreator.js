import { MOVIES_POPULAR_MOVIES } from "./actionType";
import { MOVIES_MOVIE_DETAILS } from "./actionType";

export const actionPopularMovies = (movies) => {
    // console.log(movies,'action');
    return {
        type: MOVIES_POPULAR_MOVIES,
        payload: movies,
    }
}

export const actionMovieDetails = (movieDetails) => {
    return {
        type: MOVIES_MOVIE_DETAILS,
        payload: movieDetails,
    }
}

export const fetchMovies = () => {
    return async (dispatch) => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US')
        // console.log(response, 'dari creator');
        const resJson = await response.json()
        // console.log(resJson.results);
        dispatch(actionPopularMovies(resJson.results))
    }
}

export const fetchMovieDetails = (id) => {
    return async (dispatch) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US`)
        const resJson = await response.json()
        // console.log(resJson);
        dispatch(actionMovieDetails(resJson))
    }
}