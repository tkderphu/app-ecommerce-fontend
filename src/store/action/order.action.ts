import { CommonResult } from "../../common/common"
import { APPLY_COUPON_BEGIN, APPLY_COUPON_ERROR, APPLY_COUPON_SUCCESS, CHECKOUT_PRODUCT_BEGIN, CHECKOUT_PRODUCT_SUCCESS, CREATE_ORDER_BEGIN, CREATE_ORDER_ERROR, CREATE_ORDER_SUCCESS, REMOVE_ORDER_BEGIN, REMOVE_ORDER_ERROR, REMOVE_ORDER_SUCCESS } from "./action.type"

const applyCouponBegin = () => {
    return {
        type: APPLY_COUPON_BEGIN
    }
}
/**
 * 
 * @param response : Mã giảm giá ở dạng CommonResult<CouponResp>
 */
const applyCouponSuccess = (response: any) => {
    return {
        type: APPLY_COUPON_SUCCESS,
        payload: response
    }
}
const applyCouponError = (error: any, message: any, status: any, path: any) => {
    return {
        type: APPLY_COUPON_ERROR,
        error, message, status, path
    }
}
const applyCouponAction = (couponId: number) => {
    //call api
}
const checkoutProductBegin = () => {
    return {
        type: CHECKOUT_PRODUCT_BEGIN
    }
}
const checkoutProductSuccess = () => {
    return {
        type: CHECKOUT_PRODUCT_SUCCESS
    }
}
const checkoutAction = () => {

}
const orderBegin = () => {
    return {
        type: CREATE_ORDER_BEGIN
    }
}
const orderSuccess = () => {
    return {
        type: CREATE_ORDER_SUCCESS
    }
}
const orderError = (error: any, message: any, status: any, path: any) => {
    return {
        type: CREATE_ORDER_ERROR
    }
}
const removeOrderBegin = () => {
    return {
        type: REMOVE_ORDER_BEGIN
    }
}

/**
 * 
 * @param response :orderId -> CommonResult<Long>
 * @returns 
 */
const removeOrderSuccess = (orderId: CommonResult<number>) => {
    return {
        type: REMOVE_ORDER_SUCCESS
    }
}
const removeOrderError = (message: any) => {
    return {
        type: REMOVE_ORDER_ERROR,
        message
    }
}
const removeOrderAction = (orderId: number) => {
    //call api
}
