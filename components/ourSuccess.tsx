import React from 'react'
import Stat from "../data/stats" 
const Oursuccess = () => {
  return (
    <div className='mx-30 my-20' >
        <div className='text-center text-dark-text  mb-15'>
          <h1 className=' justify-center font-bold text-2xl lg:text-3xl'>Our Success</h1> <br/>
          <p className='justify-center text-xs font-normal'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br /> 
          nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 mt-20 text-center'>
               {Stat.map((item, index) => (
        <div key={index}>
          <h3 className="text:2xl lg:text-6xl font-light bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">
            {item.title}
          </h3>
          <p className="mt-2 text-lg font-medium text-[#010514CC]">
            {item.description}
          </p>
        </div>
      ))}
          </div>
    </div>
  )
}

export default Oursuccess
