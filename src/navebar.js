import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.svg';
import { useGlobalContext } from './context';

const Navebar = () => {
  const { openSidbar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' />
          <button className='btn toggle-btn' onClick={openSidbar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>products</button>
          </li>
          <li>
            <button className='link-btn'>developers</button>
          </li>
          <li>
            <button className='link-btn'>company</button>
          </li>
        </ul>

        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navebar;
