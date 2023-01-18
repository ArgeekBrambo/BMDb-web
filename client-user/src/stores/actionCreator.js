import { MOVIES_POPULAR_MOVIES } from "./actionType";

export const actionPopularMovies = (movies) => {
    // console.log(movies,'action');
    return {
        type: MOVIES_POPULAR_MOVIES,
        payload: movies,
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