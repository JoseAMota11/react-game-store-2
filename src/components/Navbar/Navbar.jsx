export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list__btn'>
          <ion-icon name='chevron-back-outline'></ion-icon>
        </li>
        <li className='navbar-list__logo'>Game Store</li>
        <li className='navbar-list__search'>
          <input
            className='list__search-input'
            placeholder='E.g. Minecraft'
            type='search'
          />
        </li>
      </ul>
    </nav>
  );
};
