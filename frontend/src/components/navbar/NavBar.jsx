import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo-new.png";

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header>
            <Link to="/">
                <div className="logo-container">
                    <img className="logo-img" src={logo}  alt="Logo" />
                </div>
            </Link>
            <div className="hamburger-container" onClick={() => setNavOpen(prev => !prev)}>
                {
                    navOpen ? <CloseIcon /> : <MenuIcon />
                }
            </div>
            <nav className="navbar-container">
                <div className={navOpen ? "resp-nav-links" : "nav-links"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#about">About</NavLink>
                    <NavLink to="#success-stories">Success Stories</NavLink>
                    <NavLink to="#events">Events</NavLink>
                    <NavLink to="/educational-resources">Educational Resources</NavLink>
                    <NavLink to="#contact">Contact</NavLink>
                </div>

            </nav>
        </header>
    );
}

export default NavBar;
