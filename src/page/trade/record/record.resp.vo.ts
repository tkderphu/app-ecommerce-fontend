import { Pair } from "../../../common/common"
import { SellerRespVO } from "../../authen/record/record.resp.vo"
import { ProductSkuSimpleRespVO } from "../../product/record/record.request"
import { CouponRespVO } from "../../promotion/record/record.req.vo"

export interface CartItemRespVO {
    id?: number
    selected?: boolean
    product?: ProductSkuTradeResVO
    quantity?: number
    totalPrice?: number
}
export interface CartRespVO {
    seller?: SellerRespVO
    cartItems?: Array<CartItemRespVO>
}

export interface AppOrderSimpleRespVO  {
    id?: number
    totalPrice?: number
    totalProduct?: number
    orderStatus?: Pair<string, Pair<string, number>>
    createdDate?: string
    combinationShop?: boolean
    products: string
    addressDetails?: string
    paymentMode?: string
    paymentStatus?: Pair<"PROCESSING" | "SUCCESS", string>
}
export interface OrderItemRespVO {
    product: ProductSkuSimpleRespVO
    quantity: number
    id?: number
}
export interface OrderLineItemRespVO {
    id?: number
    seller?: SellerRespVO
    coupon?: CouponRespVO
    items?: Array<OrderItemRespVO>
    commentStatus?: boolean
    totalPrice?: number

}
export interface AppOrderDetailsRespVO  extends AppOrderSimpleRespVO{
    lineItems?: Array<OrderLineItemRespVO>
}
export interface ProductSkuTradeResVO {
    id?: number
    name?: string
    image?: string
    price?: number
    properties?: string
}
export interface OrderLogRespVO {
    id?: number
    content?: string
    prevOrderStatus?: string
    nextOrderStatus?: string
    createdDate?: string
}