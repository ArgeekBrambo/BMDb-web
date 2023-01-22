import { GET_GENRE, ADD_GENRE, DELETE_GENRE } from "../actionType";

const initialState = {
    genres: [],
    newGenre: {},
    deletedGenre: {},
}

export const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                genres: action.payload,
            }

        case ADD_GENRE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                newGenre: action.payload,
            }

        case DELETE_GENRE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                deletedGenre: action.payload,
            }
        default:
            return state;
    }
}