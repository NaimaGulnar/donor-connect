import { Link } from "react-router-dom"
import welcomeImg from "../../../assets/img11.jpg"
import { Typewriter } from 'react-simple-typewriter'

function WelcomeSection() {
    return (
        <div className="welcome-section-main-container">
            <div className="welcome-content">
                <h1>Welcome to
                    <br />
                    <span><Typewriter words={['Donor Connect']} loop={false} cursor={true} cursorBlinking={true} typeSpeed={100} /></span>
                </h1>
                <p className="welcome-para1">Where A Simple Act Of Kindness Can Save Lives!</p>
                {/* <p className="welcome-para2">Join Us In Our Mission To Bridge The Gap Between Patients In Need And Generous Donors.</p> */}
                <div className="welcome-section-btns">
                    <button className="welcome-section-register-btn"><Link to="/register">REGISTER</Link></button>
                    <button className="welcome-section-login-btn"> <Link to="/login">LOGIN  </Link>
                    </button>
                </div>
            </div>
            <div className="welcome-img">
                <img src={welcomeImg} height={400} width={400} />
            </div>
        </div>
    )
}

export default WelcomeSection
