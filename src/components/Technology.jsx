import React, { useState } from 'react'
import Navbar from './Navbar'
import data from '../data.json';
const Technology = () => {
  const [value, setValue] = useState(0)
  const technologyNames = ["Launch vehicle", "Spaceport", "Space capsule"]
  const selectedTech = data.technology.find((technology) => (
    technology.name.toLowerCase() === technologyNames[value].toLowerCase()
  ))
  // const handleImage =()=>{
  //   const selectedTechImage = ""
  //   if(window.innerWidth < 500){
  //     selectedTechImage = selectedTech.images.landscape
  //   }else{
  //     selectedTechImage = selectedTech.images.portrait
  //   }
  // }
  return (
    <div className='md:bg-[url(/assets/technology/background-technology-desktop.jpg)]  bg-[url(/assets/technology/background-technology-tablet.jpg)] bg-cover h-screen text-white bg-no-repeat overflow-scroll relative'>
    <div className=' mt-5'>
      <Navbar/>
      <h1 className='text-center md:text-left md:ml-20 font-barlow text-xl mb-5 tracking-widest uppercase'><span className=' text-gray-400'>03 </span>Space launch</h1>
    </div>
    <div className='md:grid md:grid-cols-2 flex flex-col-reverse mx-10 place-items-center'>
      <div className="left text-center md:text-start">
        
        <div className='flex md:flex-row gap-5 md:mt-20 md:w-800 flex-col items-center justify-center '>
          <div className='flex md:flex-col gap-5 justify-center items-center mt-5'>
            {technologyNames.map((name, index) => (
              <div key={index} className={`${index === value && "bg-white text-black"} h-16 w-16 bg-transparent rounded-full flex items-center justify-center hover:cursor-pointer border border-gray-500 hover:border-white hover:opacity-70 text-xl font-barlowcondensed`}onClick={() => setValue(index)}>{index + 1}</div>
            ))}
            </div>
            <div>
              <h1 className=' font-barlow mb-5 tracking-wider text-gray-400 text-sm'>THE TERMINOLOGY...</h1>
              <h1 className=' font-bellefair uppercase text-5xl mb-5 tracking-wide'>{selectedTech.name}</h1>
              <p className='font-barlow tracking-normal mb-6 text-gray-400 '>{selectedTech.description}</p>
            </div>
        </div>
      </div>
      <div className="right">
        <div className='grid place-items-center overflow-hidden'>
          <img src={selectedTech.images.portrait} alt="" className=' h-96 w-96 rounded object-contain'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Technology