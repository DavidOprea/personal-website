import { Link } from "react-router-dom";
import "./global.css";

function NavBar() {
    return (
        <div id="navbar">
            <span id='website-title'>David Oprea's Personal Site</span>
            <Link to={"/"} className="nav-link">Home</Link>
            { /* <Link to={"/about"} className="nav-link">About Me</Link> */ }
            <Link to={"/projects"} className="nav-link">Projects</Link>
            <Link to={"/resume"} className="nav-link">Resume</Link>
        </div>
    );
}

export default NavBar;