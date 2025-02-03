import { CREATE_COMMENT_BEGIN, CREATE_COMMENT_ERROR, CREATE_COMMENT_SUCCESS, REMOVE_COMMENT_BEGIN, REMOVE_COMMENT_ERROR, UPDATE_COMMENT_BEGIN, UPDATE_COMMENT_ERROR, UPDATE_COMMENT_SUCCESS } from "./action.type"
import { Error, Response } from "./common"

const createCommentBegin = () => {
    return {
        type: CREATE_COMMENT_BEGIN
    }
}
const createCommentSuccess = (response: Response) => {
    return {
        ...response,
        type: CREATE_COMMENT_SUCCESS
    }
}
const createCommentError = (error: Error) => {
    return {
        type: CREATE_COMMENT_ERROR,
        ...error
    }
}
const updateCommentBegin = () => {
    return {
        type: UPDATE_COMMENT_BEGIN
    }
}
const updateCommentSuccess  = (response: Response) => {
    return {
        type: UPDATE_COMMENT_SUCCESS,
        ...response
    }
}
const updateCommentError = (error: Error) => {
    return {
        type: UPDATE_COMMENT_ERROR,
        ...error
    }
}
const removeCommentBegin = () => {
    return {
        type: REMOVE_COMMENT_BEGIN
    }
}
const removeCommentSuccess = () => {

}
const removeCommentError = (error: Error) => {
    return {
        type: REMOVE_COMMENT_ERROR,
        ...error
    }
}