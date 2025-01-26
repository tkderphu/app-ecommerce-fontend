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


/**
 * 
 * private Long id;
    private String userFullName;
    private Long userId;
    private String userAvatar;
    private Boolean online;
//    private MessageSimpleRespVO message;
    private Integer numberUnreadMessage;
 */