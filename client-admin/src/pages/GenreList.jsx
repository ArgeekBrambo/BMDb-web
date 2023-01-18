import React, { useState } from "react";
import AddGenre from "../components/AddGenre";

const GenreList = () => {

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
                    <h1 className="text-4xl font-bold">Genre List</h1>
                    <button
                        className="py-2 px-4 shadow-md no-underline rounded-full bg-sky-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
                        onClick={toggleModal}
                    >
                        Add Genre
                    </button>
                </div>
                <div className="border rounded-lg overflow-scroll w-[500px]">
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
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    1
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                                    Animation
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
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
            {showModal && (
                <div className="absolute top-0 h-screen min-w-full overflow-visible justify-center align-middle items-center bg-slate-900 bg-opacity-70" style={{ width: '100vw'}}>
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
