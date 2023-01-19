import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/userReducer";
import { movieReducer } from "./reducer/movieReducer";
import { genreReducer } from "./reducer/genreReducer";

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    genreReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;