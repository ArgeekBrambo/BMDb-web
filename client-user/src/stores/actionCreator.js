import { MOVIES_POPULAR_MOVIES } from "./actionType";
import { MOVIES_MOVIE_DETAILS } from "./actionType";

// export const actionPopularMovies = (movies) => {
//     // console.log(movies,'action');
//     return {
//         type: MOVIES_POPULAR_MOVIES,
//         payload: movies,
//     }
// }

// export const actionMovieDetails = (movieDetails) => {
//     return {
//         type: MOVIES_MOVIE_DETAILS,
//         payload: movieDetails,
//     }
// }

const server = `https://bmdb.foxhub.space`

export const fetchMovies = () => {
    return async (dispatch) => {
        // const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fcf91c8aa652949d7dd3db150a5fcc8b&language=en-US')
        // // console.log(response, 'dari creator');
        // const resJson = await response.json()
        // // console.log(resJson.results);
        // dispatch(actionPopularMovies(resJson.results))
        try {
            const response = await fetch(`${server}/customers/movies`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            if(!response.ok) {
                throw {message: 'Something went wrong'}
            }
            const resJson = await response.json()
            dispatch({
                type: MOVIES_POPULAR_MOVIES,
                payload: resJson
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchMovieDetails = (id) => {
    return async (dispatch) => {
        // const response = await fetch(`http://localhost:3005/movies/${id}`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        // const resJson = await response.json()
        // console.log(resJson);
        // dispatch(actionMovieDetails(resJson))
        try {
            const response = await fetch(`${server}/customers/movies/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if(!response.ok) {
                throw {message: 'Something went wrong'}
            }
            const resJson = await response.json()
            dispatch({
                type: MOVIES_MOVIE_DETAILS,
                payload: resJson
            })
        } catch (error) {
            console.log(error);
        }
    }
}