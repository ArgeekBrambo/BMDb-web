import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import MovieList from "../pages/MovieList";
import GenreList from "../pages/GenreList";
import Register from "../pages/Register";
import AddEditMovie from "../components/AddEditMovie";

// const navigate = useNavigate();

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        loader: () => {
            if (localStorage.getItem("access_token")) {
                return redirect("/");
            }
            return null;
        },
    },
    {
        element: <MainLayouts />,
        loader: () => {
            if (!localStorage.getItem("access_token")) {
                return redirect("/login");
            }
            return null;
        },
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/movies/",
                element: <MovieList />,
                children: [
                    {
                        path: "add",
                        element: <AddEditMovie />,
                    },
                    {
                        path: ":id",
                        element: <AddEditMovie />,
                    }
                ]
            },
            {
                path: "/genres",
                element: <GenreList />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
