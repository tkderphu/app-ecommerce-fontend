import { PagePram } from "../../../common/common";

export interface AppPageCouponReqVO extends PagePram{
    userId?: number
}
export interface CouponRespVO    {
    id?: number
    description?: string
    code?: string
    productScope?: any
    limitMinPrice?: number
    limitMaxPrice?: number
    begin?: string
    end?: string
    couponScope?: string
    countNumber?: number
}