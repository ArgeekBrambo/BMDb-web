import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import MovieList from "../pages/MovieList";
import GenreList from "../pages/GenreList";
import Register from "../pages/Register";

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
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router