import { Request } from "../../../common/api.call"
import { OrderDetailsReqVO } from "../record/record.req.vo"

const path = "/trade/orders"
class OrderService {

    createOrder(req: any) {

        return Request.call(path, "post", req)
    }

    getMyListOrder() {
        return Request.call(path + "/my-orders", "get")
    }

    getOrderDetails(id: any) {
        return Request.call(path + "/" + id, "get")
    }

    cancelOrder(orderId: any) {
        return Request.call(path + "/cancel/" + orderId,  "get")

    }

}
export default new OrderService()