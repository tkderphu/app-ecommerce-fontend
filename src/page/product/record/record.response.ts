import { Pair } from "../../../common/common"
import { SellerRespVO } from "../../authen/record/record.resp.vo"

export class AppProductSpuSimpleRespVO {
    id?: number
    name?: string
    maxPrice?: number
    minPrice?: number
    sendFrom?: string
    category?: Category
    brand?: Brand
    imageUrl?: string
    discount?: any
    sold?: number
}
export class AppProductSpuDetailsRespVO extends AppProductSpuSimpleRespVO{
    sliders?: Array<string>
    statistic?: any
    seller?: SellerDetailRespVO
    skus?: Array<Pair<number, AppProductSkuRespVO>>
    properties?: Array<Pair<PropertyRespVO, Array<PropertyValueRespVO>>>
    description?: string   
    spuInfos?: Array<ProductSpuInfoRespVO>
}
export interface ProductSpuInfoRespVO {
    propertyName?: string
    value?: string
    id?: number
}
export interface SellerDetailRespVO extends SellerRespVO{
    numComment?: number
    numProduct?: number
    joined?: number
    numFollow?: number
    replyPercent?: number
}
export interface BrandRespVO {
    id?: number
    name?: number
    slug?: number
    thumbnail?: number
}
export class AppProductSkuRespVO {
    id?: number
    price?: number
    imageUrl?: string
    inStock?: number
    properties?: Array<ProductSkuPropertyRespVO>
}
export class ProductSkuPropertyRespVO {
    id?: number
    productProperty?: PropertyRespVO
    propertyValue?: PropertyValueRespVO
}
export class PropertyRespVO {
    id?: number
    name?: string
}
export class PropertyValueRespVO {
    id?: number
    value?: string
    image?: string
}
export interface Category {
  id?: number
  name?: string
  categoryParent?: Category
  thumbnail?: string
}
export interface Brand {
    id?: number
    name?: string
    slug?: string
    thumbnail?: string
}
export interface ProductCommentRespVO {
    id?: number
    createdDate?: any
    rating?: number
    productClassifications?: Array<string>
    content?: string
    mediaUrls?: Array<string>
    numberOfLike?: number
    productCommentEvaluations?: Array<ProductCommentEvaluationRespVO>
}
export interface ProductCommentEvaluationRespVO {
    id?: number
    property?: string
    propertyValue?: string
}