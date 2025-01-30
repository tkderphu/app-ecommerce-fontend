import { useEffect, useState } from "react"
import { LivestreamRespVO } from "./record/record.resp.vo"
import livestreamService from "./service/livestream.service"

function LiveStreamPageComponent() {

    const [livestreams, setLivestreams] = useState<Array<LivestreamRespVO>>()

    useEffect(() => {
        livestreamService.getListLivestream().then(res => {
            if (res.data.code === 200) {
                console.log("data livestream: ", res.data.data)
                setLivestreams(res.data.data)
            } else {
                alert("Error[service, getListLivestream]: " + res.data.message)
            }
        }).catch(err => {
            alert("Error[system, getListLivestream")
            console.error("err: ", err)
        })
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Livestream</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#live">Live Stream</a></li>
                            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                        </ul> */}
                    </div>
                </div>
            </nav>



            {livestreams?.map(livestream => {
                return (
                    <section id="live" className=" card py-5 bg-light">
                        {/* <div className="container"> */}
                        <div className="d-flex justify-content-center h3">
                        <a href="#">{livestream?.hostOwner?.aliasName }</a>
                        : 
                        <h3  className="mx-3"> {livestream.titleLiveStream}</h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div>Livestream bắt đầu lúc: {livestream.startDate}</div>
                                {livestream.started &&  <div className="ratio ratio-16x9">
                                    <button className="btn btn-secondary" onClick={() => {
                                        location.href = "/livestream/" + livestream.id
                                    }}>Vào xem live</button>
                                </div>}
                                <p className="text-center mt-3">Các sản phẩm được bán: <button className="btn btn-primary">Xem ngay</button></p>
                            </div>
                        </div>
                        {/* </div> */}
                    </section>
                )
            })}



            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 LiveStreamPro. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default LiveStreamPageComponent