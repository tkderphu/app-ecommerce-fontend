import { act } from "react"
import { CREATE_COMMENT_BEGIN, CREATE_COMMENT_ERROR, CREATE_COMMENT_SUCCESS } from "./comment.action.type"

const initiateComment =  {
    hasError: false,
    message: "",
    error: "",
    status: '',
    path:"",
    loading: false
}
const createCommentReducer = (state = initiateComment, action: any) => {
    switch(action.type) {
        case CREATE_COMMENT_BEGIN:
            return {
                ...initiateComment,
                loading: true
            }
        case CREATE_COMMENT_SUCCESS:
            return  {
                ...initiateComment,
                loading: false,
                message: action.message
            }
        case CREATE_COMMENT_ERROR:
            return {
                loading: false,
                error: action.error,
                message: action.message,
                hasError: true,
                path: action.path,
                status: action.status
            }
        default: return state
    }
}