import { useEffect, useState } from "react"
import StompService from "../../../websocket/stomp.service"
import { ChatUserRespVO, MessageRespVO } from "../record/record.resp.vo"
import chatService from "../service/chat.service"
import messageService from "../service/message.service"
import "./Chat.css"
import SockJS from "sockjs-client"
import { CompatClient, Stomp } from "@stomp/stompjs"
import { BASE_URL, headers, Request } from "../../../common/api.call"
import { MessageCreateReqVO } from "../record/record.req.vo"
import { getToken } from "../../../common/common"
function ChatComponent(props: any) {
    const [conversations, setConversations] = useState<Array<ChatUserRespVO>>()
    // const [stompService, setStomService] = useState<StompService>()
    const [messages, setMessages] = useState<Array<MessageRespVO>>(new Array<MessageRespVO>())
    const [currentChat, setCurrentChat] = useState<ChatUserRespVO>()
    const [stompClient, setStompClient] = useState<CompatClient>()
    const [messageCreateReq, setMessageCreateReq] = useState<MessageCreateReqVO>()
    useEffect(() => {
        if (props.enableChat) {
            const stomp = Stomp.over(new SockJS(`${BASE_URL}/ws`));
            stomp.connect(headers, (frame: any) => {
                chatService.getListChatUser().then(res => {
                    if (res.data.code === 200) {

                        const conversations: Array<ChatUserRespVO> = res.data.data
                        stomp.subscribe(`/topic/private/chat/user/${getToken()?.userId}`, (payload) => {
                            const message: MessageRespVO = JSON.parse(payload.body)
                            console.log("msg: ", message)
                            setNewMessage(message);
                        })
                        setConversations(conversations)
                    }
                })
            })
            setStompClient(stomp)

        }
    }, [props.enableChat])

    const setNewMessage = (msg: MessageRespVO) => {
        
        messages.push(msg)
        setMessages(new Array<MessageRespVO>(...messages))
    }
    return (
        // <div className="container">
        <div className="content-wrapper">

            <div className="row gutters">

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                    <div className="card m-0">

                        <div className="row no-gutters">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                                <div className="users-container">
                                    <div className="chat-search-box">
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Search" />
                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-info">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="users">
                                        {conversations?.map(conversation => {
                                            return <li className="person d-flex" data-chat={"person" + conversation.userId}
                                                onClick={() => {
                                                    setCurrentChat(conversation)
                                                    messageService.getAllMessageBetweenTwoUser(conversation.userId)
                                                        .then(res => {
                                                            if (res.data.code === 200) {
                                                                setMessages(res.data.data)
                                                            }
                                                        }).catch(err => {
                                                            console.error("[get message between users]: ", err)
                                                        })
                                                }}
                                            >
                                                <div className="user">
                                                    <img src={conversation.userAvatar ? conversation.userAvatar : "https://www.bootdey.com/img/Content/avatar/avatar3.png"} alt="Retail Admin" />
                                                    <span className={"status " + (conversation.online ? "online" : "offline")}></span>
                                                </div>
                                                <p className="name-time d-flex flex-column align-items-center">
                                                    <span className="name">{conversation.userFullName}</span>
                                                    <span className="time" style={{ color: "red" }}>{conversation.numberUnreadMessage}</span>
                                                </p>
                                            </li>
                                        })}
                                        {/* <li className="person" data-chat="person1">
                                                <div className="user">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin"/>
                                                        <span className="status offline"></span>
                                                </div>
                                                <p className="name-time">
                                                    <span className="name">Steve Bangalter</span>
                                                    <span className="time">15/02/2019</span>
                                                </p>
                                            </li>
                                            <li className="person active-user" data-chat="person2">
                                                <div className="user">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Retail Admin"/>
                                                        <span className="status away"></span>
                                                </div>
                                                <p className="name-time">
                                                    <span className="name">Peter Gregor</span>
                                                    <span className="time">12/02/2019</span>
                                                </p>
                                            </li>
                                            <li className="person" data-chat="person3">
                                                <div className="user">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                                        <span className="status busy"></span>
                                                </div>
                                                <p className="name-time">
                                                    <span className="name">Jessica Larson</span>
                                                    <span className="time">11/02/2019</span>
                                                </p>
                                            </li>
                                            <li className="person" data-chat="person4">
                                                <div className="user">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin"/>
                                                        <span className="status offline"></span>
                                                </div>
                                                <p className="name-time">
                                                    <span className="name">Lisa Guerrero</span>
                                                    <span className="time">08/02/2019</span>
                                                </p>
                                            </li>
                                            <li className="person" data-chat="person5">
                                                <div className="user">
                                                    <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin"/>
                                                        <span className="status away"></span>
                                                </div>
                                                <p className="name-time">
                                                    <span className="name">Michael Jordan</span>
                                                    <span className="time">05/02/2019</span>
                                                </p>
                                            </li> */}
                                    </ul>
                                </div>
                            </div>
                            {currentChat && (
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                                    <div className="selected-user">
                                        <span>To: <span className="name">{currentChat?.userFullName}</span></span>
                                    </div>
                                    <div className="chat-container">
                                        <ul className="chat-box chatContainerScroll">
                                            {messages?.map(message => {
                                                return <li className={"chat-" + (message.position === "LEFT" ? 'left' : 'right')}>
                                                    <div className="chat-avatar">
                                                        <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                        <div className="chat-name">{message.sender}</div>
                                                    </div>
                                                    <div className="chat-text">
                                                        <p className="text-break">{message.content}</p>
                                                    </div>
                                                    <div className="chat-hour">08:55 <span className="fa fa-check-circle"></span></div>
                                                </li>
                                            })}
                                            {/* <li className="chat-right">
                                            <div className="chat-hour">08:56 <span className="fa fa-check-circle"></span></div>
                                            <div className="chat-text">Hi, Russell
                                                <br /> I need more information about Developer Plan.</div>
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div className="chat-name">Sam</div>
                                            </div>
                                        </li>
                                        <li className="chat-left">
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div className="chat-name">Russell</div>
                                            </div>
                                            <div className="chat-text">Are we meeting today?
                                                <br />Project has been already finished and I have results to show you.</div>
                                            <div className="chat-hour">08:57 <span className="fa fa-check-circle"></span></div>
                                        </li>
                                        <li className="chat-right">
                                            <div className="chat-hour">08:59 <span className="fa fa-check-circle"></span></div>
                                            <div className="chat-text">Well I am not sure.
                                                <br />I have results to show you.</div>
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                                                <div className="chat-name">Joyse</div>
                                            </div>
                                        </li>
                                        <li className="chat-left">
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div className="chat-name">Russell</div>
                                            </div>
                                            <div className="chat-text">The rest of the team is not here yet.
                                                <br />Maybe in an hour or so?</div>
                                            <div className="chat-hour">08:57 <span className="fa fa-check-circle"></span></div>
                                        </li>
                                        <li className="chat-right">
                                            <div className="chat-hour">08:59 <span className="fa fa-check-circle"></span></div>
                                            <div className="chat-text">Have you faced any problems at the last phase of the project?</div>
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin" />
                                                <div className="chat-name">Jin</div>
                                            </div>
                                        </li>
                                        <li className="chat-left">
                                            <div className="chat-avatar">
                                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                                                <div className="chat-name">Russell</div>
                                            </div>
                                            <div className="chat-text">Actually everything was fine.
                                                <br />I'm very excited to show this to our team.</div>
                                            <div className="chat-hour">07:00 <span className="fa fa-check-circle"></span></div>
                                        </li> */}
                                        </ul>
                                        <div className="form-group mt-3 mb-0 d-flex">
                                            <textarea className="form-control" name="content" rows={3}
                                                onChange={(e) => {
                                                    const { name, value } = e.target
                                                    setMessageCreateReq((prev) => ({
                                                        ...prev,
                                                        [name]: value,

                                                    }))
                                                }}
                                                placeholder="Nhập nội dung tin nhắn ở đây..."></textarea>
                                            <button className="btn btn-primary" onClick={() => {
                                                const res: MessageCreateReqVO = {
                                                    ...messageCreateReq,
                                                    'toUserId': currentChat.userId
                                                }
                                                messageService.createMessage(res).then(resp => {
                                                    if (resp.data.code != 200) {
                                                        alert("[Lỗi create message service: ]" + resp.data.message)
                                                    } else {
                                                        setNewMessage(resp.data.data)
                                                    }

                                                }).catch(err => {
                                                    console.error("loi he thong[create message service]: ", err)
                                                })

                                            }}>Gửi</button>
                                        </div>
                                        <div className="d-flex flex-column mt-3">
                                            <div className="d-flex justify-content-around mb-3">
                                                <a href="javascript:(0)" className="btn btn-secondary">Sản phẩm</a>
                                                <a href="javascript:(0)" className="btn btn-secondary">Đơn hàng</a>
                                            </div>
                                            <a href="javascript:(0)">
                                                <div className="mb-3">
                                                    <input className="form-control" type="file" id="formFileMultiple" multiple />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>

            {/* </div> */}

        </div>
    )
}
export default ChatComponent