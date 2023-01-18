import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddEditMovie from "../components/AddEditMovie";

const MovieList = () => {
    // trigger modal
    const [showModal, setShowModal] = useState(false);

    // toggle modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {/* Movie List */}
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="flex min-w-full justify-between my-3 px-3">
                    <h1 className="text-4xl font-bold">Movie List</h1>
                    <button
                        className="py-2 px-4 shadow-md no-underline rounded-full bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        onClick={toggleModal}
                    >
                        Add Movie
                    </button>
                </div>
                <div className="max-w-md rounded-lg overflow-hidden md:max-w-xl">
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
                <div className="border rounded-lg overflow-scroll">
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
                                    Runtime(mins)
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
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    1
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    Puss in Boots: The Last Wish
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    <img
                                        src="https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
                                        alt=""
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    <img
                                        src="https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
                                        alt=""
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    <img
                                        src="http://placekitten.com/500/500"
                                        alt=""
                                        className=""
                                    />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    <button className="py-2 px-4 shadow-md no-underline rounded-md bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
                                        Show Cast
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap hidden">
                                    Puss in Boots discovers that his passion for
                                    adventure has taken its toll: He has burned
                                    through eight of his nine lives, leaving him
                                    with only one life left. Puss sets out on an
                                    epic journey to find the mythical Last Wish
                                    and restore his nine lives.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    8.6
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    103
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    2022-12-07
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    Animation, Action, Adventure, Comedy,
                                    Family, Fantasy
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    DreamWorks
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <Link
                                        className="text-green-500 hover:text-green-700 mr-3"
                                        onClick={toggleModal}
                                    >
                                        Edit
                                    </Link>
                                    <a
                                        className="text-red-500 hover:text-red-700"
                                        href="#"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {
            showModal && (
                <div className="absolute top-0 h-screen min-w-full overflow-visible justify-center align-middle items-center bg-slate-900 bg-opacity-70">
                    <AddEditMovie showModal={showModal} setShowModal={setShowModal}/>
                </div>
            )
            }
        </>
    );
};

export default MovieList;
