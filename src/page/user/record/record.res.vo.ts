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
    walletType?: "USER_MEMBER" | "SYSTEM"
}

/**
 * private String avatar;
    private String fullName;
    private String aliasName;
    private String email;
    private String phoneNumber;
    private UserMember.Sex sex;
 */
export interface UserMemberResVO {
    avatar?: string
    id?: number
    aliasName?: string
    fullName?: string
    email?: string
    phoneNUmber?: string
    sex?: 'MALE' | 'FEMALE',
    isSeller?: boolean
}