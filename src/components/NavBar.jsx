import {Link} from "react-router-dom"
import "../css/Navbar.css"
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App(Use VPN to open this page if movies doesn't load due to connected network)</Link>
        </div>
        <div className="navbar-links">
            <Link to="/React-Movie-Project/" className="nav-link">Home</Link>
            <Link to="/React-Movie-Project/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar