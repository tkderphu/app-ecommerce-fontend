import { Request } from "../../../common/api.call"
import { PageProductSpuReqVO } from "../record/record.request"

const PATH = "/product/spus"
class SpuService {
    getPageProductSpu(req: PageProductSpuReqVO) {
        return Request.call(PATH, 'GET', req)
    }
    getDetailProductSpu(spuId: number) {
        const path = PATH + `/${spuId}`
        return Request.call(path, 'GET')
    }
}

export default new SpuService()