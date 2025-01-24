import { useEffect, useState } from "react"
import { CommonResult, mapToObject, PageResult } from "../../common/common"
import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"
import ProuctCardComponent from "./component/product.card"
import { PageProductSpuReqVO } from "./record/record.request"
import { AppProductSpuSimpleRespVO, BrandRespVO, Category } from "./record/record.response"
import brandService from "./service/brand.service"
import categoryService from "./service/category.service"
import spuService from "./service/spu.service"

import "./detail-product/ShopDetails.css"

/**
 * public class PriceDataSearchVO {
    private Integer fromPrice;
    private Integer toPrice;
}
 */
interface PriceDataSearchVO {
    fromPrice?: number
    toPrice?: number
}

function ShopComponent() {
    const [commonResult, setCommonResult] = useState<CommonResult<PageResult<AppProductSpuSimpleRespVO>>>()
    const [commonResultCate, setCommonResultCate] = useState<CommonResult<Array<Category>>>()
    const [commonResultBrand, setCommonResultBrand] = useState<CommonResult<Array<BrandRespVO>>>()
    const [cateCatalog, setCateCatalog] = useState<Array<Category> | undefined>()
    const [condition, setCondition] = useState<Map<string, string>>(new Map<string, string>())
    const [categoryIds, setCategoryIds] = useState<Array<number>>(new Array<number>())
    const [priceDataSearchVO, setPriceDataSearchVO] = useState<PriceDataSearchVO>()
    const [keyword, setKeyword] = useState()
    let pageSpuReq: PageProductSpuReqVO = {
        limit: 30,
        page: 1
    }


    useEffect(() => {
        if (history.state.sellerId) {
            condition.set("seller", history.state.sellerId)
            //@ts-ignore
            pageSpuReq.condition = mapToObject(condition)
        }
        if (history.state.keyword) {
            condition.set("keyword", history.state.keyword)
            //@ts-ignore
            pageSpuReq.condition = mapToObject(condition)
        }
        fetchProduct()
        fetchCategory()
        fetchBrand()
    }, [])


    const fetchBrand = () => {
        brandService.getAll().then(res => {
            if (res.data.code === 200) {
                setCommonResultBrand(res.data)
            }
        }).catch(err => {
            console.log("service died")
        })
    }
    const fetchProduct = () => {
        spuService.getPageProductSpu(pageSpuReq)
            .then((res) => {
                if (res.data.code == 200) {

                    setCommonResult(res.data)
                } else {
                    alert("Xảy ra lỗi service: " + res.data)
                }
                console.log(res.data)
            }).catch(err => {
                // alert('Server maybe is died')
                console.error("Server maybe is died")
            })
    }

    const fetchCategory = () => {
        categoryService.getAll().then(res => {
            if (res.data.code === 200) {
                setCommonResultCate(res.data)
            } else {
                alert("Lỗi service: " + res.data.message)
            }
            console.log(res.data)
        }).catch(err => {
            alert("Server died")
            console.error("Server error: ", err)
        })
    }

    const pagination = () => {
        const pages: Array<any> = new Array<any>()
        //@ts-ignore
        for (let i = 1; i <= commonResult?.data?.totalPage; i++) {
            if (i == commonResult?.data?.currentPage) {
                pages.push(<li className="page-item active"><a className="page-link" href="#">{i}</a></li>)
            } else {
                pages.push(<li className="page-item"><a className="page-link" href="#">{i}</a></li>)
            }
        }
        return (
            <nav aria-label="Page navigation example">
                <ul className="d-flex pagination justify-content-center">
                    <li className={"page-item " + (commonResult?.data?.currentPage == 1 ? "disabled" : "")}><a className="page-link" href="#">Trước</a></li>
                    {pages}
                    <li className={"page-item " + (commonResult?.data?.totalPage == 1 ? "disabled" : "")}><a className="page-link" href="#">Sau</a></li>
                </ul>
            </nav>
        )
    }



    return (
        <div>
            <HeaderComponent />
            {/* <div className="d-flex align-items-center">
                                            <div className="col-5 d-flex align-items-center">
                                                <img src={productDetail?.seller?.shopImage} className="border rounded-circle" style={{ marginRight: "20px" }} width={"100px"} />
                                                <div className="d-flex flex-column">
                                                    <div className="mb-3"><span style={{ color: "black", fontSize: "22px" }}>{productDetail?.seller?.shopName}</span></div>
                                                    <div className="d-flex w-100">
                                                        <a href="javascript:(0)" className="border" style={{ fontSize: "20px", paddingRight: "25px", paddingLeft: "25px" }}>Nhắn tin</a>
                                                        <a href="javascript:(0)"    
                                                        onClick={() => {
                                                            const path = "/shop?seller=" + productDetail?.seller?.shopName
                                                            history.pushState({"sellerId": productDetail?.seller?.id}, "", path)
                                                            window.location.href = path
                                                        }}
                                                        className="border" 
                                                        style={{ fontSize: "20px", paddingRight: "25px", paddingLeft: "25px", marginLeft: "20px" }}
                                                        
                                                        >Xem cửa hàng</a>
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
                                                <div className="d-flex mb-3 col-4 justify-content-between" >
                                                    <div style={{ paddingRight: "", marginRight: "50px", fontSize: "18px" }}>Tỷ lệ hủy đơn</div>
                                                    <div style={{ paddingRight: "30px", fontSize: "17px", color: "red" }}>{productDetail?.seller?.replyPercent}%</div>
                                                </div>
                                            </div>
                                        </div> */}
            <div className="container-fluid" >
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="d-flex">
                                        <input type="search" className="form-control p-3" style={{ marginRight: "10px" }}
                                            placeholder="Tìm kiếm"
                                            name="query"
                                            id="searchProducts"
                                            aria-describedby="search-icon-1"
                                            value={condition.get("keyword")}
                                            onChange={(e: any) => {
                                                condition.set("keyword", e.target.value)
                                                setCondition(new Map<string, string>(condition))
                                            }}
                                        />
                                        <button
                                            id="search-icon-1"
                                            onClick={() => {
                                                const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                                                checkboxes.forEach(checkbox => {
                                                    if (checkbox.checked) {
                                                        categoryIds.push(Number.parseInt(checkbox.value))
                                                    }
                                                })
                                                condition.set("category", JSON.stringify(categoryIds))
                                                condition.set("price", JSON.stringify(priceDataSearchVO))

                                                console.log(JSON.stringify(mapToObject(condition)))
                                                //@ts-ignore
                                                pageSpuReq.condition = mapToObject(condition)
                                                console.log("req: ", pageSpuReq)
                                                fetchProduct()
                                            }}
                                            className="input-group-text p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ cursor: "pointer" }} viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label className="col-3">Sắp xếp: </label>
                                        <select id="sort-product" name="sortType"
                                            className="border-0 form-select-sm bg-light me-3"
                                        >
                                            <option

                                            >
                                                Sản phẩm bán chạy
                                            </option>
                                            <option
                                            >
                                                Giá từ cao đến thấp
                                            </option>
                                            <option
                                            >
                                                Đánh giá từ cao đến thấp
                                            </option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div>
                                                <h6>Thể loại</h6>
                                                <select className="form-select"
                                                    id="categoryId"
                                                    aria-label="Floating label select example"
                                                    name="categoryId"
                                                    onChange={(e: any) => {
                                                        const val = Number.parseInt(e.target.value)
                                                        const newIds = new Array<number>()
                                                        if (e != -1) {
                                                            newIds.push(val)
                                                            const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                                                            checkboxes.forEach((checkbox) => {
                                                                checkbox.checked = false
                                                            })
                                                            setCateCatalog(commonResultCate?.data?.filter((cate) => {
                                                                return cate.categoryParent?.id === val
                                                            }))
                                                        } else {
                                                            setCateCatalog(undefined)
                                                        }
                                                        setCategoryIds(newIds)
                                                    }}

                                                >
                                                    <option value="-1" >Select category</option>
                                                    {commonResultCate?.data?.map(category => {
                                                        return (!category.categoryParent && <option value={category.id}>
                                                            {category.name}
                                                        </option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        {cateCatalog && (
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <h6>Danh mục</h6>
                                                    {cateCatalog.map(category => {
                                                        return (<div className="form-check">
                                                            <input type="checkbox"
                                                                className="form-check-input"
                                                                value={category.id}
                                                                id={"catalog" + category.id}
                                                            />
                                                            <label htmlFor={"catalog" + category.id} className="form-check-label">{category.name}</label>
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-lg-12">
                                            <div className="mb-2">
                                                <h6>Brand</h6>
                                                <select className="form-select"
                                                    id="brandId"
                                                    aria-label="Floating label select example"
                                                    name="categoryId"
                                                    onChange={(e: any) => {
                                                        const val = e.target.value
                                                        condition.set("brand", val)
                                                    }}
                                                >
                                                    <option value="-1" >Select brand</option>
                                                    {commonResultBrand?.data?.map(brand => {
                                                        return <option value={brand.id}>
                                                            {brand.name}
                                                        </option>
                                                    })}
                                                </select>
                                            </div >
                                        </div >
                                        <div className="col-lg-12">
                                            <div className="mb-2">
                                                <h6>Nguồn gốc</h6>
                                                <select className="form-select"
                                                    id="brandId"
                                                    aria-label="Floating label select example"
                                                    name="categoryId"
                                                    onChange={(e: any) => {
                                                        const val = e.target.value
                                                        condition.set("brand", val)
                                                    }}
                                                >
                                                    <option value="-1" >Select brand</option>
                                                    {commonResultBrand?.data?.map(brand => {
                                                        return <option value={brand.id}>
                                                            {brand.name}
                                                        </option>
                                                    })}
                                                </select>
                                            </div >
                                        </div >
                                        <div className="col-lg-12">
                                            <div className="mb-2">
                                                <h6>Trạng thái sản phẩm</h6>
                                                <select className="form-select"
                                                    id="brandId"
                                                    aria-label="Floating label select example"
                                                    name="categoryId"
                                                    onChange={(e: any) => {
                                                        const val = e.target.value
                                                        condition.set("brand", val)
                                                    }}
                                                >
                                                    <option value="-1" >Chọn trạng thái sản phẩm</option>
                                                    <option>Đã sử dụng</option>
                                                    <option>Chưa sử dụng</option>
                                                </select>
                                            </div >
                                        </div >
                                        <div className="col-lg-12">
                                            <h6>Rating</h6>
                                            <div className="mb-2 d-flex flex-wrap">
                                                <div className="custom-control custom-radio mb-2" style={{ marginRight: "5px" }} >
                                                    <input type="radio" id={"customRadio3"}
                                                        name={"sku-property"} className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor={"customRadio3"}>
                                                        Trên 1.0
                                                    </label>

                                                </div>
                                                <div className="custom-control custom-radio mb-2" style={{ marginRight: "5px" }} >
                                                    <input type="radio" id={"customRadio33"}
                                                        name={"sku-property"} className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor={"customRadio33"}>
                                                        Trên 2.0
                                                    </label>

                                                </div>
                                                <div className="custom-control custom-radio mb-2" style={{ marginRight: "5px" }} >
                                                    <input type="radio" id={"customRadio3333"}
                                                        name={"sku-property"} className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor={"customRadio3333"}>
                                                        Trên 3.0
                                                    </label>

                                                </div>
                                                <div className="custom-control custom-radio mb-2" style={{ marginRight: "5px" }} >
                                                    <input type="radio" id={"customRadio34"}
                                                        name={"sku-property"} className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor={"customRadio34"}>
                                                        Trên 4.0
                                                    </label>

                                                </div>

                                            </div >
                                        </div >
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Tìm theo giá</h4>
                                                <div className="mb-2">
                                                    <div className="form-floating mb-3">
                                                        <input type="number"
                                                            className="form-control"
                                                            id="startPrice"
                                                            name="startPrice"
                                                            onChange={(e: any) => {
                                                                setPriceDataSearchVO((prev) => ({
                                                                    ...prev,
                                                                    fromPrice: Number.parseInt(e.target.value),
                                                                }));
                                                            }}
                                                        />
                                                        <label htmlFor="startPrice">Từ</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input type="number"
                                                            className="form-control"
                                                            id="endPrice"
                                                            name="endPrice"
                                                            onChange={(e: any) => {
                                                                setPriceDataSearchVO((prev) => ({
                                                                    ...prev,
                                                                    toPrice: Number.parseInt(e.target.value),
                                                                }));
                                                            }}
                                                        />
                                                        <label htmlFor="endPrice">Đến</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center mb-5" id="products">
                                        {commonResult?.data?.list?.map(spu => {
                                            return <ProuctCardComponent
                                                productSpu={spu}
                                            />
                                        })}
                                    </div>
                                    {pagination()}
                                </div >

                            </div >
                        </div >
                    </div >
                </div >
            </div >
            <FooterComponent />
        </div>
    )
}
export default ShopComponent
