import { Link } from "react-router-dom"
import { AppProductSpuSimpleRespVO } from "../record/record.response"

interface Props {
    productSpu?: AppProductSpuSimpleRespVO
}
function ProuctCardComponent(props: Props) {
    return (
        <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img
                        className="img-fluid-redesign w-100 rounded-top"
                        alt=""
                    />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                >
                    4*
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <div className="col-12 text-truncate h4">
                        {props.productSpu?.name}
                    </div>
                    <p className="text-dark fs-5 fw-bold mb-0">{props.productSpu?.minPrice?.toLocaleString()} - {props.productSpu?.maxPrice?.toLocaleString()}</p>
                    <div className="d-flex justify-content-around mb-2">
                        <p className="mb-1" style={{ color: "red", fontWeight: "bold" }}>From: {props.productSpu?.sold}</p>
                        <p className="mb-1" style={{ color: "red", fontWeight: "bold" }}>Sold: {props.productSpu?.sold}</p>

                    </div>
                    <a href={"/product/" + props.productSpu?.id} className="btn border border-secondary rounded-pill px-3 text-primary w-50">
                        Mua
                    </a>

                </div>
            </div>
        </div>
    )
}
export default ProuctCardComponent