import { useState } from "react"
import HeaderComponent from "../../layout/HeaderComponent"
import { AuthLoginReqVO } from "./record/record.req.vo"
import authService from "./service/auth.service"

function LoginPageComponent() {

    const [loginReq, setLoginReq] = useState<AuthLoginReqVO>()

    const onChange = (e: any) => {
        const { name, value } = e.target

        setLoginReq((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div>
            {/* <HeaderComponent /> */}
            <div className="container">
                <div className="text-center">
                    <h4>Login</h4>
                </div>
                <div className="form-floating mb-4">
                    <input type="text"
                        className="form-control"
                        name="username"
                        onChange={onChange}
                        id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Username</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="password"
                        className="form-control"
                        name="password"
                        onChange={onChange}
                        id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="mb-2 d-flex flex-column">
                    <a href="/register" className="mb-2">Register new account</a>
                    <a href="/forget-password">Forget password</a>
                </div>
                <button className="btn btn-primary w-100" onClick={() => {
                    authService.login(loginReq).then((res) => {
                        if (res.data.code === 200) {
                            localStorage.setItem("jwt", JSON.stringify(res.data.data))
                        } else {
                            alert(res.data.message)
                        }
                    }).catch(err => {
                        alert("Lỗi server")
                        console.error(err)
                    })
                }}>
                    Submit
                </button>
            </div>
        </div>
    )
}
export default LoginPageComponent