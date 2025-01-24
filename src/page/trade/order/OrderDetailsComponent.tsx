import { Fragment, useEffect, useState } from "react"
import { OrderDetailsReqVO } from "../record/record.req.vo"
import { AppOrderDetailsRespVO } from "../record/record.resp.vo"
import orderService from "../service/order.service"

interface Props {
    orderId: any
}
function OrderDetailsComponent(props: Props) {

    const [orderDetails, setOrderDetails] = useState<AppOrderDetailsRespVO>()
    useEffect(() => {
        orderService.getOrderDetails(props.orderId)
            .then(res => {
                if (res.data.code === 200) {
                    setOrderDetails(res.data.data)
                } else {
                    alert("Lỗi service[get order details]: " + res.data.message)
                }
            }).catch(err => {
                alert("Lỗi hệ thống [get order details]")
                console.error("[get order details]: ", err)
            })
    }, [])

    return (
        <Fragment>
            <div className="d-flex mt-3 flex-wrap justify-content-around">
                <div className="d-flex flex-column align-items-start">
                    <div className="text-mute"><span>Mã đơn hàng: </span>{orderDetails?.id}</div>
                    <div className="text-mute"><span>Ngày đặt hàng: </span>{orderDetails?.createdDate}</div>
                </div>
                <div className="d-flex flex-column align-items-start">
                    <div><span>Tổng giá trị: </span>{orderDetails?.totalPrice?.toLocaleString()}</div>
                    <div><span>Phương thức thanh toán: </span>{orderDetails?.paymentMode}</div>
                </div>
                <div className="d-flex flex-column align-items-start mt-3">
                    <div><span>Trạng thái thanh toán: </span>{orderDetails?.paymentStatus?.value}</div>
                    <div><span>Trạng thái đơn hàng: </span>{orderDetails?.orderStatus?.value?.key}</div>
                </div>

            </div >
            <div className="mt-3">
                Địa chỉ nhận hàng: {orderDetails?.addressDetails}
            </div>
            {orderDetails?.lineItems?.map(lineItem => {
                return <Fragment>
                    <div className="mt-3 btn btn-primary mb-2" onClick={() => {
                        const path = "/shop?seller=" + lineItem.seller?.shopName
                        history.pushState({"sellerId": lineItem.seller?.id}, "", path)
                        location.href = path
                    }}>Người bán: <span  style={{color:"red"}}>{lineItem.seller?.shopName}</span></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Mã sản phẩm</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Loại sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lineItem.items?.map(item => {
                                return <tr >
                                    <th scope="row">{item.id}</th>
                                    <td><a href={"/product/" + item.product.id}>{item.product?.name}</a></td>
                                    <td>{item.product?.properties}</td>
                                    <td>{item.product?.price?.toLocaleString()}</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.quantity * item.product?.price).toLocaleString()}</td>
                                </tr>
                            })}
                            <tr>
                                <td colSpan={5}>Phiếu giảm giá</td>
                                <td>{lineItem.coupon ? "" : "0"}</td>
                            </tr>
                            <tr>
                                <td colSpan={5}>Tổng</td>
                                <td>{lineItem.totalPrice?.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            })}
        </Fragment>
    )
}
export default OrderDetailsComponent