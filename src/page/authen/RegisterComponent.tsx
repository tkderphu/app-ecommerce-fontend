import HeaderComponent from "../../layout/HeaderComponent"

function RegisterPageComponent() {
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
                        name="password"
                        id="floatingPassword" placeholder="Username" />
                </div>
                <div className=" mb-4">
                    <input type="password"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="Password" />
                </div>
                <div className=" mb-4">
                    <input type="text"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="FirstName" />
                </div>
                <div className="   mb-4">
                    <input type="text"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="LastName" />
                </div>
                <div className=" mb-4">
                    <input type="email"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="Email" />
                </div>
                <div className=" mb-4">
                    <input type="tel"
                        className="form-control"
                        name="password"
                        id="floatingPassword" placeholder="PhoneNumber" />
                </div>
                <div className=" mb-2">
                   <select className="form-select">
                    <option value={"MALE"}>Male</option>
                    <option value={"FEMALE"}>Female</option>
                   </select>
                </div>
                <div className="mb-2">
                     <a href="javascript:(0)">Login</a>
                </div>
                <div className="btn btn-primary w-100">
                    Submit
                </div>
            </div>
        </div>
    )
}
export default RegisterPageComponent