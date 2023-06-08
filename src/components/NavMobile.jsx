import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarOptions from '../NavbarOptions';
import { Close } from '@mui/icons-material';
import 'animate.css';

const NavMobile = ({ setShowMobileNav, showMobileNav }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowMobileNav(showMobileNav);
      setIsClosing(false);
    }, 1000); // Change the delay according to your animation duration
  };

  return (
    <nav
      className={`lg:hidden fixed right-0 z-40 backdrop-blur-xl bg-black/30 h-full w-1/2 top-0 animate__animated ${
        isClosing ? 'animate__slideOutRight' : 'animate__slideInRight'
      }`}
    >
      <div>
        <div className='flex items-center justify-end mr-5 mt-8'>
          <Close onClick={handleClose} fontSize='large' />
        </div>
        <ul className='flex flex-col items-center gap-8 '>
          <li className='list'>
            <Link to='/'>
              <NavbarOptions title='Home' index='00' />
            </Link>
          </li>
          <li className='list'>
            <Link to='/destination'>
              <NavbarOptions title='Destination' index='01' />
            </Link>
          </li>
          <li className='list'>
            <Link to='/crew'>
              <NavbarOptions title='Crew' index='02' />
            </Link>
          </li>
          <li className='list'>
            <Link to='/technology'>
              <NavbarOptions title='Technology' index='03' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMobile;
