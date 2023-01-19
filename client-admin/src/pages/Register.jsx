import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userRegister } from "../stores/actionCreator";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const newUser = useSelector((state) => state.newUser);
    const dispatch = useDispatch();

    const handleRegister = (event) => {
        // console.log(email);
        event.preventDefault();
        dispatch(userRegister(email, password, username, phoneNumber, address));
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                Register New Admin
            </h2>

            <form onSubmit={handleRegister}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="emailAddress"
                        >
                            Email Address
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="phoneNumber"
                        >
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="address"
                        >
                            Address
                        </label>
                        <textarea
                            id="address"
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            onChange={(event) => setAddress(event.target.value)}
                        >
                        </textarea>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Register;
