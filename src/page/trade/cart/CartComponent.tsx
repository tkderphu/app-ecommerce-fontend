import { useState } from "react"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"

function CartPageComponent() {


    return (
        <div>
            <HeaderComponent />
            <div className="container-fluid fruite" style={{ paddingTop: "100px" }}>
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}><div className="border-secondary rounded-pill btn">
                                        Seller</div></td>
                                    <td colSpan={2}>
                                        <div>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginRight: "20px",width:"25px", height:"25px" }}/>
                                                <label className="form-check-label" htmlFor="flexCheckChecked" style={{marginTop:"5px", fontWeight:"bold"}}>
                                                 Choose all
                                                </label>
                                        </div>
                                    </td>
                                    <td colSpan={2}>
                                        <div>
                                            <input type="text" className="border-0 border-bottom border-top rounded" placeholder="Coupon Code" style={{ marginRight: "15px" }} />
                                            <button className="btn border-secondary rounded-pill text-primary" type="button">Apply Coupon</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                   <div className="btn">
                                     <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{width:"25px", height:"25px"}}/>
                                   </div>
                                    </td>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: "80px", height: "80px" }} alt="" />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Big Banana</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: "100px" }}>
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
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4" >
                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                <div className="btn">
                                     <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{width:"25px", height:"25px"}}/>
                                   </div>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: "80px", height: "80px" }} alt="" />
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">Big Banana</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: "100px" }}>
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
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">2.99 $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4" >
                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-6">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Subtotal:</h5>
                                        <p className="mb-0">$96.00</p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">Nummber Of Coupon:</h5>
                                        <p className="mb-0">456</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div className="">
                                            <p className="mb-0">Flat rate: $3.00</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-end">Shipping to Ukraine.</p>
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">$99.00</p>
                                </div>
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
export default CartPageComponent