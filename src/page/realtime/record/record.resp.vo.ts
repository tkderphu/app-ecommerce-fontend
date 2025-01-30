import { AppProductSpuSimpleRespVO } from "../../product/record/record.response"
import { UserMemberResVO } from "../../user/record/record.res.vo"

export interface ConversationRespVO {
    message?: any
    numberUnreadMessage?: number
    displayName?: string
    userId?: string
    thumbnailAvatar?: string
    chat?: boolean
}
export interface MessageSimpleRespVO {
    id?: number
    createdTime?: string
    content?: string
    sender?: string
    revokeMessage?: boolean

}
export interface MessageRespVO extends MessageSimpleRespVO{
    mediaUrls?: Array<string>
    position?: "LEFT" | "RIGHT"
}

export interface ChatUserRespVO {
    id?: number
    userFullName?: string
    userId?: number
    userAvatar?: string
    online?: boolean
    numberUnreadMessage?: number
}

export interface LiveCommentRespVO  {
    user?: UserMemberResVO
    content?: string
    like?: number
    isPinned?: boolean
    isDeleted?: boolean
    createdDate?: string

}
export interface LivestreamRespVO  {
    id?: number
    titleLiveStream?: string
    hostOwner?: UserMemberResVO
    totalView?: number
    startDate?: string
    started?: boolean
}
export interface LiveProductResVO  {
    productSpu?: AppProductSpuSimpleRespVO
    display?: boolean
    pin?: boolean
}
export interface LivestreamDetailRespVO extends LivestreamRespVO {
    liveProducts?: Array<LiveProductResVO>
}