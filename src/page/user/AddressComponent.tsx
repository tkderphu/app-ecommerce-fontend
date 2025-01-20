import { useState } from "react"
import { AddressRespVO } from "./record/record.res.vo"
import addressService from "./service/address.service"
interface Props {
    defaultAddress: boolean,
    func: any
}

export function FormCreateAddress(props: Props) {
    const [addressCreateReq, setAddressCreateReq] = useState<AddressRespVO>({
        defaultAddress: props.defaultAddress
    })
    const onChange = (e:any) =>  {
        const {name, value} = e.target
        setAddressCreateReq((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return <div className="row g-5">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <div className="form-floating mb-3">
                        <input type="text" onChange={onChange}  className="form-control" 
                        name="fullName"
                        id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Họ và tên</label>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="form-floating mb-3">
                        <input type="tel"  onChange={onChange} name="phoneNumber" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Số điện thoại</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="form-floating mb-3">
                        <input type="text" onChange={onChange}  name="city" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Tỉnh/Thành phố</label>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="form-floating mb-3">
                        <input type="text" onChange={onChange}  name="district" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Quận/Huyện</label>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className="form-floating mb-3">
                        <input type="text"  onChange={onChange} name="commune" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Xã/Phường</label>
                    </div>
                </div>
            </div>
            <div className="form-item">
                <div className="form-floating mb-3">
                    <input type="text" onChange={onChange} name="detailAddress" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Địa chỉ chi tiết</label>
                </div>
            </div>
            <div className="form-item">
                <div className="mb-3 d-flex align-items-center">
                    
                    <input className="form-check-input mx-3 "
                    name="defaultAddress" onChange={onChange}
                     disabled={props?.defaultAddress} checked={props?.defaultAddress} style={{ padding: "12px 12px 12px 12px" }} type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" style={{ fontSize: "19px" }} htmlFor="flexCheckDefault">
                        <b> Mặc định</b>
                    </label>
                </div>
            </div>

            <a href="javascript:(0)" className="btn btn-primary w-100" data-dismiss="modal" onClick={() => {
                addressService.createAddress(addressCreateReq).then((res) => {
                    props.func(res.data)
                }).catch((err) => {
                    alert("Lỗi server")
                    console.error(err)
                })
            }}>Thêm</a>
        </div>
    </div>
}