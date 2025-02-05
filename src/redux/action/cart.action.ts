import { CartCreateReqVO } from "../../page/trade/record/record.req.vo"
import { ADD_PRODUCT_TO_CART_ERROR, 
    ADD_PRODUCT_TO_CART_SUCCESS, REMOVE_PRODUCT_FROM_CART_ERROR, 
    REMOVE_PRODUCT_FROM_CART_SUCCESS, 
    UPDATE_QUANTITY_PRODUCT_IN_CART_SUCCESS, UPDATE_SELECT_PRODUCT_IN_CART_SUCCESS } 
    from "./action.type"

const addProductToCartSuccess = (response: any) => {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: response
    }
}
const addProductToCartError = (error: any, message: any, status: any, path: any) => {
    return {
        type: ADD_PRODUCT_TO_CART_ERROR,
        message,
        error,
        status,
        path
    }
}
const addProductToCartAction = (cartReq: CartCreateReqVO) => {
    //call api
}


const removeProductFromCartSuccess = (response: any) => {
    return  {
        type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
        payload: response
    }
}
const removeProductFromCartError = (error: any, message: any, status: any, path: any) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_ERROR,
        error,
        message,
        status,
        path
    }
}
const removeProductFromCartAction = (cartProductId: any) => {
    //call api
}


/**
 * 
 * @param response : current quantity of product in cart
 * @returns 
 */
const updateQuantityProductInCartSuccess = (response: any) => {
    return {
        type: UPDATE_QUANTITY_PRODUCT_IN_CART_SUCCESS,
        payload: response
    }
}


const updateQuantityProductInCartAction = (cartProductId: any, increase: boolean) => {
    const numb = (increase) ? 1 : -1
    
    //call api
}

const updateselectProductInCart = () => {
    return {
        type: UPDATE_SELECT_PRODUCT_IN_CART_SUCCESS
    }
}
