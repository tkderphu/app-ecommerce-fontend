export interface UserCreateMemberReqVO {
    username?: string
    password?: string
    firstName?: string
    lastName?: string
    email?: string
    phoneNumber?: string
    sex?: "FEMALE" | "MALE"
}