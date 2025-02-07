import commentService from "../../page/product/service/comment.service"
import { Error, Response } from "../action/common"
import { CREATE_COMMENT_BEGIN, CREATE_COMMENT_ERROR, CREATE_COMMENT_SUCCESS, FETCH_COMMENT_BEGIN, FETCH_COMMENT_FAILURE, FETCH_COMMENT_SUCCESS, REMOVE_COMMENT_BEGIN, REMOVE_COMMENT_ERROR, REMOVE_COMMENT_SUCCESS, UPDATE_COMMENT_BEGIN, UPDATE_COMMENT_ERROR, UPDATE_COMMENT_SUCCESS } from "./comment.action.type"


export const createCommentBegin = () => {
    return {
        type: CREATE_COMMENT_BEGIN
    }
}
export const createCommentSuccess = (response: Response) => {
    return {
        type: CREATE_COMMENT_SUCCESS,
        ...response
    }
}
export const createCommentFailure = (error: Error) => {
    return {
        type: CREATE_COMMENT_ERROR,
        ...error
    }
}
export const fetchCommentBegin = () => {
    return {
        type: FETCH_COMMENT_BEGIN
    }
}
export const fetchCommentSuccess = (response: Response) => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        ...response
    }
}
export const fetchCommentFailure = (error: Error) => {
    return {
        type: FETCH_COMMENT_FAILURE,
        ...error
    }
}
export const updateCommentBegin = () => {
    return {
        type: UPDATE_COMMENT_BEGIN
    }
}
export const updateCommentSuccess = (response: Response) => {
    return {
        type: UPDATE_COMMENT_SUCCESS,
        ...response
    }
}
export const updateCommentFailure = (error: Error) => {
    return {
        type: UPDATE_COMMENT_ERROR,
        ...error
    }
}
export const removeCommentBegin = () => {
    return {
        type: REMOVE_COMMENT_BEGIN
    }
}
export const removeCommentSuccess = (response: Response) => {
    return {
        type: REMOVE_COMMENT_SUCCESS,
        ...response
    }
}
export const removeCommentFailure = (error: Error) => {
    return {
        type: REMOVE_COMMENT_ERROR,
        ...error
    }
} 

export const isUnauthorized = (status: any) => {

}

export const createCommentAction = (createCommentReq: any) => {
    return (dispatch: any) => {
        dispatch(createCommentBegin())
        commentService.createComment(createCommentReq).then(res => {
            if(res.data.code === 200) {
                dispatch(createCommentSuccess({
                    payload: res.data.data
                }))
            } else {
                dispatch(createCommentFailure({
                    error: "Lỗi Comment Service",
                    message: res.data.message,
                    status: res.data.code
                }))
                isUnauthorized(res.data.code)
            }
        }).catch(err => {
            dispatch(createCommentFailure({
                error: err,
                message: "Lỗi phát sinh, chưa giải quyết"
            }))
        })
    }
}

