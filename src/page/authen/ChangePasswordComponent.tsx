import FooterComponent from "../../layout/FooterComponent"
import HeaderComponent from "../../layout/HeaderComponent"

function ChangePasswordPageComponent() {
    return (
        <div>
            <HeaderComponent/>
            <div className="container-fluid" style={{paddingTop:"150px"}}>
            <div className="text-center mb-3">
                <h4>Change password</h4>
            </div>
            <div className="form-floating mb-4">
                <input type="password"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Old password</label>
            </div>
            <div className="form-floating mb-4">
                <input type="password"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">new Password</label>
            </div>
            <div className="form-floating mb-4">
                <input type="password"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Enter again new Password</label>
            </div>
            <div className="btn btn-primary w-100">
                Submit
            </div>
        </div>
            <FooterComponent/>
        </div>
    )
}
export default ChangePasswordPageComponent