import { CompatClient, Stomp } from "@stomp/stompjs"
import { useEffect, useState, useCallback, VideoHTMLAttributes, useRef, Fragment } from "react"
import { useParams } from "react-router-dom"
import { LiveCommentCreateReqVO, PayloadSendSignal } from "../record/record.req.vo"
import { LiveCommentRespVO, LivestreamDetailRespVO, LivestreamRespVO } from "../record/record.resp.vo"
import liveCommentService from "../service/live.comment.service"
import livestreamService from "../service/livestream.service"
import "./Livestream.css"
import SockJS from "sockjs-client"
import { BASE_URL, headers } from "../../../common/api.call"
import ButtonModalComponent from "../../../component/ButtonModalComponent"
import ShopDetailsComponent from "../../product/detail-product/ShopDetailsComponent"
import { getToken } from "../../../common/common"



type PropsType = VideoHTMLAttributes<HTMLVideoElement> & {
    srcObject: MediaStream | undefined
}

export function Video({ srcObject, ...props }: PropsType) {
    const refVideo = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (!refVideo.current) return
        //@ts-ignore
        refVideo.current.srcObject = srcObject
    }, [srcObject])

    return <video ref={refVideo} {...props} />
}

const ICE_SERVERS = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        {
            urls: 'turn:viosmash.site:3478',
            username: 'test',
            credential: 'test'
        }
    ]
}
function LivestreamDetailComponent() {
    const [localStream, setLocalStream] = useState<MediaStream>()
    const stompClientRef = useRef<CompatClient>()
    const peerConnectionRef = useRef<RTCPeerConnection | undefined>()

    const [livestream, setLivestream] = useState<LivestreamDetailRespVO>()
    const { liveId } = useParams()
    const [liveCommentReq, setLiveCommentReq] = useState<LiveCommentCreateReqVO>({
        livestreamId: liveId,
        pin: false
    })
    const messageRef = useRef<HTMLInputElement>(null)
    const commentsEndRef = useRef<HTMLDivElement>(null);
    // const [stompClient, setStompClient] = useState<CompatClient>()
    const [comments, setComments] = useState<LiveCommentRespVO[]>([])



    
    //get stompClient
    useEffect(() => {

        liveCommentService.getListComment(liveId).then(res => {
            if (res.data.code === 200) {
                setComments(res.data.data)
            } else {
                alert("Loi service [get list comment]: " + res.data.message)
            }
        }).catch(err => {
            console.log("loi he thong: ", err)
        })


        livestreamService.getLivestream(liveId).then(res => {
            if (res.data.code == 200) {
                const rq: LivestreamRespVO = res.data.data
                console.log(rq)
                if (!rq.started) {
                    alert("Chưa bắt đầu hoặc đã đóng")
                    window.history.back()
                } else {
                    if (getToken()?.userId === rq.hostOwner?.id) {
                        navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: true,
                        }).then(stream => {
                            peerConnectionRef.current = new RTCPeerConnection(ICE_SERVERS)
                            localStream?.getTracks().forEach(track => {
                                peerConnectionRef.current?.addTrack(track, localStream)
                            })
                           setLocalStream(stream)
                        }).catch(err => {
                            console.error("GET MEDIA ERROR")
                        })
                    }
                    setLivestream(rq)
                }
            }
        })
        const stompClient = Stomp.over(new SockJS(`${BASE_URL}/ws`));
        stompClient.connect(headers, (frame: any) => {
            stompClient.subscribe(`/topic/livestream/${liveId}/comments`, (payload: any) => {
                setComments((prev) => [...prev, JSON.parse(payload.body)])
            })
            stompClient.subscribe(`/topic/livestream/${liveId}`, (payload: any) => {
                

            })
            const signalPayload: PayloadSendSignal = {
                dest: "all",
                localUuid: getToken()?.userId
            }
            stompClient.send("/app/livestream/" + liveId, headers, JSON.stringify(signalPayload))
        })
        stompClientRef.current = stompClient



        return () => {
            if (stompClient) {
                stompClient.deactivate()
                peerConnectionRef.current?.close()
                localStream?.clone()
            }
        }

    }, [])


    


    //scroll to end
    useEffect(() => {
        if (commentsEndRef.current) {
            commentsEndRef.current.scrollIntoView({
                behavior: 'smooth'
            })
        }
        if (messageRef.current) {
            messageRef.current.value = ''
        }
    }, [comments])





    return (

        <Fragment>
            <button onClick={() => {
                console.log("Local: ", localStream);
                
            }}>Click</button>
            <div className="container-fluid">
                <div className="d-flex justify-content-around flex-wrap">
                    <a href="#">{livestream?.hostOwner?.aliasName}</a>
                    <div className="mx-3">{livestream?.titleLiveStream}</div>
                </div>
                <div className="row">

                    {!localStream ? (<div className="col-lg-8 col-md-7 col-sm-12 mb-5">
                        <div className="video-container">
                            <Video id="local-video" autoPlay playsInline srcObject={localStream } />
                            <div className="d-flex justify-content-around flex-wrap">
                                {livestream?.liveProducts?.map(product => {
                                    return (
                                        <ButtonModalComponent
                                            body={<ShopDetailsComponent orderPlace={"LIVESTREAM"} productId={product.productSpu?.id} />}
                                            id={"product-" + product.productSpu?.id}
                                            nameButton={product.productSpu?.name}
                                            title={product.productSpu?.name}
                                        />
                                    )
                                })}
                            </div>

                            <button className="btn btn-secondary fullscreen-button"
                                onClick={() => {
                                    const videoElement = document.getElementById('local-video');

                                    if (document.fullscreenElement) {
                                        document.exitFullscreen();
                                    } else {
                                        //@ts-ignore
                                        videoElement.requestFullscreen();
                                    }
                                }}
                                id="fullscreen-button"><i className="bi bi-fullscreen"></i></button>
                        </div>

                    </div>) : (<h3 className="mb-3 mt-3 " style={{ color: "red" }}>Người bán hàng đã tắt camera</h3>)}

                    <div className="col-lg-4 col-md-5 col-sm-12 comments-section" id="comments-section">
                        {comments.map(res => {
                            return (
                                <div className="d-flex align-items-center mb-4">
                                    <div className="d-flex flex-column align-items-center border rounded-circle" style={{ width: "45px" }}>
                                        <img src={res.user?.avatar}></img>
                                        <div>{res.user?.fullName}</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="text-break">{res.content}</div>
                                        <div>{res.createdDate}</div>
                                    </div>
                                </div>
                            )
                        })}
                        <div ref={commentsEndRef}></div>
                    </div>
                </div>

            </div>
            <div className="input-group mt-3">
                <input type="text" className="form-control" name="content"
                    ref={messageRef}
                    onChange={(e) => {
                        const { name, value } = e.target
                        setLiveCommentReq((prev) => ({
                            ...prev,
                            [name]: value
                        }))
                    }}
                    id="comment-input" placeholder="Type your comment..." />
                <button className="btn btn-primary" onClick={() => {
                    // console.log(liveCommentReq)
                    liveCommentService.createComment(liveCommentReq).then(res => {
                        if (res.data.code != 200) {
                            alert("error[service, create comment]")
                        }
                    }).catch(err => {
                        alert("error[system, create comment]")
                        console.error("error system: ", err)
                    })
                }} type="button" id="send-comment">Send</button>
            </div>

        </Fragment>
    )
}
export default LivestreamDetailComponent



