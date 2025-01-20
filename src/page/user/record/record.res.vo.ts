export interface AddressRespVO {
    id?: number
    defaultAddress?: boolean
    city?: string
    district?: string
    commune?: string
    detailAddress?: string
    fullName?: string
    phoneNumber?: string
    fullAddress?: string
}
export interface WalletRespVO {
    id?: number
    username?: string
    amount?: number
    walletType?: string
}