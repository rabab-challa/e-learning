import React from 'react'
import Image from 'next/image'
import Cards from '../data/totcCard'
const WhatIs = () => {
  return (
    <div className='py-10'>
        <div className='text-center text-3xl font-semibold justify-center'>
        <h1 className='text-blue-dark'>What is <span className='text-blue-cyan'>TOTC?</span></h1>
        </div>
        <br/>
        <div className='text-center flex text-sm lg:text-lg font-normal justify-center itmes-center'>
        <p className='text-grey-text leading-loose'>TOTC is a platform that allows educators to create online classes whereby they 
            can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br/>due
             dates; grade results and provide students with feedback all in one place.</p>
        </div>
        <div className=' flex justify-center  gap-20 item-center px-50 my-10 '>
            {Cards.map((item, index) =>(
                 <div 
                 key={index}
                 className='relative w-108 shadow-lg rounded-xl bg-card-grey/50'>
                    <Image src={item.image}
                    alt={item.alt}
                    width={600}
                    height={250}
                    className='rounded-2xl'
                    />
                <div className='absolute inset-0 bg-[#171B41]/30 rounded-xl flex flex-col items-center justify-center  font-semibold text-white'>
                    <h2 className='text-xl -translate-y-9'>{item.title}</h2>
                </div>
                <button
                className={`absolute top-35 left-30 px-6 py-2 h-15 rounded-full text-base text-light text-white ${item.btnClass}`} >
                {item.btn}
                </button>
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default WhatIs
