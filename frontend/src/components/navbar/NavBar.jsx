import AnchorLink from "react-anchor-link-smooth-scroll"
// import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <img className="logo-img" src=""/>
            </div>
            <div className="nav-links">
                <AnchorLink href="#home">Home</AnchorLink>
                <AnchorLink href="#about">About</AnchorLink>
                <AnchorLink href="#success-stories">Success Stories</AnchorLink>
                <AnchorLink href="#events">Events</AnchorLink>
                <AnchorLink href="#educational-resources">Educational Resources</AnchorLink>
                <AnchorLink href="#contact">Contact</AnchorLink>
            </div>
            {/* <div className="hamburger-container">
                <MenuIcon/>
            </div> */}
        </nav>
    )
}

export default NavBar

