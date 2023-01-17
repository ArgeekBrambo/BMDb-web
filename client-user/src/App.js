import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home";
import MovieList from "./components/movieList/MovieList";
import Movie from "./pages/movieDetail/MovieDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movie/:id" element={<Movie />}></Route>
                    <Route path="movies/:type" element={<MovieList />}></Route>
                    <Route path="/*" element={<h1>Error 404</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
