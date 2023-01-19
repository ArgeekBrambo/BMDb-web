import { USER_LOGIN, USER_REGISTER } from "../actionType";

const initialState = {
    user: '',
    newUser: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                user: action.payload.access_token,
            }

        case USER_REGISTER:
            // console.log(action.payload, 'payload');
            return {
                ...state,
                newUser: action.payload,
            }

        default:
            return state;
    }
}