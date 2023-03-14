import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Router/Link';
import { fetchSomething } from '../../classes/fetch';
import { KEY, URL } from '../../helpers/constants';

function Navbar({ setData, setTotalCount, isUser, setIsUser }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async function getGameBySearch() {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const req = {
        key: KEY,
        search,
      };

      const gameResult = await fetchSomething.get(URL, req, options);
      setTotalCount(gameResult.count);
      setData(gameResult.results);
    })();
  }, [search]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(() => value);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list__logo">Game Store</li>
        <li className="navbar-list__search">
          <input
            className="list__search-input"
            placeholder="E.g. Minecraft"
            type="search"
            onChange={handleChange}
          />
        </li>
        <li className="navbar-list__login">
          {!isUser ? (
            <Link to="/login" className="link">
              Login
            </Link>
          ) : (
            <button className="logout" type="button">
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  setData: PropTypes.func.isRequired,
  setTotalCount: PropTypes.func.isRequired,
  isUser: PropTypes.bool.isRequired,
  setIsUser: PropTypes.func.isRequired,
};

export default Navbar;
