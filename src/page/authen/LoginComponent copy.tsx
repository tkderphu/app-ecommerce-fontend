import HeaderComponent from "../../layout/HeaderComponent"

function LoginPageComponent() {
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
                        name="password"
                        id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Username</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="password"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="mb-2 d-flex flex-column">
                     <a href="javascript:(0)" className="mb-2">Register new account</a>
                     <a href="javascript:(0)">Forget password</a>
                </div>
                <div className="btn btn-primary w-100">
                    Submit
                </div>
            </div>
        </div>
    )
}
export default LoginPageComponent