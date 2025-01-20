interface Props {
    orderId: number
}
function OrderDetailsComponent(props: Props) {
    return (
        <div className="container-fluid my-5 d-sm-flex justify-content-center">
            <div className="card px-2">
                <div className="card-header bg-white">
                    <div className="row justify-content-between">
                        <div className="col">
                            <p className="text-muted"> Order ID  <span className="font-weight-bold text-dark">1222528743</span></p>
                            <p className="text-muted"> Place On <span className="font-weight-bold text-dark">12,March 2019</span> </p></div>
                        <div className="flex-col my-auto">
                            <h6 className="ml-auto mr-3">
                                <a href="#">View Details</a>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="media flex-column flex-sm-row">
                        <div className="media-body ">
                            <h5 className="bold">Blade High Heels Sandals</h5>
                            <p className="text-muted"> Qt: 1 Pair</p>
                            <h4 className="mt-3 mb-4 bold"> <span className="mt-5">&#x20B9;</span> 1,500 <span className="small text-muted"> via (COD) </span></h4>
                            <p className="text-muted">Tracking Status on: <span className="Today">11:30pm, Today</span></p>
                            <button type="button" className="btn  btn-outline-primary d-flex">Reached Hub, Delhi</button>
                        </div><img className="align-self-center img-fluid" src="https://i.imgur.com/bOcHdBa.jpg" width="180 " height="180"/>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col">
                        <ul id="progressbar" >
                            <li className="step0 active " id="step1">PLACED</li>
                            <li className="step0 active text-center" id="step2">SHIPPED</li>
                            <li className="step0  text-muted text-right" id="step3">DELIVERED</li>
                        </ul>
                    </div>
                </div>
                <div className="card-footer  bg-white px-sm-3 pt-sm-4 px-0">
                    <div className="row text-center  ">
                        <div className="col my-auto  border-line "><h5 >Track</h5></div>
                        <div className="col  my-auto  border-line "><h5>Cancel</h5></div>
                        <div className="col my-auto   border-line "><h5>Pre-pay</h5></div>
                        <div className="col  my-auto mx-0 px-0 "><img className="img-fluid cursor-pointer" src="https://img.icons8.com/ios/50/000000/menu-2.png" width="30" height="30"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderDetailsComponent