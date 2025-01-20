import { Request } from "../../../common/api.call"

const path = "/finance/wallets"
class WalletService {
    

    getMyWallet() {
        return Request.callAdmin(path + "/my-wallet", "get")
    }
}
export default new WalletService()