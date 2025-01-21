import { Pair } from "../../../common/common"
import { SellerRespVO } from "../../authen/record/record.resp.vo"

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
    orderStatus?: string
    createdDate?: string
    combinationShop?: boolean
    products: string
    addressDetails?: string
    paymentMode?: string
    paymentStatus?: Pair<"PROCESSING" | "SUCCESS", string>
}
export interface OrderLineItemRespVO {
    product?: any
    quantity?: number
    id?: number
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