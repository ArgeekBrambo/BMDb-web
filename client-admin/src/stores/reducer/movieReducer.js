import { GET_MOVIE, GET_MOVIE_BY_ID, DELETE_MOVIE} from "../actionType";

const initialState = {
    movies: [],
    modalActive: false,
    movieById: {},
    isEdit: false,
    deletedMovie: {}
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                movies: action.payload,
            }
        
        case "toggleModal":
            return {
                ...state,
                modalActive: action.payload,
                isEdit: false
            }

        case "deactiveModal":
            return {
                ...state,
                modalActive: action.payload,
                isEdit: false
            }

        case GET_MOVIE_BY_ID:
            return {
                ...state,
                movieById: action.payload,
            }

        case "isEdit":
            return {
                ...state,
                isEdit: action.payload
            }

        case DELETE_MOVIE:
            return {
                ...state,
                deletedMovie: action.payload
            }
    
        default:
            return state;
    }
}

// console.log(initialState, 'initialState');