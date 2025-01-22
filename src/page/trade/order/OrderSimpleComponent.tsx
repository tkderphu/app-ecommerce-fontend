import { url } from "inspector"
import { Fragment, useEffect, useState } from "react"
import ButtonModalComponent from "../../../component/ButtonModalComponent"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import { OrderPaymentReqVO } from "../../finance/record/record.req.vo"
import paymentService from "../../finance/service/payment.service"
import { AppOrderSimpleRespVO } from "../record/record.resp.vo"
import orderService from "../service/order.service"
import OrderDetailsComponent from "./OrderDetailsComponent"
import OrderLogComponent from "./log/OrderLogComponent"
interface Props {
    order?: Array<AppOrderSimpleRespVO>
}
function OrderSimpleComponent(props: Props) {
    const [orders, setOrders] = useState<Array<AppOrderSimpleRespVO>>()
    useEffect(() => {
        orderService.getMyListOrder().then(res => {
            if (res.data.code === 200) {
                setOrders(res.data.data)
            } else {
                alert("Lỗi service[Lấy OrderSimple]")
            }
        }).catch(err => {
            alert("Lỗi hệ thống[OrderSimple]")
            console.error("Lỗi hệ thống: ", err)
        })
    }, [])
    const paymentOrder = (paymentMode?: string, orderId?: number) => {
        const orderPaymentReq: OrderPaymentReqVO = {
            orderId: orderId,
            chanelType: paymentMode === "APP" ? 'APP' : 'VNPAY',
            content: "Thanh toán đơn hàng với id đơn hàng là: " + orderId
        }
        console.log(orderPaymentReq)
        paymentService.payOrder(orderPaymentReq).then(res => {
            if (res.data.code === 200) {
                const response: any = res.data.data
                if ((typeof response) === "string") {
                    const elementA: HTMLAnchorElement = document.createElement("a")
                    elementA.href = response
                    elementA.target = "_blank"
                    elementA.click()
                } else {
                    location.href = "/my-wallet"
                }
            } else {
                alert("Lỗi service[Payment Order]: " + res.data.message)

            }
        }).catch(err => {
            alert("Lỗi hệ thống[Payment Order]")
            console.error("[ERRORR PAYMENT ORDER]", err)
        })
    }
    return (
        <Fragment>
            <HeaderComponent />
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Products</th>
                        <th scope="col">Total Products</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Combination Shop</th>
                        <th scope="col">Address Details</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Payment Mode</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">See Details</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map(order => {
                        return <tr>
                            <th scope="row">{order.id}</th>
                            <td dangerouslySetInnerHTML={{ __html: order.products }}></td>
                            <td>{order.totalProduct}</td>
                            <td>{order.createdDate}</td>
                            <th scope="row">{order.combinationShop ? "True" : "False"}</th>
                            <td>{order.addressDetails}</td>
                            <td>{order.totalPrice?.toLocaleString()}</td>
                            <td>
                                {order.paymentMode}
                                {order.paymentMode != "RECEIPT" && order.paymentStatus?.key === "PROCESSING" && <div className="btn btn-primary" onClick={() => {
                                    paymentOrder(order.paymentMode, order.id)
                                }}>Payment</div>}
                            </td>
                            <th scope="row">{order.paymentStatus?.key === "SUCCESS" ? <b className="text-success">{order.paymentStatus.value}</b> : order.paymentStatus?.value}</th>
                            <th scope="row">{order.orderStatus?.value?.key}</th>
                            <th >
                                <ButtonModalComponent
                                    body={<div>
                                        <nav>
                                            <div className="nav nav-tabs" id={"nav-tab-" + order.id} role="tablist">
                                                <a className="nav-item nav-link active" id={"nav-order-tab-"+ order.id} data-toggle="tab" href={"#nav-order-" + order.id} role="tab" aria-controls={"nav-order-" + order.id} aria-selected="true">Đơn hàng</a>
                                                <a className="nav-item nav-link" id={"nav-delivery-tab-" +order.id} data-toggle="tab" href={"#nav-delivery-" + order.id} role="tab" aria-controls={"nav-delivery-" + order.id} aria-selected="false">Chi tiết vận chuyển</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id={"nav-order-" + order.id} role="tabpanel" aria-labelledby={"nav-order-tab-"+ order.id}>
                                                <OrderDetailsComponent
                                                    orderId={order.id}
                                                />

                                            </div>
                                            <div className="tab-pane fade mt-4" id={"nav-delivery-" + order.id} role="tabpanel" aria-labelledby={"nav-delivery-tab-" +order.id}> 
                                                <OrderLogComponent orderId={order.id} orderStatus = {order.orderStatus} />
                                            </div>
                                        </div>

                                    </div>}
                                    title={"Order details"}
                                    nameButton="See details order"
                                    id={"order-details-" + order.id}
                                />
                            </th>
                        </tr>
                    })}
                </tbody>
            </table>
            <FooterComponent />
        </Fragment>
    )
}
export default OrderSimpleComponent