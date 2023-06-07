import React, { useState } from 'react'
import Navbar from './Navbar'
import data from '../data.json';
const Crew = () => {

  const [value, setValue] = useState(0)
  const crewNames = ["Douglas Hurley","Mark Shuttleworth", "Victor Glover", "Anousheh Ansari"]

  const selectedCrew = data.crew.find((crew) => (
    crew.name.toLowerCase() === crewNames[value].toLowerCase()
  ))
  return (
    <div className='md:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-[url(/assets/crew/background-crew-tablet.jpg)] bg-cover h-screen text-white bg-no-repeat overflow-scroll relative'>
      <div className='mt-5'>
      <Navbar/>
      <h1 className='text-center md:text-left md:ml-20 font-barlow text-xl tracking-widest uppercase'><span className=' text-gray-400'>02 </span>MEET YOUR CREW</h1>
    </div>
    <div className='md:grid md:grid-cols-2 flex flex-col-reverse gap-7'>
    <div className="left text-center md:text-start md:w-800 mt-20 flex md:flex-col flex-col-reverse h-fit md:ml-20">
      <div className=' h-52'>
        <h1 className=' font-barlowcondensed tracking-widest mb-5 text-gray-400 text-xl'>{selectedCrew.role.toUpperCase()}</h1>
      <h2 className=' font-bellefair tracking-widest text-4xl mb-5'>{selectedCrew.name.toUpperCase()}</h2>
      <p className=' font-barlow text-base text-gray-400 tracking-wide'>{selectedCrew.bio}</p>
      </div>
      <div className='flex gap-2 items-center justify-center md:justify-start mb-5 md:mt-20'>
        {
          crewNames.map((crew, index) => (
            <div className={`${index === value && " bg-white"} h-4 w-4 bg-gray-400 hover:bg-white rounded-full`} onClick={() => setValue(index)} key={index}></div>
          ))
        }
      </div>
    </div>
    <div className="right md:grid place-items-center flex items-center justify-center ">
      <img src={selectedCrew.images.webp} className=' w-80 h-80 object-contain md:h-96 md:w-96' alt="" />
    </div>
    </div>
    </div>
    
  )
}

export default Crew