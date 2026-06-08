import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero flex justify-between items-center px-20' >
      <div className='ml-10 -mt-70 '>
        <h1 className='text-4xl w-110 font-semibold text-white'><span className="text-[#F88C3D]">Studying</span> Online is now much easier</h1>
        <br />
        <p className='text-sm w-80 text-white'>TOTC is an interesting platform that will teach you in more an interactive way</p>
        <br />
        <div className='flex w-87 justify-between'>
          <button className='bg-white/30
            text-sm
            flex
            text-white 
            items-center
            justify-center
            w-30
            py-2
            hover:bg-white
            hover:text-black
            rounded-full'>Join For Free
          </button>
          <div className='rounded-full flex items-center justify-center h-13 w-13 bg-white'>
            <div className='  border-l-25 border-l-[#23BDEE] border-t-13 border-t-transparent border-b-13 ml-1 border-b-transparent'></div>
          </div>
            <p className='text-sm pt-4 text-[#252641]'>Watch how it works</p>
        </div>
          
      </div>
      <div className='relative'>
        <Image src="/girl.png" 
        alt="Student"
        width={544} 
        height={892}
        className=' mt-10 mr-20' />
        <div className='absolute flex  top-55 right-110 justify-between items-center rounded-xl w-50 h-15 bg-white/80'> 
          <div className='bg-[#23BDEE] ml-4 h-8 w-8 mx-2 rounded-lg'>
          </div>
          <p className='text-sm font-thin mr-4 text-[#545567]'> <span className=' font-medium text-[#595959]'>250k </span><br/> Assisted Student</p>
        </div>
        <div className='absolute flex  top-90 left-92 justify-between items-center rounded-xl w-70 h-15 bg-white/80'>
          <div className='bg-[#F88C3D] ml-4 h-8 w-8 mx-2 rounded-lg'>
          </div>
          <p className='text-sm font-thin mr-4'><span className=' font-medium text-[#595959]'> Congratulations </span> <br/> Your admission completed</p>
        </div>
        <div className='absolute top-115 right-90 w-[300px] bg-white/80 rounded-2xl p-5'>
  
          <div className='flex items-center gap-3'>
            <Image
              src="/user-profile.png"
              alt="profile"
              width={45}
              height={45}
              className='rounded-full'
            />
            <div>
              <h3 className='font-medium whitespace-nowrap text-[#595959]'>User Experience Class</h3>
              <p className='text-sm text-gray-500'> Today at 12.00 PM</p>
            </div>
          </div>
          <button className='mt-5 
          bg-[#D8587E] 
          w-30 
          h-10 
          rounded-full 
          text-white 
          mx-auto 
          flex 
          items-center 
          justify-center'>
            Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
