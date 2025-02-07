import { Request } from "../../../common/api.call"
const path = "/product/comments"
class CommentService {
    createComment(req: any) {
        return Request.call(path,"POST")
    }
    removeComment(commentId: any) {
        return Request.call(path + "/" + commentId, "DELETE")
    }
    updateComment(req: any) {
        return Request.call(path, "PUT")
    }
    getAllCommentByUser(userId: any) {
        return Request.call(`${path}/user/${userId}`, 'get')
    }
    getAllCommentBySpu(spuId: any)  {
        return Request.call(`${path}/spu/${spuId}`, 'get')
    }
}
export default new CommentService()