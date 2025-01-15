import { Request } from "../../../common/api.call"

const PATH = "/product/brands"
class BrandService {
    getAll() {
        return Request.callAdmin(PATH, "get")
    }
}
export default new BrandService()