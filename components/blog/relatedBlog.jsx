import React from 'react'
import Image from 'next/image'
import SectionTitle from './common/common'
import related from '../../data/relatedblog'
const RelatedBlog = () => {
  return (
    <div className='bg-blue-light7/20 my-10 py-15'>
        <div className='px-15 mb-8'>
            <SectionTitle title='Reading blog list' titleClassName='text-xl font-bold text-black/80' showSeeAll />
        </div>
        <div className='px-20 flex justify-between items-center'>
          {related.map((item,index) => (
            <div key={index} className="gap-0 ">
            <div className=' w-140 h-160 bg-white px-5 py-5 rounded-2xl '>
              <div className='relative w-130 h-80  rounded-2xl'>
                <Image src={item.image} 
                alt='course image'
                fill
                className='object-cover object-center rounded-2xl'
                />
              </div>
              <div className='text-black/80 font-medium text-lg w-120 tracking-wide pt-2'>{item.title}</div>
              <div className='flex items-center gap-5 pt-10'>
                <div className='relative w-10 h-10'>
                  <Image src="/girl.png"
                  alt='profile' 
                  fill
                  className='object-cover object-top rounded-full'/>
                </div>
                <p>Lina</p>
              </div>
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RelatedBlog;
