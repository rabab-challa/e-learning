import React from 'react'
import Image from 'next/image'
import Features from '../data/cloudPage'

const CloudSoft = () => {
  return (
    <div className='text-center py-10'>
        <h2 className='text-xl max-w-7xl mx-auto px-6 justify-center lg:text-2xl font-extrabold text-blue-dark '>All-In-One <span className='text-blue-cyan'>Cloud Software.</span></h2>
        <br/>
        <p className='text-grey-text text-base font-normal'>TOTC is one powerful online software suite that combines all the tools <br></br> needed to run a successful school or office.
        </p>
        <div className='justify-between px-34 grid grid-cols-1 lg:grid-cols-3 mt-28'>
            {Features.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl px-10 py-16 text-center w-80 mx-auto  shadow-[0_-4px_20px_rgba(38,45,118,0.05),0_20px_60px_rgba(38,45,118,0.08)] "
            >
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 shadow-lg w-18 h-18 rounded-full flex items-center justify-center ${item.bg}`}>
                <Image
                    src={item.image}
                    alt={item.alt}
                    width={30}
                    height={30}
                    className="object-contain"
                />
                </div>
              <h3 className="text-xl font-medium pt-5 text-blue-dark whitespace-pre-line leading-tight">
                {item.title}
              </h3>
              <p className="mt-8 text-grey-text text-sm font-normal leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default CloudSoft
