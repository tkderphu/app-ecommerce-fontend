function ChatSupportComponent(props: any) {
    return props.enableChat && (
        <main className="content show-chat-support-dialog">
            <div className="container p-0">
                <div className="card" style={{top: "-50px",right: "50px"}}>
                    <div className="row g-0">
                        <div className="col-12 col-lg-5 col-xl-3 border-right tablet-mobile-message">
                            <div className="nav-item dropdown">
                                <div className="d-flex flex-wrap justify-content-between">
                                    <div>
                                        <a href="#" style={{color:" #000", fontSize: "18px"}}
                                            className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                        >
                                            <span style={{fontSize: "22px"}}>Người bán hàng</span>
                                        </a>
                                        <div className="dropdown-menu m-0 rounded-0">
                                            <div className="px-4">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <form id="search-vendor-tablet">
                                                            <input type="search" className="form-control my-3 dropdown-item" id="vendor_name_tablet"
                                                                placeholder="Vendor..." />
                                                                <input type="submit" className="form-control my-3"/>
                                                                </form>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div id="inbox-users-tablet">
                                                </div>
                                            </div>
                                        </div>
                                        <div >
                                            <p id="shop-responsible" style={{color: "#000", fontSize: "18px", display: "block", padding: ".5rem 1rem"}}>Shop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-3 border-right pc-responsive">
                                <div className="px-4 d-none d-md-block">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <form id="search-vendor">
                                                <input type="search" className="form-control my-3" id="vendor_name" placeholder="Vendor..." />
                                                <input type="submit" className="form-control my-3" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="inbox-users">
                                </div>
                                <hr className="d-block d-lg-none mt-1 mb-0"/>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-9" >
                                <div className="py-2 px-4 border-bottom d-none d-lg-block" id="info-chat-user">
                                </div>

                                <div className="position-relative" >
                                    <div className="chat-messages p-4" id="history-message">
                                    </div>
                                </div>
                                <form id="form-message" encType="multipart/form-data">
                                    <div className="flex-grow-0 py-3 px-4 border-top">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" id="write-msg" placeholder="Type your message" />
                                            <button className="btn btn-primary" type="submit">Send</button>
                                        </div>
                                        <div>
                                            <input type="file" id="file" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
        </main>
    )
}
export default ChatSupportComponent