import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getMovieById, deleteMovie } from "../stores/actionCreator";

const MovieList = () => {
    // trigger modal
    const { modalActive } = useSelector((state) => state.movieReducer);
    const { movies } = useSelector((state) => state.movieReducer);
    const { deletedMovie } = useSelector((state) => state.movieReducer);

    const dispatch = useDispatch();

    const setAddModalActive = () => {
        dispatch({ type: "toggleModal", payload: true });
    };

    const handleEdit = (id) => {
        dispatch({ type: "toggleModal", payload: true });
        dispatch({ type: "isEdit", payload: true });
        // console.log(id);
        dispatch(getMovieById(id));

        // dispatch(getMovieById(id))
        //  dispatch(getMovieById(id))
    };
    
    const handleDelete = (id) => {
        dispatch(deleteMovie(id));
    }
    // toggle modal

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    useEffect(() => {
        dispatch(getMovies());
    }, [modalActive]);

    useEffect(() => {
        // console.log(deletedMovie, "deletedMovie");
        dispatch(getMovies());
    }, [deletedMovie]);

    return (
        <>
            {modalActive && (
                <div className="fixed z-50 h-screen w-screen top-[15%]">
                    <Outlet />
                </div>
            )}
            {/* Movie List */}
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="flex min-w-full justify-between my-3 px-3">
                    <h1 className="text-4xl font-bold">Movie List</h1>
                    <Link to="/movies/add">
                        <button
                            className="py-2 px-4 shadow-md no-underline rounded-full bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                            onClick={setAddModalActive}
                        >
                            Add Movie
                        </button>
                    </Link>
                </div>
                <div className="max-w-md rounded-lg md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <div className="relative">
                                <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                                <input
                                    type="text"
                                    className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    name=""
                                />
                                <span className="absolute top-4 right-5 border-l pl-4">
                                    <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Original Title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Poster
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Backdrop
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Cast
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Show Cast
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase min-w-[200px] hidden"
                                >
                                    Synopsis
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Vote Average
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Release Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Genre
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Author
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-center"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {movies.map((movie, index) => {
                                return (
                                    <tr key={movie.id}>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.original_title}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                alt="poster"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                                alt="backdrop"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.MovieCasts.map((cast) => {
                                                return (
                                                    // <p>{JSON.stringify(cast)}</p>
                                                    <img
                                                        src={
                                                            cast.cast
                                                                .profilePict
                                                        }
                                                        alt="cast pic"
                                                        key={cast?.id}
                                                        className="rounded-full my-3"
                                                    />
                                                );
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            <button className="py-2 px-4 shadow-md no-underline rounded-md bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
                                                Show Cast
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap hidden">
                                            {movie.overview}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.vote_average}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.release_date}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.genre?.name}
                                        </td>
                                        <td className="px-6handleEdit py-4 text-sm text-gray-800 whitespace-wrap">
                                            {movie.author.username}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <Link to={`/movies/${movie.id}`}>
                                                <button
                                                    className="py-2 px-4 shadow-md no-underline rounded-md bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                                                    // i need to use the id of the movie
                                                    onClick={() => {
                                                        handleEdit(movie.id);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </Link>
                                            <button className="py-2 px-4 shadow-md no-underline rounded-md bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none"
                                                onClick={() => {
                                                    handleDelete(movie.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* {showModal && (
                <div className="absolute top-0 h-screen min-w-full justify-center align-middle items-center bg-slate-900 bg-opacity-70">
                    <AddEditMovie
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </div>
            )} */}
        </>
    );
};

export default MovieList;
