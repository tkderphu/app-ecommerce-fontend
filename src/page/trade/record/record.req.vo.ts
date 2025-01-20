export interface CartCreateReqVO  {
    productSkuId?: number
    quantity?: number
}
export interface CartUpdateQuantityReqVO {
    cartId?: number
    operand?: string
}


export interface OrderDetailsReqVO  {
    cartIds?: Array<number>
    paymentMode?: string
    addressDetails?: string
    couponIds?: Array<number>
}

