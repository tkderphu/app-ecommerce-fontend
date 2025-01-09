import { useState } from "react"
import ButtonModalComponent from "../../../component/ButtonModalComponent"
import { AppOrderSimpleRespVO } from "../record/record.resp.vo"
import OrderDetailsComponent from "./orderdetails/OrderDetailsComponent"
import OrderLogComponent from "./orderlog/OrderLogComponent"
interface Props {
    order?: Array<AppOrderSimpleRespVO>
}
function OrderSimpleComponent(props: Props) {
    return (
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <th scope="row">1</th>
                    <th scope="row">1</th>
                    <th >
                    <ButtonModalComponent
                            body={<div>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Details</button>
                                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Logs</button>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <OrderDetailsComponent
                                            orderId={22}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <OrderLogComponent orderId={22}/>
                                    </div>
                                </div>
                            </div>}
                            title={"Order details"}
                            nameButton="See details order"
                            id={"order-details"}
                        />
                    </th>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    )
}
export default OrderSimpleComponent