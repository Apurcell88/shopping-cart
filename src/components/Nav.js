import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <Link to='/' style={{textDecoration: 'none'}}>
          <li className='nav-directory'>Home</li>
        </Link>
        <Link to='/shop' style={{textDecoration: 'none'}}>
          <li className='nav-directory'>Shop</li>
        </Link>
        <Link to='/cart' style={{textDecoration: 'none'}}>
          <li className='nav-directory'>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}
 
export default Nav;