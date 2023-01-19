import { GET_GENRE } from "../actionType";

const initialState = {
    genres: [],
}

export const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                genres: action.payload,
            }

        default:
            return state;
    }
}