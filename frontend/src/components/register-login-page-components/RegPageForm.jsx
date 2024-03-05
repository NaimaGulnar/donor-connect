import { Link } from "react-router-dom"

export default function RegPageForm() {
    return (
        <div className="register-page-form-container">
            <h1 className="register-page-heading">CREATE NEW ACCOUNT</h1>
            <form className="register-form">
                <label>Full Name</label>
                <br />
                <input type="text" name="fullname" placeholder="Enter your full name" />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="email" placeholder="Enter your email address" />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder="Enter a password" />
                <br />
                <button type="submit" className="register-btn">Create Account</button>
            </form>
            <p className="already-acc">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    )
}
