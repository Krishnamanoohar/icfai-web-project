import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { width } from '@mui/system';
import ifheLogo from '../images/ifhe-logojpg.jpg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown,setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () =>{
    if(window.innerWidth < 960){
      setDropdown(false);
    }else{
      setDropdown(true);
    }
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={ifheLogo}alt="no img" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Explore-IFHE 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/programs'
                className='nav-links'
                onClick={closeMobileMenu}
                
              >
               Programs <i className='fas fa-caret-down'/>
              </Link>
              {dropdown && <Dropdown/>}
            </li>
            <li className='nav-item'>
              <Link
                to='/placements'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Placements
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/campuslife'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Campus Life
              </Link>
            </li>

            <li>
              <Link
                to='/student-login-btn'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Online Fee Payment
              </Link>
            </li>
            
          </ul>
          {button  && <Button buttonStyle='btn--outline' >Student Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;