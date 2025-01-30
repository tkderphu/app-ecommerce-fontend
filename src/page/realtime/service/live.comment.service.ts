import { Request } from "../../../common/api.call"

const path = "/realtime/livestream/comments"
class LiveCommentService {

    createComment(req: any) {
        return Request.call(path, "post", req)
    }
    getListComment(livestreamId: any) {
        return Request.call(`${path}/livestream/${livestreamId}`, 'get')
    }
    deleteComment(commentId: any) {
        return Request.call(`${path}/${commentId}`, 'delete')
    }
    pinComment(commentId: any, isPin: any) {
        return Request.call(`${path}/pin?commentId=${commentId}&isPin=${isPin}`, 'put')
    }
}
export default new LiveCommentService()