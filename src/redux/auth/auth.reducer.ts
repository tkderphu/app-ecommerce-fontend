import { LOGIN_ERROR, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS } from "./auth.action.type";




interface AuthState {
    success?: boolean,
    message?: string
    hasError?: boolean,
}


const initiateLogin: AuthState = {
    
}

const initiateRegister: AuthState = {

}

const loginReducer = (state = initiateLogin, action: any): AuthState => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                success: false,
                hasError: true,
                message: action.message
            }
        default: return state
    }
}
const registerReducer = (state = initiateRegister, action: any): AuthState => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                success: true
            }
        case REGISTER_ERROR:
            return {
                ...state,
                success: false,
                hasError: true,
                message: action.message
            }
        default: return state
    }
}