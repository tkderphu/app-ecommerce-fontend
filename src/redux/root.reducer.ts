import { combineReducers } from "redux";
import { createCommentReducer, fetchCommentReducer, removeCommentReducer, updateCommentReducer } from "./comment/comment.reducer";

const rootReducer = combineReducers({
    createComment: createCommentReducer,
    fetchComments: fetchCommentReducer,
    removeComment:  removeCommentReducer,
    updateComment: updateCommentReducer
})
export default rootReducer