import { useEffect, useState } from "react"
import { PageResult } from "../../common/common"
import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"
import { WalletRespVO } from "../user/record/record.res.vo"
import { PageTransactionReqVO } from "./record/record.req.vo"
import { TransactionRespVO } from "./record/record.resp.vo"
import transactionService from "./service/transaction.service"
import walletService from "./service/wallet.service"

function WalletComponent() {
    const [wallet, setWallet] = useState<WalletRespVO>()
    const [pageReq, setPageReq] = useState<PageTransactionReqVO>({
        limit: 15,
        page: 1
    })
    const [pageTransaction, setPageTransaction] = useState<PageResult<TransactionRespVO>>()
    useEffect(() => {
        fetchTransaction()
        walletService.getMyWallet().then(res => {
            if (res.data.code === 200) {
                setWallet(res.data.data)
            } else {
                alert("lỗi service[get my wallet]: " + res.data.message)
            }

        }).catch(err => {
            alert('lỗi hệ thống[get my wallet]')
            console.error(err)
        })
    }, [])

    const fetchTransaction = () => {
        transactionService.getPageMyTransaction(pageReq).then(res => {
            if (res.data.code === 200) {
                setPageTransaction(res.data.data)
            } else {
                alert("lỗi service [get my page transaction]: " + res.data.message)
            }
            console.log(res.data)
        }).catch(err => {
            alert("lỗi hệ thống[get my page transaction]")
            console.error("[get my page transaction]:", err)
        })
    }
    return <div>
        <HeaderComponent />
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Lịch sử giao dịch</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-profile" type="button" role="tab"
                    aria-controls="nav-profile" aria-selected="false">Ví của bạn</button>
            </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-7">
                        <div className="form-group row">
                            <label htmlFor="start" className="col-sm-2 col-form-label">Từ ngày</label>
                            <div className="col-sm-5    ">
                                <input type="datetime-local" className="form-control-plaintext" id="start" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="c" className="col-sm-2 col-form-label">Đến ngày</label>
                            <div className="col-sm-5    ">
                                <input type="datetime-local" className="form-control-plaintext" id="start" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary">Truy vấn</button>
                    </div>
                </div>
                <table className="mt-4 table">
                    <thead>
                        <tr>
                            <th scope="col">Mã giao dịch</th>
                            <th scope="col">Ngày giao dịch</th>
                            <th scope="col">Từ người dùng</th>
                            <th scope="col">Đến người dùng</th>
                            <th scope="col">Nội dung thanh toán</th>
                            <th scope="col">Nội dung khi thanh toán lỗi</th>
                            <th scope="col">Số tiền thanh toán</th>
                            <th scope="col">Phương thức thanh toán</th>
                            <th scope="col">Trạng thái giao dịch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageTransaction?.list?.map(transaction => {
                            return <tr>
                                <th scope="row">{transaction.no}</th>
                                <td>{transaction.createdDate}</td>
                                <td>{transaction.fromUsername}</td>
                                <td>{transaction.toUsername}</td>
                                <td>{transaction.transferContent}</td>
                                <td>{transaction.errorMessage}</td>
                                <td>{transaction.amountTransfer?.toLocaleString()}</td>
                                <td>{transaction.paymentMode}</td>
                                <td>{transaction.transactionStatus === "SUCCESS" ? <p className="text-success">Thành công</p> : <p className="text-danger">Thất bại</p>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="d-flex flex-column">
                    <div className="mt-3 d-flex ">
                        <b className="col-5">Số dư</b>
                        <div>{wallet?.amount?.toLocaleString()}</div>
                    </div>
                    <div className="mt-3 d-flex ">
                        <b className="col-5">Loại ví</b>
                        <div>{wallet?.walletType === "USER_MEMBER" ? "Thường" : "VIP"}</div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
}
export default WalletComponent