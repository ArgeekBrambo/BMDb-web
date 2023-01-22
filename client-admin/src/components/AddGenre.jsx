import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGenre } from "../stores/actionCreator";

const AddGenre = ({showModal, setShowModal}) => {

    const [genre, setGenre] = useState("");

    const dispatch = useDispatch();

    const toggleModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    const handleAddGenre = (event) => {
        event.preventDefault();
        dispatch(addGenre(genre));
        setShowModal(false);
        // console.log("add genre");
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                Add Genre
            </h1>
            <form onSubmit={handleAddGenre}>
                <div className="gap-6 mt-4">
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="username"
                        >
                            New Genre
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            value={genre}
                            onChange={(event) => setGenre(event.target.value)}
                        />
                    </div>
                </div>

                
                <div className="flex justify-between mt-6">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                    type="submit"
                    >
                        Save
                    </button>
                    <button
                        className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddGenre;
