export class AppProductSpuSimpleRespVO {
    id?: number
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
    seller?: any
    skus?: Array<AppProductSkuRespVO>
    description?: string   
}

export class AppProductSkuRespVO {
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