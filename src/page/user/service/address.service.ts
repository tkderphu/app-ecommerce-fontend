import { Request } from "../../../common/api.call"

const path = "/system/user/addresses"
class AddressService {

    createAddress(req: any) {
        return Request.call(path, "post", req)
    }

    getListAddress() {
        return Request.call(path, "get")
    }
}
export default new AddressService()