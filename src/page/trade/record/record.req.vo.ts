export interface CartCreateReqVO  {
    productSkuId?: number
    quantity?: number
}
export interface CartUpdateQuantityReqVO {
    cartId?: number
    operand?: string
}


export interface OrderDetailsReqVO  {
    cartIds?: Set<number>
    paymentMode?: "BANK" | "RECEIPT"
    addressDetails?: number
    couponIds?: Set<number>
}
