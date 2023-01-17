import React, { useState } from "react";

const AddEditMovie = ({showModal, setShowModal}) => {

    // toggle modal off
    const toggleModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                Add/Edit Movie
            </h1>
            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="username"
                        >
                            Original Title
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="emailAddress"
                        >
                            Tagline
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="password"
                        >
                            Poster
                        </label>
                        <input
                            id="password"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Backdrop
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Cast
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Vote Average
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Vote Count
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Runtime
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Homepage
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            IMDB Id
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>

                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Genre
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                            <option>Surabaya</option>
                            <option>Jakarta</option>
                            <option>Tangerang</option>
                            <option>Bandung</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Release Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        <label
                            className="text-white dark:text-gray-200"
                            htmlFor="passwordConfirmation"
                        >
                            Overview
                        </label>
                        <textarea
                            id="textarea"
                            type="textarea"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                        Add Cast
                    </button>
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                        Save
                    </button>
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" onClick={toggleModal}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddEditMovie;
