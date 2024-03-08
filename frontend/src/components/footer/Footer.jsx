import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="contact" className="footer-container">
            <form className="newsletter-container">
                <h3>Subscribe to our Newsletter</h3>
                <input type="text" placeholder="Enter your Email-id" />
                <button>Submit</button>
            </form>
            <div className="footer-content">
                <div className="company-name">
                    <h3>DonorConnect</h3>
                    <p>Save a Life !!</p>
                </div>
                <div className="nav-links-container">
                    <h3>Useful Links</h3>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#about">About</NavLink>
                    <NavLink to="#success-stories">Success Stories</NavLink>
                    <NavLink to="#events">Events</NavLink>
                    <NavLink to="/educational-resources">Educational Resources</NavLink>
                </div>
                <div className="social-links-container">
                    <h3>Social Links</h3>
                    <Link to="mailto:perweenm57@gmail.com" target="_blank"><EmailIcon /></Link>
                    <Link to="https://www.linkedin.com/in/muskanperween/" target="_blank"><LinkedInIcon /></Link>
                    <Link to="https://github.com/Muskan-FATIMA" target="_blank"><GitHubIcon /></Link>
                </div>
            </div>
            <div className="copyright-container">
                <p>&copy; {year} | DonorConnect | All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
