import { useEffect, useState } from "react"
import { Pair } from "../../../../common/common"
import { OrderLogRespVO } from "../../record/record.resp.vo"
import orderLogService from "../../service/order.log.service"
import "./OrderLog.css"
interface Props {
    orderId?: number,
    orderStatus?: Pair<string, Pair<string, number>>
}
function OrderLogComponent(props: Props) {

    const [orderLogs, setOrderLogs] = useState<Array<OrderLogRespVO>>()
    useEffect(() => {
        orderLogService.getOrderLogByOrderId(props.orderId)
        .then(res => {
            if(res.data.code === 200) {
                setOrderLogs(res.data.data)
            } else {
                alert("Lỗi service[get order log by orderId]: " + res.data.message)
            }
        }).catch(err => {
            alert("Lỗi hệ thống[get order log by orderId]")
            console.error("[get order log by orderId]: ", err)
        })
    }, [])

    return (
        <div className="container">
            <ul className="nav nav-pills justify-content-center">

                <li className="nav-item">
                    <a className="nav-link active" href="#">Chờ xử lý<i className="bi bi-hourglass-split"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đang xử lý <i className="bi bi-gear"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đang vận chuyển <i className="bi bi-truck"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đã giao hàng <i className="bi bi-check-circle"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Đã bị hủy <i className="bi bi-x-circle"></i></a>
                </li>
            </ul>

            <div className="progress mt-4">
                <div className="progress-bar" role="progressbar"
                    style={{ width: `${props.orderStatus?.value?.value}%` }} aria-valuenow={props.orderStatus?.value?.value} aria-valuemin={0} aria-valuemax={100}>
                    {props.orderStatus?.value?.key}
                </div>
            </div>

            <ul className="timeline mt-4">
                <li className="timeline-item">
                    <div className="timeline-icon"><i className="fas fa-cart-plus"></i></div>
                    <div className="timeline-content">
                        <div className="timeline-date">Date: January 20, 2025 - 10:30 AM</div>
                        <h5>Order Placed</h5>
                        <p>The order has been successfully placed. You will receive a confirmation soon.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-icon"><i className="fas fa-cogs"></i></div>
                    <div className="timeline-content">
                        <div className="timeline-date">Date: January 20, 2025 - 12:00 PM</div>
                        <h5>Order Processed</h5>
                        <p>Your order is being processed by the team and will be prepared for shipment.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-icon"><i className="fas fa-truck"></i></div>
                    <div className="timeline-content">
                        <div className="timeline-date">Date: January 21, 2025 - 9:00 AM</div>
                        <h5>Shipped</h5>
                        <p>Your order has been shipped and is on its way to your delivery address.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-icon"><i className="fas fa-truck-loading"></i></div>
                    <div className="timeline-content">
                        <div className="timeline-date">Date: January 22, 2025 - 8:00 AM</div>
                        <h5>Out for Delivery</h5>
                        <p>The delivery team is on the way to deliver your order. You should expect it soon.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-icon"><i className="fas fa-box-open"></i></div>
                    <div className="timeline-content">
                        <div className="timeline-date">Date: January 22, 2025 - 11:00 AM</div>
                        <h5>Delivered</h5>
                        <p>Your order has been delivered! Thank you for shopping with us.</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}
export default OrderLogComponent