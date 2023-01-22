import React, { useState, useEffect } from "react";
import AddGenre from "../components/AddGenre";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, deleteGenre } from "../stores/actionCreator"

const GenreList = () => {
    const [showModal, setShowModal] = useState(false);
    const { genres } = useSelector((state) => state.genreReducer);
    const { newGenre } = useSelector((state) => state.genreReducer);
    const { deletedGenre } = useSelector((state) => state.genreReducer);

    const dispatch = useDispatch();
    // console.log(genres);
    // toggle modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleDelete = (id) => {
        // console.log(id);
        dispatch(deleteGenre(id));
    }

    useEffect(() => {
        dispatch(getGenres());
    }, [newGenre]);

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        dispatch(getGenres());
    }, [deletedGenre]);

    return (
        <>
            {/* Movie List */}
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="flex min-w-full justify-between my-3 px-3">
                    <h1 className="text-4xl font-bold">Genre List</h1>
                    <button
                        className="py-2 px-4 shadow-md no-underline rounded-full bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        onClick={toggleModal}
                    >
                        Add Genre
                    </button>
                </div>
                <div className="border rounded-lg w-[500px]">
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
                                    Genre
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {genres.map((genre, index) => (
                                <tr key={genre.id}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                        {genre.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button className="text-red-500 hover:text-red-700"
                                        onClick={() => {handleDelete(genre.id)}}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal && (
                <div
                    className="absolute top-0 h-screen min-w-full overflow-visible justify-center align-middle items-center bg-slate-900 bg-opacity-70"
                    style={{ width: "100vw" }}
                >
                    <AddGenre
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                </div>
            )}
        </>
    );
};

export default GenreList;
