export interface SellerRespVO {
    id?: number
    shopName?: string
    shopImage?: string
}
export interface AuthLoginResVO {
    userId?: number
    fullName?: string
    accessToken?: string
    refreshToken?: string
    expires?: any
}