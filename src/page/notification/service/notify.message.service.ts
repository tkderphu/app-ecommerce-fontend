import { Request } from "../../../common/api.call"

const path = "/system/notify/messages"
class NotifyMessageService {
    getMyPageNotifyMessage(req: any) {
        return Request.call(path + "/my-notify/page", "post", req)
    }
    getUnreadNotifyMessageCount() {
        return Request.call(path + "/unread/count", "get")
    }
    getNotifyMessageById(notifyMessageId: any) {
        return Request.call(path + `/${notifyMessageId}`, "get")
    }
}
export default new NotifyMessageService()