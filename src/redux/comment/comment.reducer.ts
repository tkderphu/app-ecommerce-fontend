import { commonProperties } from "../action/common"
import { CREATE_COMMENT_BEGIN, CREATE_COMMENT_ERROR, CREATE_COMMENT_SUCCESS, FETCH_COMMENT_BEGIN, FETCH_COMMENT_FAILURE, FETCH_COMMENT_SUCCESS, REMOVE_COMMENT_BEGIN, REMOVE_COMMENT_ERROR, REMOVE_COMMENT_SUCCESS, UPDATE_COMMENT_BEGIN, UPDATE_COMMENT_ERROR, UPDATE_COMMENT_SUCCESS } from "./comment.action.type"


/**
 * create comment reducer
 */
const initiateComment: any = {
    ...commonProperties,
    newComment: ''
}
export const createCommentReducer = (state = initiateComment, action: any) => {
    switch (action.type) {
        case CREATE_COMMENT_BEGIN:
            return {
                ...initiateComment,
                loading: true
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                hasError: false,
                message: "",
                error: "",
                status: '',
                path: "",
                loading: false,
                newComment: action.payload
            }
        case CREATE_COMMENT_ERROR:

            return {
                hasError: true,
                message: action.message,
                error: action.error,
                status: action.status,
                path: action.path,
                newComment: '',
                loading: false
            }
        default: return state
    }
}


/**
 * fetch comment reducer
 */

const fetchCommentInitiateState: any = {
    comments: [],
    ...commonProperties
}
export const fetchCommentReducer = (state = fetchCommentInitiateState, action: any) => {
    switch (action.type) {
        case FETCH_COMMENT_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_COMMENT_SUCCESS:
            return {
                //page result
                loading: false,
                hasError: false,
                error: '',
                message: '',
                path: '',
                status: ''
            }

        case FETCH_COMMENT_FAILURE:
            return {
                comments: [],
                loading: false,
                hasError: true,
                error: action.error,
                message: action.message,
                path: action.path,
                status: action.status
            }
        default: return state
    }
}
const removeCommentInitiateState : any = {
    ...commonProperties,
    commentIsDeletedId: 0
}
export const removeCommentReducer = (state = removeCommentInitiateState, action: any) => {
    switch (action.type) {
        case REMOVE_COMMENT_BEGIN:
            return {
                ...state,
                loading: true
            }
        case REMOVE_COMMENT_SUCCESS:
            return {
                commentIsDeletedId: action.payload,
                loading: false,
                hasError: false,
                error: '',
                message: '',
                path: '',
                status: ''
            }

        case REMOVE_COMMENT_ERROR:
            return {
                commentIsDeletedId: 0,
                loading: false,
                hasError: true,
                error: action.error,
                message: action.message,
                path: action.path,
                status: action.status
            }
        default: return state
    }
}

const updateCommentInitiateState : any = {
    ...commonProperties,
    commentIsUpdatedId: 0
}
export const updateCommentReducer = (state = updateCommentInitiateState, action: any) => {
    switch (action.type) {
        case UPDATE_COMMENT_BEGIN:
            return {
                ...state,
                loading: true
            }
        case UPDATE_COMMENT_SUCCESS:
            return {
                commentIsUpdatedId: action.payload,
                loading: false,
                hasError: false,
                error: '',
                message: '',
                path: '',
                status: ''
            }

        case UPDATE_COMMENT_ERROR:
            return {
                commentIsUpdatedId: 0,
                loading: false,
                hasError: true,
                error: action.error,
                message: action.message,
                path: action.path,
                status: action.status
            }
        default: return state
    }
}