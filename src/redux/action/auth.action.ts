import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS } from "./action.type"


const registerSuccess = (message: any) => {
    return {
        type: REGISTER_SUCCESS,
        message
    }
}

const registerError = (message: any) => {
    return {
        type: REGISTER_ERROR,
        message
    }
}
const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}

const loginError = (message: any) => {
    return {
        type: LOGIN_ERROR,
        message
    }
} 
const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}