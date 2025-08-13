import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
      { title: "Jobs", path: "/jobs" }
  ];

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <ul>
        {navItems.map(({ title, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/contact', {replace: true})} > Get Started </button>

    </div>
  );
};

export default Navbar;
