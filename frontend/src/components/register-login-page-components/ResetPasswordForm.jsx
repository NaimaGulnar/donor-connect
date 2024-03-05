export default function ResetPasswordForm() {
    return (
        <>
            <h1 className="reset-password-heading">RESET PASSWORD</h1>
            <form className="reset-password-form">
                <label>New Password</label>
                <br />
                <input type="password" name="password" placeholder="Enter new password" />
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="password" name="password" placeholder="Re-enter the password" />
                <br />
                <button type="submit" className="reset-password-btn">Reset Password</button>
            </form>
        </>
    )
}
