import { USER_LOGIN, USER_REGISTER, GET_MOVIE, GET_GENRE } from "./actionType";

export const userLogin = (email, password) => {
    return async (dispatch) => {
        try {
            // console.log("email", email);
            // console.log(password, "password");
            const response = await fetch("http://localhost:3005/user/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            // console.log(response, 'response');
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // localStorage.setItem("access_token", resData.access_token);
            localStorage.setItem("access_token", resData.access_token);
            dispatch({
                type: USER_LOGIN,
                payload: resData,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const userRegister = (
    email,
    password,
    username,
    phoneNumber,
    address
) => {
    return async (dispatch) => {
        try {
            // console.log("email", email);
            // console.log(password, "password");
            const response = await fetch(
                "http://localhost:3005/user/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.getItem("access_token"),
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        phoneNumber,
                        address,
                    }),
                }
            );
            // console.log(response, 'response');
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // localStorage.setItem("access_token", 'asdasdasda');
            dispatch({
                type: USER_REGISTER,
                payload: resData,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getMovies = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3005/movies", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
            });
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
            const resData = await response.json();
            // console.log(resData, 'resdata');
            dispatch({
                type: GET_MOVIE,
                payload: resData,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const getGenres = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3005/genres", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
            });
            const resData = await response.json();
            // console.log(resData, 'resdata');
            dispatch({
                type: GET_GENRE,
                payload: resData,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
