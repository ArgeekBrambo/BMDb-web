import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import MovieList from "../pages/MovieList";
import GenreList from "../pages/GenreList";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/movies',
                element: <MovieList />
            },
            {
                path: '/genres',
                element: <GenreList />
            }
        ]
    }
])

export default router