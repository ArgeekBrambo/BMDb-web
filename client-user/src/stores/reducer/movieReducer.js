const initialState = {
    movies: [],
} // This is the initial state of the store, which is an empty array of movies

const movieReducer = (state = initialState, action) => { // This is the reducer, which will handle the actions, and will return the new state
    switch (action.type) { // This is the switch statement that will determine what to do with the action, based on the action type
        case "POPULAR_MOVIES": // This is the action type
            return { // This is the return statement
                ...state, // This is the spread operator, which will copy the state
                movies: action.payload, // This is the payload, which is the data that will be used to update the state
            };

        default:
            return state; // This is the default return statement
    }
}

export default movieReducer;