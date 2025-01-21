import { Request } from "../../../common/api.call"

const path = "/finance/transactions"
class TransactionService {
    getPageMyTransaction(req: any) {
        return Request.callAdmin(path + "/my-page", "post", req)
    }
}
export default new TransactionService()