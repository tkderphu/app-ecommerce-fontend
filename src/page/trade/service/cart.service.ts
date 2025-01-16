import { Request } from "../../../common/api.call"


const PATH = "/trade/carts"
class CartService {
    addItemIntoCart(req: any) {
        return Request.call(PATH, "post", req)
    }

    getAllItemFromCart() {
        return Request.call(PATH, "GET")
    }
}
export default new CartService()