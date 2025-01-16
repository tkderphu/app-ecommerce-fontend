function ForgetPageComponent() {
    return (
        <div className="container-fluid">
            <div className="text-center">
                <h4>Forget password</h4>
            </div>
            <div className="form-floating mb-2">
                <input type="email"
                    className="form-control"
                    name="password"
                    id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="mb-2">
                <a href="/login">Login</a>
            </div>
            <div className="btn btn-primary w-100">
                Submit
            </div>
        </div>
    )
}
export default ForgetPageComponent