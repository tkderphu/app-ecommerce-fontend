import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getToken, PagePram, PageResult } from "../common/common"
import ModalComponent from "../component/ModalComponent"
import { WalletRespVO } from "../page/user/record/record.res.vo"
import walletService from "../page/finance/service/wallet.service"
import { NotifyMessageRespVO } from "../page/notification/record/record.req.resp.vo"
import notifyMessageService from "../page/notification/service/notify.message.service"
import cartService from "../page/trade/service/cart.service"


function HeaderComponent() {
    const [wallet, setWallet] = useState<WalletRespVO>()
    const [pageNotifications, setPageNotification] = useState<PageResult<NotifyMessageRespVO>>()
    const [unreadNotiyMessage, setUnreadNotifyMessage] = useState<number>(0)
    const [countCart, setCountCart] = useState<number>()
    const [pageReq, setPageReq] = useState<PagePram>({
        limit:20,
        page: 1
    })
    useEffect(() => {
        cartService.getAllItemFromCart().then(res => {
            setCountCart(res.data.data.length)
        })
        notifyMessageService.getUnreadNotifyMessageCount().then(res => {
            if(res.data.code === 200) {
                setUnreadNotifyMessage(res.data.data)
            }
        })
        notifyMessageService.getMyPageNotifyMessage(pageReq).then(res => {
            if(res.data.code === 200) {
                setPageNotification(res.data.data)
            } else {
                alert("Lỗi service [get my page notify message]: " + res.data.message)
            }
        }).catch(err => {
            alert("Lỗi server [get my page notify message]")
            console.error("error server: ", err)
        })
        walletService.getMyWallet().then(res => {
            if (res.data.code === 200) {
                setWallet(res.data.data)
            } else {
                alert("lỗi service[get my wallet]: " + res.data.message)
            }
        }).catch(err => {
            alert('lỗi hệ thống[get my wallet]')
            console.error(err)
        })
    }, [])
    return (
        <div>
            <div >
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2 text-white" style={{ fontSize: "18px" }}>
                            Liên hệ: test@gmail.com
                        </div>
                        <div className="top-link pe-2">
                            <ModalComponent
                                id={"notification-user"}
                                body={
                                    <Fragment >
                                        {pageNotifications?.list?.map(message => {
                                            return <div dangerouslySetInnerHTML={{__html: message.content}}>

                                            </div>
                                        })}

                                    </Fragment>
                                }
                                title={"Thông báo"}

                            />
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="/" className="navbar-brand"><h1 className="text-primary display-6">Trang chủ</h1></a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <a href="" className="nav-item nav-link active">Trang chủ</a>
                                <a href="/shop" className="nav-item nav-link">Cửa hàng</a>
                                <a href="/livestream" className="nav-item nav-link">Livestream</a>
                            </div>
                            <div className="d-flex m-3 me-0 align-items-center">
                            <a href="#" data-toggle="modal" data-target={"#notification-user"} className="text-black mx-4 position-relative me-4 my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                </svg>
                                <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>{unreadNotiyMessage}</span>

                            </a>
                                <a href="/cart" className="position-relative me-4 my-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>{countCart}</span>
                                </a>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {getToken()?.fullName}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/my-wallet">Số dư: {wallet?.amount?.toLocaleString()}</a>

                                        <a className="dropdown-item" href="/profile">Thông tin cá nhân</a>
                                        <a className="dropdown-item" href="/my-orders">Đơn hàng</a>
                                    </div>
                                </div>
                                {/* <a href="#" className="my-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                    <div>{getToken()?.fullName}</div>
                                </a> */}

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent