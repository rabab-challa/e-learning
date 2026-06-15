import Image from "next/image"

const OurFeatures = () => {
  return (
    <div className='my-10'>
      <h1 className='lg:text-2xl text-center text-lg text-blue-dark font-bold'>Our <span className='text-blue-cyan'>Features</span></h1>
      <br/>
      <p className='text-base text-grey-text font-normal text-center '>This very extraordinary feature, can make learning activities more efficient</p>
      <div className='px-30 relative py-30 flex gap-40'>
        <div className="text-[var(--font-nunito)]'">
        <div className='absolute top-18 left-40 w-25 h-25 rounded-full bg-green-light'></div>
        <div className='absolute top-15 left-70 w-6 h-6 rounded-full bg-blue-light1'></div>
        <div className='relative w-145 backdrop-blur-xs rounded-t-xl h-8 bg-grey-light2'>
            <div className='absolute w-3 h-3 bg-red-light top-3 left-4 rounded-full'></div>
            <div className='absolute w-3 h-3 bg-yellow-light top-3 left-8 rounded-full'></div>
            <div className='absolute w-3 h-3 bg-green-light2 top-3 left-12 rounded-full'></div>
        </div>
        <div className='relative  w-145 backdrop-blur-sm rounded-b-xl h-85 z-10 bg-grey-light1/60'>
          <div className="absolute  top-10 left-15">
              <div className="relative  w-45 h-45 overflow-hidden rounded-lg shadow-xl/30">
                <Image 
                src="/portrait-teacher-giving-online-class 1.png"
                alt="teacher"
                fill
                className=" object-cover"
                />
                <div className="absolute 
                flex justify-between 
                items-center 
                 top-40 left-2 
                text-white 
                rounded-sm z-10 
                bg-white-light1/90 
                text-black text-[7px] 
                w-30 h-4">
                  <Image src="/logo1.png"
                    alt="logo"
                    width={10}
                    height={10}
                    className='-mr-2'
                  />
                 <p> <span className=" bg-blue-light rounded-lg">Instructor</span> Eveny Howard</p>
                  </div>
              </div>
          </div>
          <div className="absolute top-10 left-80">
            <div className="relative w-30 h-30 overflow-hidden rounded-lg shadow-lg">
              <Image 
              src="/image 7.png"
              alt="teacher"
              fill
              className=" object-cover"
              />
              <div className="absolute 
                flex justify-between 
                items-center 
                top-40 left-2 
                text-white 
                rounded-sm z-10 
                bg-white-light1/90 
                text-black text-[7px] 
                w-30 h-4">
                  <Image src="/logo1.png"
                    alt="logo"
                    width={10}
                    height={10}
                    className='-mr-2'
                  />
                 <p>Eveny Howard</p>
                  </div>
            </div>
          </div>
          <div className="absolute top-3 left-120">
            <div className="relative  w-38 h-38  overflow-hidden rounded-lg shadow-lg">
              <Image 
              src="/image 8.png"
              alt="teacher"
              fill
              className=" object-cover"
              />
            </div>
          </div>
          <div className="absolute top-45 left-80">
            <div className="relative  w-30 h-30 overflow-hidden rounded-lg shadow-lg">
              <Image 
              src="/image 11.png"
              alt="teacher"
              width={200} 
              height={200}
              className=" object-cover"
              />
            </div>
          </div>
          <div className="absolute top-48 left-117">
            <div className="relative w-45 h-45 items-center  overflow-hidden rounded-lg shadow-lg">
              <Image 
              src="/image 10.png"
              alt="teacher"
              fill      
              className=" object-cover"
              />
            </div>
          </div>
          <div className="bg-white1/80 top-40 left-70 w-18 h-18 shadow-lg flex justify-center items-center rounded-full absolute">
            <div className="bg-white1 w-14 h-14 rounded-full shadow-lg"> </div>
          </div>
          <div className="absolute bottom-11 left-10 flex justify-between items-center gap-5 ">
             <button className="bg-blue-dark2 
             rounded-full 
             text-white 
             shadow-lg
             shadow-blue-dark2/50
             text-center 
             w-27 h-9 
             text-lg 
             font-normal">Present</button>
             <div className="bg-pink-light1 p-1.5 rounded-full inline-block">
              <button
                className="
                  bg-pink-dark2
                  text-white
                  rounded-full
                  w-27
                  h-9
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-lg
                  shadow-sm
                  shadow-pink-dark2
                  font-medium ">
                <Image
                  src="/call.png"
                  alt="Call"
                  width={15}
                  height={15}
                />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-12 z-0 left-135 w-50 h-50 rounded-full bg-blue-dark1'></div>
        <div className='absolute z-0 bottom-18 left-130 w-6 h-6 rounded-full bg-pink-dark1'></div>
        </div>
        <div className="">
          <h3 className="text-blue-dark font-normla w-90 text-2xl">A <span className="text-blue-cyan">user interface</span> designed <br/>for the classroom</h3>
        </div>
      </div>
    </div>
  )
}

export default OurFeatures
