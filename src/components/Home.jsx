import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Home = () => {
  return (
    <div className='md:bg-[url(/assets/home/background-home-desktop.jpg)] bg-[url(/assets/home/background-home-tablet.jpg)] bg-cover h-screen text-white overflow-scroll relative'>
      <div className='mt-5'>
        <Navbar />
      </div>
      <div className="grid md:grid-cols-2 grid-col-1 md:gap-10 md:place-items-center md:h-screen text text-center md:text-start">
        <div className="left md:w-4/5 p-5 mb-16">
          <h1 className=' font-barlow-400 md:text-xl mb-5 text-gray-400'>So You Want To Travel To</h1>
          <h1 className=' font-barlowcondensed md:text-9xl text-8xl mb-5'>SPACE</h1>
          <p className='font-barlow-400 text-base text-gray-400'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="right grid place-items-center">
          <Link to="/destination">
          <div className='bg-slate-50 text-xl font-semibold h-48 w-48 md:h-52 md:w-52 rounded-full grid place-items-center text-black font-bellefair uppercase hover:ring hover:ring-offset-60 ring-opacity-70 ring-offset-transparent cursor-pointer mb-5'>
          Explore
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home