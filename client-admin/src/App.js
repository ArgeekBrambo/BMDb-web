import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./stores";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "./App.css";

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    );
};

export default App;
