/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo-new.png"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
    const year = new Date().getFullYear();
    return (

        <footer >

            <div id="contact" className="footer-container">
                <div className="company-name foot">
                    <img src={logo1} alt="logo" className="footer-logo" />
                    <p><h2>Donor Connect</h2>
                        Join the life-saving mission.<br />
                        &#129656;.......Donate blood.......&#129656;</p>
                </div>
                <div className="nav-links-container foot">
                    <h2>Links</h2>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="#about">About</NavLink></li>
                        <li> <NavLink to="#success-stories">Success Stories</NavLink></li>
                        <li> <NavLink to="#events">Events</NavLink></li>
                        <li><NavLink to="/educational-resources">Educational Resources</NavLink></li>
                    </ul>
                </div>
                <div className="foot">
                    <h2>Subscribe to our Newsletter</h2>
                    <form className="newsletter-container">
                        <MailOutlineIcon />
                        <input type="email" placeholder="Enter your email-id..." required />
                        <button type="submit"><ArrowForwardIcon /></button>
                    </form>
                    <div className="social-links-container ">
                        <h3>Social Links</h3>
                        <i><Link to="mailto:perweenm57@gmail.com" target="_blank" className="footer-email"><EmailIcon /></Link></i>
                        <Link to="https://www.linkedin.com/in/muskanperween/" target="_blank" className="footer-linkedin"><LinkedInIcon /></Link>
                        <Link to="https://github.com/Muskan-FATIMA" target="_blank" className="footer-github"><GitHubIcon /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright"> Copyright &copy; {year} | DonorConnect | All Rights Reserved.</p>
        </footer >
    )
}

export default Footer
