import { Request } from "../../../common/api.call"

const path = "/realtime/chats"
class ChatService {
    getListChatUser() {
        return Request.call(path, "get")
    }
}
export default new ChatService()

