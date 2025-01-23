import { useLocation, useParams } from "react-router-dom"
import FooterComponent from "../../../layout/FooterComponent"
import HeaderComponent from "../../../layout/HeaderComponent"
import OrderDetailsComponent from "./OrderDetailsComponent"

function OrderDetailsPageComponent() {
    const {orderId} = useParams()
    return <div>
        <HeaderComponent/>
        <OrderDetailsComponent
        orderId={orderId}
    />
    <FooterComponent/>
    </div>
}
export default OrderDetailsPageComponent