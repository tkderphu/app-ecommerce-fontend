import { useState } from "react"
import HeaderComponent from "../../layout/HeaderComponent"
import { UserCreateMemberReqVO } from "../user/record/record.req.vo"
import userService from "../user/service/user.service"

function RegisterPageComponent() {

    const [userMemberCreateReq, setUserMemberCreateReq] = useState<UserCreateMemberReqVO>()

    const onChange = (e: any) => {
        const { name, value } = e.target
        setUserMemberCreateReq((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            {/* <HeaderComponent /> */}
            <div className="container">
                <div className="text-center">
                    <h4>Register account</h4>
                </div>
                <div className=" mb-4">
                    <input type="text"
                        className="form-control"
                        name="username"
                        onChange={onChange}
                        id="floatingPassword" placeholder="Username" />
                </div>
                <div className=" mb-4">
                    <input type="password"
                        className="form-control"
                        name="password"
                        onChange={onChange}
                        id="floatingPassword" placeholder="Password" />
                </div>
                <div className=" mb-4">
                    <input type="text"
                        className="form-control"
                        name="firstName"
                        onChange={onChange}
                        id="floatingPassword" placeholder="FirstName" />
                </div>
                <div className="   mb-4">
                    <input type="text"
                        className="form-control"
                        name="lastName"
                        onChange={onChange}
                        id="floatingPassword" placeholder="LastName" />
                </div>
                <div className=" mb-4">
                    <input type="email"
                        className="form-control"
                        name="email"
                        onChange={onChange}
                        id="floatingPassword" placeholder="Email" />
                </div>
                <div className=" mb-4">
                    <input type="tel"
                        className="form-control"
                        name="phoneNumber"
                        onChange={onChange}
                        id="floatingPassword" placeholder="PhoneNumber" />
                </div>
                <div className=" mb-2 d-flex justify-content-around">
                    <input className="form-check-input" onChange={onChange} type="radio" name="sex" value="MALE" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                    <input className="form-check-input"onChange={onChange}  type="radio" name="sex" value="FEMALE" id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
                <div className="mb-2">
                    <a href="/login">Login</a>
                </div>
                <button className="btn btn-primary w-100" onClick={() => {
                    userService.createUserMember(userMemberCreateReq).then(res => {
                        if(res.data.code === 200) {
                            window.location.href ="/login"
                        } else {
                            alert(res.data.message)
                            console.log(res.data)
                        }
                    }).catch(err => {
                        alert("Lỗi hệ thống")
                        console.error(err)
                    })
                }}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default RegisterPageComponent