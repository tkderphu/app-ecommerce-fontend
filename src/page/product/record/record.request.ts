import { PagePram } from "../../../common/common";

export class PageProductSpuReqVO extends PagePram{
    condition: Map<string, string> = new Map<string, string>()
    sort?: boolean
    sortName?: string
    sortType?: number
}