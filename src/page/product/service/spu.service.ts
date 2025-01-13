import axios, { AxiosRequestConfig } from "axios"
import { Request } from "../../../common/api.call"
import { PageProductSpuReqVO } from "../record/record.request"
const headers: Record<string, string> = {
    'Content-Type': "application/json; charset=utf-8",
    'Authorization': `Bearer `,
}
const PATH = "/product/spus"
class SpuService {
    getPageProductSpu(req: PageProductSpuReqVO) {
        console.log(typeof req)
        let test =  Request.call(PATH, 'POST', req)
        console.log(test)    
        return test;
    }
    getDetailProductSpu(spuId: number) {
        const path = PATH + `/${spuId}`
        return Request.call(path, 'GET')
    }
}

export default new SpuService()