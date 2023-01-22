import { 
    USER_LOGIN, 
    USER_REGISTER, 
    GET_MOVIE, 
    GET_GENRE, 
    GET_MOVIE_BY_ID, 
    DELETE_MOVIE, 
    ADD_GENRE, 
    DELETE_GENRE 
} from "./actionType";
import { toast } from 'react-toastify';

export const userLogin = (email, password) => {
    return async (dispatch) => {
        try {
            if(!email || !password) {
                throw { message: 'Email and password is required' }
            }
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
            toast.success("Login Success");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
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
            if(!email) {
                throw { message: 'Email is required' }
            }
            if(!password) {
                throw { message: 'Password is required' }
            }
            if(password.length < 5) {
                throw { message: 'Password must be 5 characters long' }
            }
            if(!username) {
                throw { message: 'Username is required' }
            }
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
            toast.success("Register Success");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
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
            toast.error('Oops, something went wrong!');
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
            toast.error('Oops, something went wrong!');
        }
    };
}

export const addMovie = (inputForm) => {
    return async (dispatch) => {
        try {
            if(!inputForm.original_title) {
                throw { message: 'Title is required' }
            }
            if(!inputForm.overview) {
                throw { message: 'Overview is required' }
            }
            const response = await fetch("http://localhost:3005/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
                body: JSON.stringify(inputForm),
            });
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // dispatch({
            //     type: GET_MOVIE,
            //     payload: resData,
            // });
            toast.success("Add Movie Success");
            return resData;
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
}

export const getMovieById = (id) => {
    // console.log(id);
    return async (dispatch) => {
        try {
            const response = await fetch(
                `http://localhost:3005/movies/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.getItem("access_token"),
                    },
                }
            );
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // dispatch({
            //     type: GET_MOVIE,
            //     payload: resData,
            // });
            // return resData;
            dispatch({
                type: GET_MOVIE_BY_ID,
                payload: resData,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const editMovie = (id, inputForm) => {
    return async (dispatch) => {
        try {
            if(!inputForm.original_title) {
                throw { message: 'Title is required' }
            }
            if(!inputForm.overview) {
                throw { message: 'Overview is required' }
            }
            const response = await fetch(
                `http://localhost:3005/movies/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.getItem("access_token"),
                    },
                    body: JSON.stringify(inputForm),
                }
            );
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // dispatch({
            //     type: GET_MOVIE,
            //     payload: resData,
            // });
            toast.success("Edit Movie Success");
            return resData;
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
}

export const deleteMovie = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `http://localhost:3005/movies/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.getItem("access_token"),
                    },
                }
            );
            const resData = await response.json();
            // console.log(resData, 'resdata');
            dispatch({
                type: DELETE_MOVIE,
                payload: resData,
            });
            toast.success("Delete Movie Success");
            // return resData;
        } catch (error) {
            console.log(error);
            toast.error('Oops, something went wrong!');
        }
    };
}

export const addGenre = (inputForm) => {
    return async (dispatch) => {
        try {
            console.log(inputForm);
            if(!inputForm) {
                throw { message: 'Name is required' }
            }
            // console.log(inputForm, 'inputform');
            const response = await fetch('http://localhost:3005/genres', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
                body: JSON.stringify({inputForm}),
            });
            const resData = await response.json();
            // console.log(resData, 'resdata');
            dispatch({
                type: ADD_GENRE,
                payload: resData,
            });
            toast.success("Add Genre Success");
        } catch (error) {
            console.log(error);
            toast.error(error.name);
        }
    };
}

export const deleteGenre = (id) => {
    // console.log(id, 'id');
    return async (dispatch) => {
        try {
            const response = await fetch(
                `http://localhost:3005/genres/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "access_token": localStorage.getItem("access_token"),
                    },
                }
            );
            const resData = await response.json();
            // console.log(resData, 'resdata');
            // return resData;
            dispatch({
                type: DELETE_GENRE,
                payload: resData,
            })
            toast.success("Delete Genre Success");
        } catch (error) {
            console.log(error);
            toast.error('Oops, something went wrong!');
        }
    };
}