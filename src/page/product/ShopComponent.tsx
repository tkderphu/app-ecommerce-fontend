import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"
import ProuctCardComponent from "./component/product.card"

function ShopComponent() {
    return (
        <div>
        <HeaderComponent/>
        <div className="container-fluid fruite" style={{ paddingTop: "100px" }}>
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

                                    />
                                    <button
                                        id="search-icon-1"

                                        className="input-group-text p-3">
                                        <i className="fa fa-search" style={{ cursor: "pointer" }}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-xl-3">
                                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label htmlFor="sort-product">Sắp xếp mặc định:</label>
                                    <select id="sort-product" name="sortType"
                                        className="border-0 form-select-sm bg-light me-3"

                                    >
                                        <option

                                        >
                                            tt
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="mb-2">
                                            <h6>Category</h6>
                                            <select className="form-select"
                                                id="categoryId"
                                                aria-label="Floating label select example"
                                                name="categoryId"

                                            >
                                                <option value="-1" >Select category</option>
                                                <option
                                                    value="{{i}}">34663463
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h6>Catalog</h6>
                                            <div className=" mt-3"

                                            >
                                                <input type="checkbox"
                                                    className="form-check-input size-100 mx-2"
                                                    value="{{childCate.id}}" id="categoryChildId_{{i}}"

                                                />
                                                <label htmlFor="categoryChildId_{{i}}" className="form-check-label">trtrt</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="mb-2">
                                            <h6>Brand</h6>
                                            <select className="form-select"
                                                id="brandId"
                                                aria-label="Floating label select example"
                                                name="categoryId"

                                            >
                                                <option value="-1" >Select brand</option>
                                                <option >5
                                                </option>
                                            </select>
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

                                                    />
                                                    <label htmlFor="startPrice">Từ</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="number"
                                                        className="form-control"
                                                        id="endPrice"
                                                        name="endPrice"
                                                    />
                                                    <label htmlFor="endPrice">Đến</label>
                                                </div>
                                                <button
                                                    className="btn btn-primary">Tìm kiếm
                                                </button>
                                            </div>
                                        </div>
                                    </div >
                                </div >
                            </div >
                            <div className="col-lg-9">
                                <div className="row g-4 justify-content-center" id="products">
                                    <ProuctCardComponent/>
                                    <ProuctCardComponent/>
                                    <ProuctCardComponent/>
                                    <ProuctCardComponent/>
                                    <ProuctCardComponent/>
                                    <ProuctCardComponent/>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </div >
        <FooterComponent/>
        </div>
    )
}
export default ShopComponent
