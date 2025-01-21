import { PagePram } from "../../../common/common"

export interface OrderPaymentReqVO extends PaymentReqVO{
    orderId?: number

}
export interface TransferPaymentReqVO extends PaymentReqVO{
    toUserId?: number
    transferAmount?: number
}
export interface PaymentReqVO {
    content?: string
    chanelType?: "APP" | "VNPAY"

}
export interface PageTransactionReqVO extends PagePram{
    startDateTime?: any
    endDateTime?: any
}