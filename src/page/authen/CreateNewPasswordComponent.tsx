function CreateNewPasswordPageComponent() {
    return (
        <div className="container" >
            <div className="text-center mb-3">
                <h4>Create new password</h4>
            </div>
            <div className="form-floating mb-4">
                <input type="password"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">New password</label>
            </div>
            <div className="form-floating mb-2">
                <input type="password"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Enter again New password</label>
            </div>
            <div className="mb-2">
                <a href="javascript:(0)">Login</a>
            </div>
            <div className="btn btn-primary w-100">
                Submit
            </div>
        </div>
    )

}
export default CreateNewPasswordPageComponent