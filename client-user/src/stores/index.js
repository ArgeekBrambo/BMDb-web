import { legacy_createStore as createStore, combineReducers } from "redux";
import movieReducer from "./reducer/movieReducer";

const rootReducer = combineReducers({ // This is the root reducer, which is the reducer that will handle all the actions
    movies: movieReducer, // This is the movie reducer, which is the reducer that will handle the movie actions
})

const store = createStore(rootReducer); // This is the store, which is the store that will hold the state

export default store;