import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import ButtonModalComponent from "../../../component/ButtonModalComponent"
import ModalComponent from "../../../component/ModalComponent"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import { SellerRespVO } from "../../authen/record/record.resp.vo"
import { FormCreateAddress } from "../../user/AddressComponent"
import { AddressRespVO } from "../../user/record/record.res.vo"
import addressService from "../../user/service/address.service"
import { OrderDetailsReqVO } from "../record/record.req.vo"
import { CartItemRespVO } from "../record/record.resp.vo"
import orderService from "../service/order.service"

interface Value {
    seller?: SellerRespVO
    items?: Array<CartItemRespVO>
}
function CheckoutPageComponent() {
    const [userAddresses, setUserAddresses] = useState<Array<AddressRespVO>>()
    const mapItem: Map<SellerRespVO, Array<CartItemRespVO>> = history.state.itemMap
    const list = new Array<Value>()
    mapItem.forEach((value, key) => {
        list.push({
            "seller": key,
            "items": value
        })
    })

    useEffect(() => {
        addressService.getListAddress().then(res => {
            console.log("address: ", res.data.data)
            setUserAddresses(res.data.data)
        }).catch(err => {
            alert("Lỗi hệ thống")
            console.error(err)
        })
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


    const submitOrder = () => {
        const cartIds: Array<number>  = new Array<number>()
        list.forEach(value => {
            value.items?.forEach(cart => {
                //@ts-ignore
                cartIds.push(cart.id)
            })
        })
        const req : any = {
            addressDetails: userAddresses?.filter(re => re.defaultAddress).at(0)?.fullAddress,
            cartIds: cartIds,
            couponIds: undefined,
            orderPlace: history.state.orderPlace
        }
        let checkWhetherUserSelectMethodPayment = false
        document.querySelectorAll('input[type="radio"][name="payment"]').forEach((e: any) => {
            if(e.checked) {
                checkWhetherUserSelectMethodPayment = true
                req.paymentMode = e.value
                checkWhetherUserSelectMethodPayment = true
            }
        })

        if(checkWhetherUserSelectMethodPayment) {
            console.log("orderReq: ", JSON.stringify(req))
            orderService.createOrder(req).then((res: any) => {
                if(res.data.code === 200) {
                    location.href = "/my-orders"
                } else {
                    alert("Lỗi service tạo đơn hàng: " +  res.data.message)
                    
                }
            }).catch(err => {
                alert("Lỗi hệ thống[Tạo đơn hàng]")
                console.error("Lỗi hệ thống: ", err)
            })
        } else {
            alert("Vui lòng chọn phương thức thanh toán")
        }
    }


    return (
        <div>

            <HeaderComponent />
            <div className="container-fluid">
                <div className="container">
                    <h1 className="mb-4">Order details</h1>
                    <form action="#">
                        <nav>
                            <div className="nav nav-tabs mb-3">
                                <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                    id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                    aria-controls="nav-about" aria-selected="true">Địa chỉ nhận hàng</button>
                            </div>
                            <div className="tab-content">
                                {userAddresses?.length === 0 ? <div className="d-flex justify-content-around">
                                    <h4 style={{ color: "red" }}>Bạn chưa có địa chỉ</h4>
                                    <ButtonModalComponent body={<FormCreateAddress
                                        defaultAddress={true}
                                        func={(address: AddressRespVO) => {
                                            setUserAddresses(new Array<AddressRespVO>(address))
                                        }}
                                    />} id={"form-create-address"} nameButton="Cập nhật địa chỉ" title="Cập nhật địa chỉ" />
                                </div> : (
                                    userAddresses?.map(address => {
                                        if (address.defaultAddress) {
                                            return (<div className="d-flex justify-content-around align-items-center flex-wrap">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div style={{ fontSize: "25px" }}><b>{address.fullName}</b></div>
                                                    <div style={{ fontSize: "25px" }}><b>{address.phoneNumber}</b></div>
                                                </div>
                                                <div style={{ fontSize: "16" }}>{address.fullAddress}</div>
                                                <div>
                                                    <a className="border p-2" style={{ color: "red" }}>Mặc định</a>
                                                </div>
                                                <div>
                                                    <a href="javascript:(0)" data-toggle="modal" data-target={"#address-user"}>Thay đổi</a>
                                                    <ModalComponent
                                                        id={"address-user"}
                                                        title={"Địa chỉ"}
                                                        body={
                                                            <div>
                                                                <nav>
                                                                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Tất cả địa chỉ</button>
                                                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Thêm địa chỉ</button>
                                                                    </div>
                                                                </nav>
                                                                <div className="tab-content" id="nav-tabContent">
                                                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                                        {userAddresses.map(res => {
                                                                            return (
                                                                                <div className="d-flex justify-content-between flex-wrap">
                                                                                    <div className="d-flex flex-column align-items-start">
                                                                                        <div>{res.fullName}</div>
                                                                                        <div>{res.phoneNumber}</div>
                                                                                    </div>
                                                                                    <div>{res.fullAddress}</div>
                                                                                    <div style={{color:"red"}}>{res.defaultAddress ? "Mặc định": ""}</div>
                                                                                    <div>
                                                                                        <button className="btn btn-primary">Cập nhật</button>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                                        <FormCreateAddress
                                                                            defaultAddress={false}
                                                                            func={(address: AddressRespVO) => {
                                                                                userAddresses?.push(address)
                                                                                //@ts-ignore
                                                                                setUserAddresses(new Array<AddressRespVO>(...userAddresses?.map(r => r)))
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        }
                                                    />
                                                </div>
                                            </div>)
                                        } else {
                                            return ""
                                        }
                                    })
                                )}
                            </div>
                        </nav>


                        <nav>
                            <div className="nav nav-tabs mb-3">
                                <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                    id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                    aria-controls="nav-about" aria-selected="true">Sản phẩm</button>
                            </div>
                            <div className="tab-content">
                                <div className="row g-5">
                                    <div className="col-md-12 col-lg-12 col-xl-12">
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
                                                        name="payment" value="BANK" />
                                                    <label className="form-check-label" htmlFor="Transfer-1">Thanh toán qua ngân hàng</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                            <div className="col-12">
                                                <div className="form-check text-start my-3">
                                                    <input type="radio" className="form-check-input bg-primary border-0" id="Delivery-1" name="payment" value="RECEIPT" />
                                                    <label className="form-check-label" htmlFor="Delivery-1">Thanh toán khi nhận hàng</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                            <div className="col-12">
                                                <div className="form-check text-start my-3">
                                                    <input type="radio" className="form-check-input bg-primary border-0"
                                                        id="Paypal-1" name="payment" value="APP" />
                                                    <label className="form-check-label" htmlFor="Paypal-1">Thanh toán bằng tiền trong hệ thống</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                            <button type="button"
                                                onClick={() => {
                                                    //@ts-ignore
                                                    if (userAddresses?.length != 0) {
                                                        submitOrder()
                                                    } else {
                                                        alert("Bạn chưa cập nhật địa chỉ")
                                                    }
                                                }}
                                                className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>


                    </form>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default CheckoutPageComponent
