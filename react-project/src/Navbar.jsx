import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">   

      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Worker & Labor Hiring
        </NavLink>
        <div className="menu-icon">
          
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-Link">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink   
 to="/about" className="navbar-Link">
              About Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-Link">
              Contact Us
            </NavLink>
          </li>   

          <li className="navbar-item">
            <NavLink to="/login" className="navbar-Link">
              Login
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/signup" className="navbar-Link">
              Sign   
 Up
            </NavLink>
          </li>   

        </ul>
      </div>
    </nav>
  );
};




export default Navbar;