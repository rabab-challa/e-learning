import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero flex justify-between items-center px-20' >
      <div className='ml-10 w-[400px]'>
        <h2 className='text-[40px] text-white'>Studying Online is now much easier</h2>
      </div>
      <Image src="/girl.png" 
      alt="Student"
      width={544} 
      height={892}
      className=' mr-20' />
      </div>
  )
}

export default Hero;
