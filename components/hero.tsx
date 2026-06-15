import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
  <div className='relative'>
      <div className=' flex justify-between flex-col lg:flex-row items-center mt-5'>
        <div className='ml-0 lg:ml-24 px-6 lg:px-0 pb-10 lg:pb-50 text-center lg:text-left'>        
          <h1 className='text-3xl md:text-4xl w-full lg:w-120 max-w-xl font-bold leading-normal text-white'><span className="text-orange-stu">Studying</span> Online is now much easier</h1>
        <br />
        <p className='text-base w-full lg:w-90 max-w-md pt-3 font-light text-white mx-auto lg:mx-0'>TOTC is an interesting platform that will teach you in more an interactive way</p>
        <br />
        <div className='flex flex-wrap gap-4 lg:gap-0 w-full lg:w-95 pt-3 justify-center lg:justify-between items-center'>
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
          <div className='rounded-full flex items-center justify-center h-13 w-13 bg-white '>
             <Image src="/polygon 2.png" 
            alt="play button" 
            width={17}
            height={17}
              className='ml-1.5 mt-0.5'
            />
          </div>
            <p className='text-base mt-4 text-[#252641]'>Watch how it works</p>
        </div>
      </div>
      <div className='relative text-[var(--font-nunito)]'>
        <Image src="/girl.png" 
        alt="Student"
        width={500} 
        height={780}
        className=' h-auto mr-0 lg:mr-50 '/>
        <div className='absolute flex hidden md:flex top-38 -left-10 justify-between items-center rounded-xl w-52 h-18 bg-white/80 '> 
          <div className='bg-blue-d-cyan ml-4 w-9 h-9 items-center justify-center flex mx-2 rounded-lg'>
             <Image src="/calendar 1.png" 
            alt="calender" 
            width={20}
            height={20}
              className='ml-0.5'
            />
          </div>
          <p className='text-sm mr-6 text-grey-light'> <span className='font-medium text-base text-grey-dark'>250k </span><br/> Assisted Student</p>
        </div>
        <div className='hidden md:flex absolute flex top-74 right-23 gap-4 items-center rounded-xl w-68 h-18 bg-white/80'>
          <div className='bg-orange-box ml-3 h-9 w-9 items-center justify-center flex rounded-lg'>
           <Image src="/email.png" 
            alt="mail" 
            width={20}
            height={20}
            className='ml-0.5'
            />
          </div>
          <p className='text-sm text-grey-light'><span className='font-medium text-base text-grey-dark'> Congratulations </span> <br/> Your admission completed</p>
        </div>
        <div className='absolute top-98 -left-6 w-62 h-30 bg-white/80 rounded-xl px-3 pt-3 items-center'>
          <div className='flex items-center gap-2 '>
            <div className='relative'>
            <Image
              src="/user-profile.png"
              alt="profile"
              width={35}
              height={35}
              className='rounded-full'
            />
            <div className='absolute bg-[#2EBB5E] h-4 w-4 rounded-full border border-2 border-white -bottom-1 -right-1'></div>
            </div>
            <div >
              <h3 className='font-medium text-grey-dark'>User Experience Class</h3>
              <p className='text-sm text-grey-light'> Today at 12.00 PM</p>
            </div>
          </div>
          <button className='mt-2
            bg-pink-bold 
            w-36 
            h-10 
            rounded-full 
            text-white 
            mx-auto 
            flex 
            items-center 
            justify-center'>
            Join Now</button>
        </div>
        <div className='hidden md:flex absolute bg-pink-light flex top-28 right-40 justify-between items-center rounded-xl w-12 h-12'>
          <div className='bg-white flex justify-between items-center ml-2 rounded-lg w-8 h-8'>
            <Image src="/logo4.png"
            alt='logo'
            width={20}
            height={20}
            className='flex justify-between items-center ml-1.5'
            />
          </div>
        </div>
      </div>
      </div>
      <br/>
        <div className="absolute -bottom-1 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className='w-full h-[60px] md:h-[100px]'
        >
        <path d="M0,0 Q720,150 1440,0 L1440,200 L0,200 Z" fill="#ffffff"/>
      </svg>
    </div>
    </div>
    
  )
}
export default Hero;
