import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header>
            <nav className="navbar-container">
                <NavLink to="/">
                    <img className="logo-img" src="" alt="Logo" />
                </NavLink>
                <div className={navOpen ? "resp-nav-links" : "nav-links"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#about">About</NavLink>
                    <NavLink to="#success-stories">Success Stories</NavLink>
                    <NavLink to="#events">Events</NavLink>
                    <NavLink to="/educational-resources">Educational Resources</NavLink>
                    <NavLink to="#contact">Contact</NavLink>
                </div>
                <div className="hamburger-container" onClick={() => setNavOpen(prev => !prev)}>
                    {
                        navOpen ? <CloseIcon /> : <MenuIcon />
                    }
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
