import { CommonResult } from "../../common/common"

export interface Error {
    error?: any
    message?: any
    status?: any
    path?: any
}
export interface Response {
    payload: CommonResult<any>
}