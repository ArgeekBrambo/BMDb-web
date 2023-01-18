import { MOVIES_POPULAR_MOVIES, MOVIES_MOVIE_DETAILS } from "../actionType";

const initialState = {
    movies: [],
    movieDetails: {}
} // This is the initial state of the store, which is an empty array of movies

const movieReducer = (state = initialState, action) => { // This is the reducer, which will handle the actions, and will return the new state
    console.log(action, 'reducer');
    switch (action.type) { // This is the switch statement that will determine what to do with the action, based on the action type
        case MOVIES_POPULAR_MOVIES: // This is the action type
            return { // This is the return statement
                ...state, // This is the spread operator, which will copy the state
                movies: action.payload, // This is the payload, which is the data that will be used to update the state
            };

        case MOVIES_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.payload,
            } // This is the action type

        default:
            return state; // This is the default return statement
    }
}

export default movieReducer;