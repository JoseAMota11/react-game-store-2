import React from 'react';
import Link from '../Router/Link';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__logo">Game Store</li>
        <li className="navbar-list__search">
          <input
            className="list__search-input"
            placeholder="E.g. Minecraft"
            type="search"
          />
        </li>
        <li className="navbar-list__login">
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
