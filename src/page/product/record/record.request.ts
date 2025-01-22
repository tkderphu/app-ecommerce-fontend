import { PagePram } from "../../../common/common";

export class PageProductSpuReqVO extends PagePram{
    condition?: Record<string, string>
    sort?: boolean
    sortName?: string
    sortType?: number
}
export interface ProductSkuSimpleRespVO {
    id?: number
    price: number
    image?: string
    quantity?: string
    name?: string
    properties?: string
}