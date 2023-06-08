import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import NavbarOptions from '../NavbarOptions'
import logo from "/assets/shared/logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import NavMobile from './NavMobile';

const Navbar = () => {
  const [showmobileNav, setShowMobileNav] = useState(false)
  return (
    <>
    {showmobileNav && <NavMobile setShowMobileNav={setShowMobileNav} showmobileNav={showmobileNav}/>}
    <nav className='flex items-center justify-between h-20  ml-7 '>
      <div className="nav-logo flex items-center justify-between">
        <img src={logo} alt="logo" />
        <hr className=' lg:w-2/6 md:absolute z-40 left-32 top-18 border border-gray-500'/>
        <div className='absolute right-6 lg:hidden'>
          <MenuIcon onClick={() => setShowMobileNav(!showmobileNav)}/>
        </div>
      </div>
      <div className="nav-links mr-0">
        <ul className=' hidden md:hidden backdrop-blur-xl bg-black/30 lg:flex gap-10 items-center h-20 font-barlow text-xl w-full p-5'>
          <li className='hover:border-b-2 p-2'>
            <Link to="/">
            <NavbarOptions title="Home" index="00"/>
            </Link>
          </li>
          <li className='hover:border-b-2 p-5'>
            <Link to="/destination">
            <NavbarOptions title="Destination" index="01"/>
            </Link>
          </li>
          <li className='hover:border-b-2 p-5'>
            <Link to="/crew">
            <NavbarOptions title="Crew" index="02"/>
            </Link>
          </li>
          <li className='hover:border-b-2 p-5'>
            <Link to="/technology">
            <NavbarOptions title="Technology" index="03"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar