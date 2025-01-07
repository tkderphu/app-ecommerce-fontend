export interface AuthLoginReqVO {
    userame?: string
    password?: string
}
export interface UserCreateReqVO {
    username?: string
    password?: string
    firstName?: string
    lastName?: string
    email?: string
    phoneNumber?: string
    sex?: "MALE" | "FEMALE"
}