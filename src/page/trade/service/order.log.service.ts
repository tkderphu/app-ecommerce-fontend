import { Request } from "../../../common/api.call"

const path = "/trade/order/logs"
class OrderLogService {
    getOrderLogByOrderId(orderId: any) {
        return Request.callAdmin(path + `/order/${orderId}`, "get")
    }
}
export default new OrderLogService()