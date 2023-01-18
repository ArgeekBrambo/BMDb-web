import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/movieDetail/MovieDetail";
import { Provider } from "react-redux"; // This is the provider, which is the component that will provide the store to the rest of the app
import store from "./stores/index"; // This is the store, which is the store that will hold the state

function App() {
    return (
        <div className="App">
            <Provider store={store}> {/* This is the provider, which is the component that will provide the store to the rest of the app */}
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movie/:id" element={<Movie />}></Route>
                    <Route path="movies/:type" element={<MovieList />}></Route>
                    <Route path="/*" element={<h1>Error 404</h1>}></Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
