export interface MessageCreateReqVO {
    toUserId?: number
    content?: string
    replyMessageId?: number
    messageTemplateId?: number
    templateParams?: Record<string, any>
}


export interface LiveCommentCreateReqVO {
    livestreamId?: any
    content?: string
    pin?: boolean
    userId?: number
}
export interface LiveStreamCreateReqVO {
    title?: string
    startDate?: any
}
export interface PayloadSendSignal {
    localUuid?: any
    displayName?: string
    dest?: any
    sdp?: any
    ice?: any
}