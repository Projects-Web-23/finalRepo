import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"><h1>Resumeness</h1></Link>
      <div className="links">
        <div></div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>

        <Link to="/Signup">Sign Up</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Built">Print Cv</Link>
        <Link to="/Profile">Profile</Link>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;