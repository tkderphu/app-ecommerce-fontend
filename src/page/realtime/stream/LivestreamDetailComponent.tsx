import { useEffect, useState, useCallback, VideoHTMLAttributes, useRef, Fragment } from "react"
import "./Livestream.css"



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


function addComment(commentText: any) {
    const commentsSection = document.getElementById('comments-section');

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>User:</strong> ${commentText}`;

    //@ts-ignore
    // Add the comment to the section
    commentsSection.appendChild(newComment);

    //@ts-ignore
    // Scroll to the bottom (newest comment)
    commentsSection.scrollBottom = commentsSection.scrollHeight;
}

function LivestreamDetailComponent() {

    const [localStream, setLocalStream] = useState<MediaStream>()

    useEffect(() => {

        console.log("get media")
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        }).then(stream => {
            setLocalStream(stream)
        }).catch(err => {
            console.error("GET MEDIA ERROR")
        })


        setInterval(() => {
            addComment("This is amazing!");
            addComment("I love this stream!");
        }, 1000);


    }, [])

    return (

        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <div className="video-container">
                            <Video id="local-video" autoPlay playsInline srcObject={localStream} />
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
                    </div>

                    <div className="col-lg-4 col-md-5 col-sm-12 comments-section" id="comments-section">
                    </div>
                </div>

            </div>
            <div className="input-group mt-3">
                <input type="text" className="form-control" id="comment-input" placeholder="Type your comment..." />
                <button className="btn btn-primary" type="button" id="send-comment">Send</button>
            </div>

        </Fragment>
    )
}
export default LivestreamDetailComponent



