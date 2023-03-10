import { useRef } from 'react';

export const Navbar = () => {
  const refNavbarList = useRef(null);
  const refNavbarHamburger = useRef(null);

  const openMenu = () => {
    refNavbarList.current.classList.toggle('active');
    refNavbarHamburger.current.classList.toggle('active');
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list' ref={refNavbarList}>
        <li className='navbar-list__logo'>Game Store</li>
        <li className='navbar-list__search'>
          <input
            className='list__search-input'
            placeholder='E.g. Minecraft'
            type='search'
          />
        </li>
      </ul>
      <div
        onClick={openMenu}
        className='navbar-hamburger'
        ref={refNavbarHamburger}
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};
