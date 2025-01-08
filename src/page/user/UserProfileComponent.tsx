import ButtonModalComponent from "../../component/ButtonModalComponent"
import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"

function UserProfileComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className="container bootstrap snippet" style={{paddingTop: "150px"}}>
                <div className="row">
                    <div className="col-sm-10"><h1><span ></span></h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-3">

                        <div className="text-center">
                            <img src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
                                className="avatar img-circle img-thumbnail"
                                alt="avatar" />
                            <img

                                className="avatar img-circle img-thumbnail" />
                            <form method="post" encType="multipart/form-data">
                                <h6>Tải ảnh lên</h6>
                                <input type="file" multiple name="file" className="text-center center-block file-upload mb-4" />
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                        <hr /><br />
                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                            <br/>
                            <ButtonModalComponent
                                body={"test"}
                                id="test"
                                nameButton="Comments"
                                title="Your comments"
                                key={"1"}
                            />
                            <br/>
                            <ButtonModalComponent
                                body={"test"}
                                id="test1"
                                nameButton="Orders"
                                title="Your Orders"
                                key={"2"}
                            />
                            <br/>
                            <ButtonModalComponent
                                body={"test"}
                                id="test5"
                                nameButton="Notifications"
                                title="Your Notifications"
                                key={"3"}
                            />
                            <br/>
                            <ButtonModalComponent
                                body={"test"}
                                id="exampleModal"
                                nameButton="Followers"
                                title="Your Followers"
                                key={"4"}
                            />
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <form className="form" action="##" method="post" id="form-profile">
                                    <div className="form-group mb-3">
                                        <div className="col-xs-6">
                                            <label htmlFor="first_name"><h5>Họ và tên</h5></label>
                                            <input type="text" className="form-control" name="fullName"
                                                id="first_name"
                                                placeholder="first name" title="enter your first name if any." />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="col-xs-6">
                                            <label htmlFor="phone"><h5>Số điện thoại</h5></label>
                                            <input type="text" className="form-control" name="phoneNumber" id="phone"
                                                placeholder="enter phone" title="enter your phone number if any." />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="col-xs-6">
                                            <label htmlFor="email"><h5>Email</h5></label>
                                            <input type="email" className="form-control" name="email" id="email"
                                                placeholder="you@email.com" title="enter your email." />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <div className="col-xs-6">
                                            <label htmlFor="email"><h5>Địa chỉ</h5></label>
                                            <input type="email" className="form-control"
                                                id="location" placeholder="somewhere"
                                                name="address"
                                                title="enter a location" />
                                        </div>
                                    </div>
                                </form>
                                <div className="form-group mb-3">
                                    <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success"
                                            type="submit"><i
                                                className="glyphicon glyphicon-ok-sign"></i> Save
                                        </button>
                                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Đánh giá</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Tên sản phẩm</th>
                                                    <th scope="col">Nội dung</th>
                                                    <th scope="col">Đánh giá</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <th scope="row"><a>w5ewf</a></th>
                                                    <th scope="row">4545</th>
                                                    <th scope="row">4545</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default UserProfileComponent