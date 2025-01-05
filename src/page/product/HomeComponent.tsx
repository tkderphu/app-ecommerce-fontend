import { useEffect, useState } from "react";
import { CommonResult, PageResult } from "../../common/common";
import FooterComponent from "../../layout/FooterComponent";
import HeaderComponent from "../../layout/HeaderComponent";
import ProuctCardComponent from "./component/product.card";
import { PageProductSpuReqVO } from "./record/record.request";
import { AppProductSpuSimpleRespVO } from "./record/record.response";
import spuService from "./service/spu.service";
function HomeComponent() {
    const [commonResult, setCommonResult] = useState<CommonResult<PageResult<AppProductSpuSimpleRespVO>>>()

    useEffect(() => {
        let pageSpuReq = new PageProductSpuReqVO()
        pageSpuReq.limit = 15
        pageSpuReq.page = 1
        spuService.getPageProductSpu(pageSpuReq)
            .then((res) => {
                if (res.data.code == 200) {
                    setCommonResult(res.data)
                } else {
                    alert("Xảy ra lỗi service: " + res.data.message)
                }
            }).catch(err => {
                // alert('Server maybe is died')
                console.error("Server maybe is died")
            })
    }, [])


    return <div className="container-fluid">
        <HeaderComponent />
        {/* <!-- Hero Start --> */}
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                        <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search" />
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{ top: "0", right: "25%" }}>Submit Now</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
        {/* <!-- Fruits Shop Start--> */}
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-class text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Các sản phẩm</h1>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div id="products-item" className="row g-4 mb-5">
                                        <ProuctCardComponent key={1} />
                                    </div>
                                    <div className="col-lg-4 text-center w-100">
                                        <a href="/shop" className="btn border border-secondary rounded-pill px-3 text-dark w-50" style={{ fontSize: "20px" }}>Xem thêm...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fruits Shop End--> */}


        <FooterComponent />
    </div>
}
export default HomeComponent


