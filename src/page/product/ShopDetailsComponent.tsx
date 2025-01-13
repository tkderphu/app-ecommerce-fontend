import { useEffect, useState } from "react"
import ModalComponent from "../../component/ModalComponent"
import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"
import ProuctCardComponent from "./component/product.card"
import { AppProductSpuDetailsRespVO } from "./record/record.response"
import spuService from "./service/spu.service"

function ShopDetailsComponent() {

    const [productDetail, setProductDetail] = useState<AppProductSpuDetailsRespVO>()

    useEffect(() => {
        spuService.getDetailProductSpu(1).then(res => {
            if (res.data.code === 200) {
                setProductDetail(res.data.data)
            } else {
                alert("Lỗi service: " + res.data.message)
            }
        }).catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <div>
            <HeaderComponent />
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="border rounded">
                                    <a href="#">
                                        <img src={productDetail?.imageUrl} className="img-fluid rounded" alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex justify-content-around mb-2 flex-wrap">
                                    <p><b>Sold</b>: {productDetail?.sold}</p>
                                    <p><b>Rating</b>: {productDetail?.sold}</p>
                                    <a href="#comment-product"><b>Comments</b>: {productDetail?.sold}</a>
                                    <a href="javascript:(0)"
                                        data-toggle="modal" data-target={"#report-product"}
                                    ><b>Report</b>: {productDetail?.sold}</a>
                                    <ModalComponent body={"Report product"}
                                        title={"Report"} id="report-product" />
                                </div>
                                {productDetail?.discount && (
                                    <div className="d-flex justify-content-around align-items-center mb-2">
                                    <div><b>Discount</b>: <span style={{color:"red"}}>55%</span></div>
                                    <div className="d-flex flex-column align-items-end">
                                        <div><b>From: </b><span style={{color:"red"}}>22-5-2024</span></div>
                                        <div><b>To: </b><span style={{color:"red"}}>27-5-2024</span></div>
                                    </div>
                                </div>
                                )}
                            
                                <h4 className="fw-bold mb-3">{productDetail?.name}</h4>
                                <p className="mb-3">Category: {productDetail?.category?.name}</p>
                                <h5 className="fw-bold mb-3">{productDetail?.minPrice?.toLocaleString() + " - " + productDetail?.maxPrice?.toLocaleString()}</h5>
                                <div className="d-flex mb-4">
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="input-group quantity mb-5" style={{ width: "100px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm text-center border-0" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around flex-wrap">
                                <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary">
                                    </i> Add to cart</a>

                                <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                    <i className="fa fa-shopping-bag me-2 text-primary">
                                    </i> Buy</a>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Description</button>
                                    </div>
                                </nav>
                                <div className="tab-content mb-5">
                                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                        <p>{productDetail?.description}</p>
                                        <div className="px-2">
                                            <div className="row g-4">
                                                <div className="col-6">
                                                    <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Brand</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">{productDetail?.brand?.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Send from</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">{productDetail?.sendFrom}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Quantity</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">5555</p>
                                                        </div>
                                                    </div>
                                                    <div className="row text-center align-items-center justify-content-center py-2">
                                                        <div className="col-6">
                                                            <p className="mb-0">Material</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <p className="mb-0">Chat lieu vai cotton</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                                        <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                            amet diam et eos labore. 3</p>
                                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                                            Clita erat ipsum et lorem et sit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12" id="comment-product">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Reviews</button>
                                    </div>
                                </nav>
                                <div className="d-flex">
                                    <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: "100px", height: "100px" }} alt="" />
                                    <div className="">
                                        <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                        <div className="d-flex justify-content-between">
                                            <h5>Jason Smith</h5>
                                            <div className="d-flex mb-3">
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                            words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex">
                                    <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: "100px", height: "100px" }} alt="" />
                                    <div className="">
                                        <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                        <div className="d-flex justify-content-between">
                                            <h5>Sam Peters</h5>
                                            <div className="d-flex mb-3">
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic
                                            words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="fw-bold mb-0 mb-5">Related products</h1>
            <div className="row g-4 justify-content-center">
                <ProuctCardComponent />
                <ProuctCardComponent />
                <ProuctCardComponent />
                <ProuctCardComponent />
                <ProuctCardComponent />
                <ProuctCardComponent />
            </div>
            <FooterComponent />
        </div>
    )
}
export default ShopDetailsComponent