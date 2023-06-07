import React, { useState } from 'react'
import Navbar from './Navbar'
import data from '../data.json';
function Destination() {

  const [value, setvalue] = useState(0)
  const destinationName = ["Moon","Titan","Mars", "Europa"]; // Replace with your logic

  // Findind the selected destination from the data
  const selectedDestination = data.destinations.find(
    (destination) => destination.name.toLowerCase() === destinationName[value].toLowerCase()
  );

  return (
    <div className='md:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-[url(/assets/destination/background-destination-tablet.jpg)] bg-cover h-screen text-white bg-no-repeat overflow-scroll relative'>
      <div className='mt-5'>
        <Navbar/>
        <h1 className='text-center md:text-left md:ml-20 font-barlow text-xl tracking-widest uppercase'><span className=' text-gray-400'>01 </span>Pick Your Destination</h1>
      </div>
      <div className='grid md:grid-cols-2 grid-rows-1 gap-7  mx-10 place-items-center h-screen'>
      <div className='left grid place-items-center'>
        {/* Display the selected destination image */}
        <img src={selectedDestination.images.webp} alt={selectedDestination.name} className=' md:w-4/5 object-contain w-4/5 animate-spin-slow'/>
      </div>
      <div className='right md:w-4/5'>
        {/* Display the selected destination information */}
        <div className='flex md:gap-8 gap-3 mb-5 flex-wrap justify-between md:justify-start' >
        {
          destinationName.map((destination, index) => (
          <p 
          className={`${index === value && "border-b-2 opacity-70 "} pb-1 hover:opacity-60 hover:cursor-pointer mb-2 text-base uppercase tracking-wider hover:border-b-2`}
          key={index} 
          onClick={() =>setvalue(index)}>{destination}</p>
          ))}
        </div>
        <h2 className='text-8xl mb-5 font-bellefair font-semibold'>{selectedDestination.name}</h2>
        <p className=' text-base mb-10'>{selectedDestination.description}</p>
        <hr />
        <div className='flex items-center md:justify-between px-5 justify-between flex-wrap gap-6'> 
          <div >
            <h2 className=' font-barlow text-gray-400'>AVG. DISTANCE</h2>
            <p className=' font-bellefair md:text-3xl text-2xl'>{selectedDestination.distance}</p>
          </div>
          <div>
            <h2 className=' font-barlow text-gray-400'>EST. TRAVEL TIME</h2>
            <p className=' font-bellefair md:text-3xl text-2xl'>{selectedDestination.travel}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Destination;
