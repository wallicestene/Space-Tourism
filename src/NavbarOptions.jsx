import React from 'react'

const NavbarOptions = ({title, index}) => {
  return (
    <div className='navbarOptions flex gap-2 tracking-wide'>
        <h1>{index}</h1>
        <h1>{title}</h1>
    </div>
  )
}

export default NavbarOptions