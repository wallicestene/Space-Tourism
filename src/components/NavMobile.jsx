import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import NavbarOptions from '../NavbarOptions'
import { Close } from '@mui/icons-material'

const NavMobile = ({setShowMobileNav, showmobileNav}) => {
  return (
    <nav className='lg:hidden fixed right-0 z-40 backdrop-blur-xl bg-black/30 h-full w-1/2 top-0'>
      <div>
        <div className='flex items-center justify-end mr-5 mt-8'>
          <Close onClick={() => setShowMobileNav(!showmobileNav)} fontSize='large'/>
        </div>
        <ul className='flex flex-col items-center gap-8'>
          <li className='list'>
          <Link to="/">
            <NavbarOptions title="Home" index="00"/>
            </Link>
          </li>
          <li className='list'>
          <Link to="/destination">
            <NavbarOptions title="Destination" index="01"/>
            </Link>
          </li>
          <li className='list'>
          <Link to="/crew">
            <NavbarOptions title="Crew" index="02"/>
            </Link>
          </li>
          <li className='list'>
          <Link to="/technology">
            <NavbarOptions title="Technology" index="03"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavMobile