import Image from "next/image"

const OurFeatures = () => {
  return (
    <div className='my-10'>
      <h1 className='lg:text-2xl text-center text-lg text-blue-dark font-bold'>Our <span className='text-blue-cyan'>Features</span></h1>
      <br/>
      <p className='text-base text-grey-text font-normal text-center '>This very extraordinary feature, can make learning activities more efficient</p>
      <div className='px-30 relative py-30'>
        <div className='absolute top-20 left-40 w-20 h-20 rounded-full bg-green-light'></div>
        <div className='absolute top-20 left-65 w-5 h-5 rounded-full bg-blue-light1'></div>
        <div className='relative w-130 backdrop-blur-xs rounded-t-xl h-8 bg-grey-light2'>
            <div className='absolute w-3 h-3 bg-red-light top-3 left-4 rounded-full'></div>
            <div className='absolute w-3 h-3 bg-yellow-light top-3 left-8 rounded-full'></div>
            <div className='absolute w-3 h-3 bg-green-light2 top-3 left-12 rounded-full'></div>
        </div>
        <div className='relative w-130 backdrop-blur-sm rounded-b-xl h-80 z-10 bg-grey-light1/60'>
        <Image 
        src="/portrait-teacher-giving-online-class 1.png"
        alt="teacher"
        width={200}
        height={200}
        />
        </div>
        <div className='absolute bottom-20 z-0 left-140 w-30 h-30 rounded-full bg-blue-light1'></div>
      </div>
    </div>
  )
}

export default OurFeatures
