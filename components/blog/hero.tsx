import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='bg-blue-light7/20 flex justify-between my-5 py-15 px-25'>
    <div className='w-120 space-y-4'>
      <p className='text-lg text-black font-light'>By Themadbrains in <span className='text-blue-cyan2 font-semibold'> inspiration</span></p>
      <h2 className='text-blue-dark font-semibold text-3xl leading-normal'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
      <p className='text-base tracking-wide font-noraml text-grey-text leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <button className='bg-blue-cyan2 text-xs text-white font-normal py-3 px-7 text-center rounded-md'>Start learning now</button>
      </div>
      <div>
        <div className="relative h-80 w-140">
            <Image src="/rect32.png"
            alt="rect 32"
            fill
            className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-blue-dark9/10 rounded-2xl"></div>
        </div>
</div>
    </div>
  )
}

export default Hero
