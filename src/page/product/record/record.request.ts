import { PagePram } from "../../../common/common";

export class PageProductSpuReqVO extends PagePram{
    condition?: Record<string, string>
    sort?: boolean
    sortName?: string
    sortType?: number
}