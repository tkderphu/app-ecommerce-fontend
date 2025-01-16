import { count } from "console"
import { type } from "os"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Pair } from "../../../common/common"
import ModalComponent from "../../../component/ModalComponent"
import ToastComponent from "../../../component/ToastComponent"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import { CartCreateReqVO } from "../../trade/record/record.req.vo"
import cartService from "../../trade/service/cart.service"
import ProuctCardComponent from "../component/product.card"
import { AppProductSkuRespVO, AppProductSpuDetailsRespVO } from "../record/record.response"
import spuService from "../service/spu.service"
import "./ShopDetails.css"

function ShopDetailsComponent() {
    const [countProduct, setCountProduct] = useState<number>(1)
    const [productDetail, setProductDetail] = useState<AppProductSpuDetailsRespVO>()
    const [sku, setSku] = useState<AppProductSkuRespVO | undefined>()
    const { id } = useParams(); 
    useEffect(() => {
        
        spuService.getDetailProductSpu(id).then(res => {
            if (res.data.code === 200) {

                setProductDetail(res.data.data)
            } else {
                alert("Lỗi service: " + res.data.message)
            }
        }).catch(err => {
            console.error("Server died")
            console.error(err)
        })
    }, [])

    const addToCart = () => {
        let sumId: number = 0

        productDetail?.properties?.map(pair => {
            const name: string = "sku-property-" + pair.key?.id
            document.getElementsByName(name).forEach(element => {
                //@ts-ignore
                //@ts-ignore
                const checked: boolean = element.checked
                //@ts-ignore
                const value = element.value
                if (checked) {
                    sumId += Number.parseInt(value)
                }
            })
        })
        const sku = getSku(sumId)
        if (sku) {

        } else {
            alert("product is not exists")
        }
    }



    const getSku = (sumIdOfPropertyValue: number) => {
        return productDetail?.skus?.filter(pair => {
            return pair.key === sumIdOfPropertyValue
        })?.at(0)
    }

    const checkWhetherPropertyIsMatch = () => {

    }


    const buy = () => {

    }

    return (
        <div>
            <HeaderComponent />
            <div className="container-fluid">
                <div className="container py-4">
                    <div className="row g-4 mb-5">
                        <div className="row g-4">
                            <div className="d-flex">
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
                                    {(
                                        <div className="d-flex justify-content-around align-items-center mb-2">
                                            <div><b>Discount</b>: <span style={{ color: "red" }}>55%</span></div>
                                            <div className="d-flex flex-column align-items-end">
                                                <div><b>From: </b><span style={{ color: "red" }}>22-5-2024</span></div>
                                                <div><b>To: </b><span style={{ color: "red" }}>27-5-2024</span></div>
                                            </div>
                                        </div>
                                    )}

                                    <h4 className="fw-bold mb-3">{productDetail?.name}</h4>
                                    <p className="mb-3">Category: {productDetail?.category?.name}</p>
                                    <h5 className="fw-bold mb-3">{productDetail?.minPrice?.toLocaleString() + " - " + productDetail?.maxPrice?.toLocaleString()}</h5>
                                    {productDetail?.properties?.map(pair => {
                                        return (
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div ><b>{pair.key?.name}</b></div>
                                                <div className="d-flex col-10 flex-wrap">
                                                    {pair?.value?.map(value => {
                                                        return (
                                                            <div className="custom-control custom-radio mb-3"

                                                                style={{ marginLeft: "20px" }}>
                                                                <input type="radio" id={"customRadio3" + value.id}
                                                                    onClick={() => {
                                                                        let sumId: number = 0
                                                                        productDetail?.properties?.map(pair => {
                                                                            const name: string = "sku-property-" + pair.key?.id
                                                                            document.getElementsByName(name).forEach(element => {
                                                                                //@ts-ignore
                                                                                //@ts-ignore
                                                                                const checked: boolean = element.checked
                                                                                //@ts-ignore
                                                                                const value = element.value
                                                                                if (checked) {
                                                                                    sumId += Number.parseInt(value)
                                                                                }
                                                                            })
                                                                        })
                                                                        const res: Pair<number, AppProductSkuRespVO> | undefined = getSku(sumId)
                                                                        console.log("sku: ", res)
                                                                         //@ts-ignore
                                                                         setSku(res?.value)
                                                                    }}
                                                                    value={value.id}
                                                                    name={"sku-property-" + pair.key?.id} className="custom-control-input" />
                                                                <label className="custom-control-label" htmlFor={"customRadio3" + value.id}>
                                                                    <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="Thumbnail" className="thumbnail" />
                                                                    {value.value}
                                                                </label>

                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="mb-4 d-flex align-items-center justify-content-around" style={{ width: "100px" }}>
                                        <button
                                            onClick={() => {
                                                if (countProduct - 1 > 0) {
                                                    setCountProduct(countProduct - 1)
                                                }
                                            }}
                                            className="btn btn-sm btn-minus rounded-circle bg-light border" >
                                            -
                                        </button>
                                        <div>{countProduct}</div>
                                        <button
                                            onClick={() => {
                                                setCountProduct(countProduct + 1)
                                            }}
                                            className="btn btn-sm btn-plus rounded-circle bg-light border">
                                            +
                                        </button>
                                    </div>
                                    {!sku && <div className="text-start mb-3"><b>Số lượng sản phẩm còn lại:</b> <span style={{ color: "red" }}>{0}</span></div>}
                                    {sku && <div className="text-start mb-3"><b>Số lượng sản phẩm còn lại:</b> <span style={{ color: "red" }}>{sku?.inStock}</span></div>}
                                    <div className="d-flex justify-content-around flex-wrap">
                                        <a href="javascript:(0)"
                                            onClick={() => {
                                                if(sku) {
                                                    const cartItemReq: CartCreateReqVO = {
                                                        productSkuId: sku.id,
                                                        quantity: countProduct
                                                    }
                                                    cartService.addItemIntoCart(cartItemReq).then(res => {
                                                        if(res.data.code != 200) {
                                                           alert(res.data.message)
                                                        } else {
                                                            console.log(res.data)
                                                        }
                                                    }).catch(err => {
                                                        alert("Lỗi hệ thống")
                                                        console.error(err)
                                                    })
                                                } else {
                                                    alert("Sản phẩm đã hết")
                                                }
                                            }}  
                                            className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                            <i className="fa fa-shopping-bag me-2 text-primary">
                                            </i>Thêm vào giỏ hàng</a>

                                        <a href="javascript:(0)" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                            <i className="fa fa-shopping-bag me-2 text-primary">
                                            </i> Mua hàng</a>
                                            
                                    </div>
                                </div>
                            </div>
                            <div>
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Người bán hàng</button>
                                    </div>
                                    <div className="tab-content">
                                        <div className="d-flex align-items-center">
                                            <div className="col-5 d-flex align-items-center">
                                                <img src={productDetail?.seller?.shopImage} className="border rounded-circle" style={{ marginRight: "20px" }} width={"100px"} />
                                                <div className="d-flex flex-column">
                                                    <div className="mb-3"><span style={{ color: "black", fontSize: "22px" }}>{productDetail?.seller?.shopName}</span></div>
                                                    <div className="d-flex w-100">
                                                        <a href="javascript:(0)" className="border" style={{ fontSize: "20px", paddingRight: "30px", paddingLeft: "30px" }}>Chat</a>
                                                        <a href="javascript:(0)" className="border" style={{ fontSize: "20px", paddingRight: "30px", paddingLeft: "30px", marginLeft: "20px" }}> See shop</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap align-items-center mt-3">
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Đánh giá</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.numComment}</div>
                                                </div>
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Sản phẩm</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.numProduct}</div>
                                                </div>
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Tham gia</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.joined}</div>
                                                </div>
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Người theo dõi</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.numFollow}</div>
                                                </div>
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Tỷ lệ phản hồi</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.replyPercent}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>

                            </div>
                            <div className="col-lg-12">
                                <nav>
                                    <div className="nav nav-tabs mb-3">
                                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                            id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                            aria-controls="nav-about" aria-selected="true">Mô tả</button>
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
                                            aria-controls="nav-about" aria-selected="true">Bình luận</button>
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