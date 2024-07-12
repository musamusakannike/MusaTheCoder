import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    fetch('NavLinks.json')
      .then((res) => res.json())
      .then((data) => setNavLinks(data));
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-secondary-green" id="nav">
      <div className="container-fluid mx-lg-5 mx-md-4">
        <a
          className="color-red fw-bold lead"
          style={{ textDecoration: 'none' }}
          href="#"
        >
          <span className="text-green">Musa Musa K</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} justify-content-end navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((navLink, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link text-green" aria-current="page" to={navLink.destination}>
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
