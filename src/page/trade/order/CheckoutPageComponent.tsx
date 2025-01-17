import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import ModalComponent from "../../../component/ModalComponent"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import { SellerRespVO } from "../../authen/record/record.resp.vo"
import { CartItemRespVO } from "../record/record.resp.vo"

interface Value {
    seller?: SellerRespVO
    items?: Array<CartItemRespVO>
}
function CheckoutPageComponent() {

    const mapItem: Map<SellerRespVO, Array<CartItemRespVO>> = useLocation().state
    const list = new Array<Value>()
    mapItem.forEach((value, key) => {
        list.push({
            "seller": key,
            "items": value
        })
    })

    useEffect(() => {
        
    }, [])

    const totalPrice = () => {
        let sum = 0
        mapItem.forEach(value => {
            value.forEach(res => {
                //@ts-ignore
                sum += res.totalPrice
            })
        })
        return sum
    }

    const totalPriceOfSeller = (seller: any) => {
        let sum = 0
        mapItem.get(seller)?.forEach(res => {
            //@ts-ignore
            sum += res.totalPrice
        })
        return sum
    }

    return (
        <div>
            <HeaderComponent />
            <div className="container-fluid">
                <div className="container">
                    <h1 className="mb-4">Order details</h1>
                    <form action="#">
                        <div className="row g-5">
                            <div className="col-md-12 col-lg-6 col-xl-7">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">First Name<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">Last Name<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">Country<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <div className="form-item w-100">
                                            <label className="form-label my-3">City<sup>*</sup></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label className="form-label my-3">Details Address<sup>*</sup></label>
                                    <input type="text" className="form-control" placeholder="House Number Street Name" />
                                </div>
                                
                                <div className="form-item">
                                    <label className="form-label my-3">Phone Number<sup>*</sup></label>
                                    <input type="tel" className="form-control" />
                                </div>
                                <div className="form-item">
                                    <label className="form-label my-3">Email Address<sup>*</sup></label>
                                    <input type="email" className="form-control" />
                                </div>

                                <hr />

                                <div className="form-item">
                                    <textarea name="text" className="form-control" spellCheck={false} cols={30} rows={11} placeholder="Oreder Notes (Optional)"></textarea>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-12">
                                        <div className="h-100 rounded">
                                            <iframe className="rounded w-100"
                                                style={{ height: "400px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-5">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Products</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list.map(res => {
                                                return <Fragment>
                                                    <tr>
                                                        <td colSpan={2}><div className="border-secondary rounded-pill btn">
                                                            {res.seller?.shopName}</div></td>
                                                        <td colSpan={3}>
                                                            <div>
                                                                <button className="btn border-secondary rounded-pill text-primary"
                                                                    onClick={() => {

                                                                    }}
                                                                    data-toggle="modal" data-target={"#coupon" + res.seller?.id}
                                                                    type="button">Chọn phiếu giảm giá</button>
                                                                <ModalComponent
                                                                    body={
                                                                        <table className="table table-bordered">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">Id</th>
                                                                                    <th scope="col">Code</th>
                                                                                    <th scope="col">Description</th>
                                                                                    <th scope="col">Limit min price</th>
                                                                                    <th scope="col">Limit max price</th>

                                                                                    <th scope="col">Start</th>
                                                                                    <th scope="col">End</th>
                                                                                    <th scope="col">Number of used</th>
                                                                                    <th scope="col">Apply</th>
                                                                                    
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                
                                                                            </tbody>
                                                                        </table>
                                                                    }
                                                                    id={"coupon" + res.seller?.id}

                                                                    title={"Tất cả phiếu giảm giá của người bán hàng: " + res.seller?.shopName + ""}
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    {res.items?.map((item) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row" className="align-middle">
                                                                    <img src={item.product?.image} className="img-fluid me-5 rounded-circle" style={{ width: "80px", height: "80px" }} alt="" />
                                                                </th>
                                                                <td className="align-middle">
                                                                    <p className="mb-0 mt-4">{item.product?.name} - {item.product?.properties}</p>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <p className="mb-0 mt-4">{item.product?.price?.toLocaleString()}</p>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <p className="mb-0 mt-4">{item.quantity?.toLocaleString()}</p>

                                                                </td >
                                                                <td className="align-middle">
                                                                    <p className="mb-0 mt-4">{item.totalPrice?.toLocaleString()}</p>
                                                                </td>

                                                            </tr>
                                                        )
                                                    })}
                                                    <tr>
                                                        <th scope="row">
                                                        </th>
                                                        <td className="py-5"></td>
                                                        <td className="py-5"></td>
                                                        <td className="py-5">
                                                            <p className="mb-0 text-dark py-3">Subtotal</p>
                                                        </td>
                                                        <td className="py-5">
                                                            <div className="py-3 border-bottom border-top">
                                                                <p className="mb-0 text-dark">{totalPriceOfSeller(res.seller).toLocaleString()}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </Fragment>
                                            })}
                                            {/* <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5"></td>
                                                <td className="py-5"></td>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark py-3">Subtotal</p>
                                                </td>
                                                <td className="py-5">
                                                    <div className="py-3 border-bottom border-top">
                                                        <p className="mb-0 text-dark">{totalPrice().toLocaleString()}</p>
                                                    </div>
                                                </td>
                                            </tr> */}
                                            {/* <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark py-4">Shipping</p>
                                                </td>
                                                <td colSpan={3} className="py-5">
                                                    <div className="form-check text-start">
                                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" value="Shipping" />
                                                        <label className="form-check-label" htmlFor="Shipping-1">Free Shipping</label>
                                                    </div>
                                                    <div className="form-check text-start">
                                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" value="Shipping" />
                                                        <label className="form-check-label" htmlFor="Shipping-2">Flat rate: $15.00</label>
                                                    </div>
                                                    <div className="form-check text-start">
                                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" value="Shipping" />
                                                        <label className="form-check-label" htmlFor="Shipping-3">Local Pickup: $8.00</label>
                                                    </div>
                                                </td>
                                            </tr> */}
                                            <tr>
                                                <th scope="row">
                                                </th>
                                                <td className="py-5">
                                                    <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                                                </td>
                                                <td className="py-5"></td>
                                                <td className="py-5"></td>
                                                <td className="py-5">
                                                    <div className="py-3 border-bottom border-top">
                                                        <p className="mb-0 text-dark">{totalPrice().toLocaleString()}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                    <div className="col-12">
                                        <div className="form-check text-start my-3">
                                            <input type="radio" 
                                            className="form-check-input bg-primary border-0" 
                                            id="Transfer-1" 
                                            name="payment" value="Transfer" />
                                            <label className="form-check-label" htmlFor="Transfer-1">Direct Bank Transfer</label>
                                        </div>
                                      
                                    </div>
                                </div>
                             
                                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                    <div className="col-12">
                                        <div className="form-check text-start my-3">
                                            <input type="radio" className="form-check-input bg-primary border-0" id="Delivery-1" name="payment" value="Delivery" />
                                            <label className="form-check-label" htmlFor="Delivery-1">Cash On Delivery</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                    <div className="col-12">
                                        <div className="form-check text-start my-3">
                                            <input type="radio" className="form-check-input bg-primary border-0" 
                                            id="Paypal-1" name="APP" value="Paypal" />
                                            <label className="form-check-label" htmlFor="Paypal-1">In-app payments</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                    <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default CheckoutPageComponent
