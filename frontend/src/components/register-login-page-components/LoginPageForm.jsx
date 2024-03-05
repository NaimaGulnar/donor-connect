import { Link } from "react-router-dom"

export default function LoginPageForm() {
    return (
        <div className="login-page-form-container">
            <h1 className="login-page-heading">LOG IN</h1>
            <form className="login-form">
                <label>Email</label>
                <br />
                <input type="email" name="email" placeholder="Enter your email address" />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder="Enter a password" />
                <br />
                <p className="forgot-password">
                    <Link to="/reset-password">Forgot Password?</Link>
                </p>
                <button type="submit" className="login-btn">Log In</button>
            </form>
            <p className="no-acc">Didn&apos;t have an account yet? <Link to="/register">Register</Link></p>
        </div>
    )
}
