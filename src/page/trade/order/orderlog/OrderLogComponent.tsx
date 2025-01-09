interface Props {
    orderId: number
}
import './OrderLogComponent.css'
function OrderLogComponent(props: Props) {
    return (
        <div >
            <ul id="progressbar" className='d-sm-flex justify-content-between'>
                <li className="step0 active text-center" id="step1">PLACED</li>
                <li className="step0 active text-center" id="step2">SHIPPED</li>
    
                <li className="step0  text-muted text-center" id="step3">DELIVERED</li>
            </ul>
            

            
        </div>
    )
}
export default OrderLogComponent