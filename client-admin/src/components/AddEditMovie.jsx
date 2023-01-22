import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getGenres, addMovie, editMovie } from "../stores/actionCreator";

const AddEditMovie = ({ showModal, setShowModal }) => {
    const inputForm = {
        original_title: "",
        poster_path: "",
        backdrop_path: "",
        castname: "",
        vote_count: "",
        vote_average: "",
        genre: "1",
        overview: "",
        release_date: "",
    };

    const [inputFormState, setInputForm] = useState(inputForm);
    // toggle modal off
    const { genres } = useSelector((state) => state.genreReducer);
    const { movieById } = useSelector((state) => state.movieReducer);
    const { isEdit } = useSelector((state) => state.movieReducer);
    const { id } = useParams();
    

    // console.log(movieById, 'darimoviebyid');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deactiveModal = () => {
        dispatch({ type: "deactiveModal", payload: false });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(inputFormState);
        if (!isEdit) {
            // console.log('asdasd');
            const newMov = await dispatch(addMovie(inputFormState));
            dispatch({ type: "deactiveModal", payload: false });
            navigate(`/movies`);
        } else {
            // console.log('asdasd');
            const updateMov = await dispatch(editMovie(id, inputFormState));
            dispatch({ type: "deactiveModal", payload: false });
            navigate(`/movies`);
        }
    };

    useEffect(() => {
        // console.log(id, "ini id");
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        const casts = movieById.MovieCasts;
        // console.log(movieById.MovieCasts, "moviebyid");
        // console.log(casts, "casts");

        const castname = casts?.length
            ? casts?.reduce((acc, curr) => {
                //   console.log(acc, "acc");
                  return acc?.cast.name + ", " + curr?.cast.name;
              })
            : "";
        // console.log(castname, "castname");
        // fill castname
        // setInputForm()
        setInputForm({
            ...inputFormState,
            original_title: movieById.original_title,
            poster_path: movieById.poster_path,
            backdrop_path: movieById.backdrop_path,
            castname: castname?.cast?.name,
            vote_count: movieById.vote_count,
            vote_average: movieById.vote_average,
            genre: movieById.genre,
            overview: movieById.overview,
            release_date: movieById.release_date,
        });
    }, [movieById, movieById.MovieCasts]);

    return (
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                Add/Edit Movie
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="original_title"
                        >
                            Original Title
                        </label>
                        <input
                            id="original_title"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Original Title"
                            value={inputFormState.original_title}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    original_title: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="poster_path"
                        >
                            Poster
                        </label>
                        <input
                            id="poster_path"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Poster"
                            value={inputFormState.poster_path}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    poster_path: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="backdrop_path"
                        >
                            Backdrop
                        </label>
                        <input
                            id="backdrop_path"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Backdrop path"
                            value={inputFormState.backdrop_path}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    backdrop_path: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            name="castname"
                            className="text-white dark:text-gray-200"
                            htmlFor="castname"
                        >
                            Cast
                        </label>
                        <input
                            id="castname"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Cast name"
                            value={inputFormState.castname}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    castname: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="voute_count"
                        >
                            Vote Count
                        </label>
                        <input
                            id="vote_count"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Vote Count"
                            value={inputFormState.vote_count}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    vote_count: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="vote_average"
                        >
                            Vote Average
                        </label>
                        <input
                            id="vote_average"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Vote Average"
                            value={inputFormState.vote_average}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    vote_average: event.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="genre"
                        >
                            Genre
                        </label>
                        <select
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            value={inputFormState.genre}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    genre: event.target.value,
                                })
                            }
                        >
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="release_date"
                        >
                            Release Date
                        </label>
                        <input
                            id="release_date"
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Release Date"
                            value={inputFormState.release_date}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    release_date: event.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="overview"
                        >
                            Overview
                        </label>
                        <textarea
                            id="overview"
                            type="textarea"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Overview"
                            value={inputFormState.overview}
                            onChange={(event) =>
                                setInputForm({
                                    ...inputFormState,
                                    overview: event.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                </div>

                <div className="flex gap-4 mt-6">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                        Add Cast
                    </button>
                    <button
                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                        type="submit"
                    >
                        Save
                    </button>
                    <Link to={`/movies`}>
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                            type=""
                            onClick={deactiveModal}
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default AddEditMovie;
