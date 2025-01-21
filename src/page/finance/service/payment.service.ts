import { Request } from "../../../common/api.call"

const path = "/finance/payment"
class PaymentService {
    payOrder(orderPaymentReq: any) {
        return Request.call(path + "/order", "post", orderPaymentReq)
    }

    transfer(transferPaymentReq: any) {
        return Request.call(path + "/transfer", "post", transferPaymentReq)
    }

}
export default new PaymentService()