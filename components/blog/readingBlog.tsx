import React from 'react'
import Image from 'next/image'
import Reading from '../../data/readingblog'
import SectionTitle from './common/common'
const ReadingBlog = () => {
  return (
    <div className='bg-white my-10'>
      <div className='px-15 mb-4'>
         <SectionTitle title='Reading blog list' titleClassName='text-lg font-bold text-black/80' />
      </div>
      <div className='flex justify-between items-center px-15 '>
        {Reading.map((item, index) => (
           <div key={index} className="gap-0">
            
            <div className="relative w-65 h-63 ">
                <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover rounded-2xl"
                />
                    <div className="absolute inset-0 bg-blue-dark9/10 rounded-2xl"></div>

                <div className="absolute bottom-4 left-7 bg-white/50 text-black/80 text-center font-bold text-lg w-50 px-4 py-2 rounded-lg">
                {item.text}
                </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ReadingBlog
