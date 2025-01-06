import { SellerRespVO } from "../../authen/record/record.resp.vo"

export interface CartItemRespVO {
    id?: number
    selected?: boolean
    product?: any
    quantity?: number
    totalPrice?: number
}
export interface CartListRespVO {
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
    products?: string
    addressDetails?: string
    paymentMode?: string
    paymentStatus?: string
}
export interface OrderLineItemRespVO {
    product?: any
    quantity?: number
    id?: number
}
export interface AppOrderDetailsRespVO  extends AppOrderSimpleRespVO{
    lineItems?: Array<OrderLineItemRespVO>
}