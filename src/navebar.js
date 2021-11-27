import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './images/logo.svg';
import { useGlobalContext } from './context';

const Navebar = () => {
  const { openSidbar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const temBtn = e.target.getBoundingClientRect();
    const center = (temBtn.left + temBtn.right) / 2;
    const bottom = temBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

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
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>

        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navebar;
