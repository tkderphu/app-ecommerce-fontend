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
                    456456456
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                >
                    4*
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <div className="col-12 text-truncate h4">
                        Tên: 4
                    </div>
                    <div className="col-12 text-truncate">
                        Mô tả: 4
                    </div>
                    <div className="d-flex justify-content-between flex-lg-wrap mb-1">
                        <p className="text-dark fs-5 fw-bold mb-0">Giá: trt45t</p>
                    </div>
                    <p className="mb-1" style={{ color: "red", fontWeight: "bold" }}>Đã bán: </p>
                    <div className="d-flex justify-content-between flex-lg-wrap mb-4">
                        <a

                            style={{ cursor: "pointer" }}
                            className="fs-5 fw-bold mb-0">rerere</a>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-6">
                            <a href="/products/${product.id}/${product.language.nameVn}"
                                className="btn border border-secondary rounded-pill px-3 text-primary w-100">
                                Mua</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProuctCardComponent