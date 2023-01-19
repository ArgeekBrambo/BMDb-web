import { GET_MOVIE } from "../actionType";

const initialState = {
    movies: [],
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                movies: action.payload,
            }

        default:
            return state;
    }
}

// console.log(initialState, 'initialState');