import { Request } from "../../../common/api.call"
const path = "/realtime/chat/messages"
class ChatService {
    createMessage(req: any) {
        return Request.call(path, "post", req)
    }   

    getTotalUnreadMessageFromUser() {
        return Request.call(path + "/count-unread-message", "get")
    }

    getAllMessageBetweenTwoUser(toUserId?: number) {
        return Request.call(path + `?toUserId=${toUserId}`, "get")
    }
    
}
export default new ChatService()