import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {isHome ? (
          <div className="logo-placeholder" />
        ) : (
          <Link to="/" className="logo">
            Delancey Finney
          </Link>
        )}

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/community">
            Community
          </NavLink>
          <NavLink to="/training">
            Experience
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;