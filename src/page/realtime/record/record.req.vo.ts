export interface MessageCreateReqVO {
    toUserId?: number
    content?: string
    replyMessageId?: number
    messageTemplateId?: number
    templateParams?: Record<string, any>
}
