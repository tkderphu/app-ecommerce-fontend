import { Request } from "../../../common/api.call"
const PATH = "/product/categories"
class CategoryService {
    getAll() {
        return Request.callAdmin(PATH, "get")
    }



}
export default new CategoryService()