import Image from "next/image"
import Features from "../data/features"
const OurFeatures = () => {
  return (
    <div className='my-10'>
      <h1 className='lg:text-2xl text-center text-lg text-blue-dark font-bold'>Our <span className='text-blue-cyan'>Features</span></h1>
      <br/>
      <p className='text-base text-grey-text font-normal text-center '>This very extraordinary feature, can make learning activities more efficient</p>
      <div className='px-30 relative pt-30 pb-10 flex gap-40'>
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
                flex justify-evenly 
                items-center 
                top-38 left-2 
                text-white 
                rounded-sm z-10 
                bg-white-light1/90 
                text-black text-[7px] 
                text-center
                w-30 h-5">
                  <Image src="/logo1.png"
                    alt="logo"
                    width={10}
                    height={10}
                    className=''
                  />
                 <p className=" flex items-center"> <span className=" bg-blue-light py-0.5 px-1 rounded-sm">Instructor</span> Eveny Howard</p>
                </div>
              </div>
          </div>
          <div className="absolute top-10 left-80">
            <div className="relative w-30 h-30 overflow-hidden rounded-lg shadow-xl/30">
              <Image 
              src="/image 7.png"
              alt="teacher"
              fill
              className=" object-cover"
              />
            </div>
          </div>
          <div className="absolute top-3 left-120">
            <div className="relative  w-38 h-38  overflow-hidden rounded-lg shadow-xl/30">
              <Image 
              src="/image 8.png"
              alt="teacher"
              fill
              className=" object-cover"
              />
            </div>
          </div>
          <div className="absolute top-45 left-80">
            <div className="relative  w-30 h-30 overflow-hidden rounded-lg shadow-xl/30">
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
            <div className="relative w-45 h-45 items-center overflow-hidden rounded-lg shadow-xl/30">
              <Image 
              src="/image 10.png"
              alt="teacher"
              fill      
              className=" object-cover"
              />
            </div>
          </div>
          <div className="top-35 left-65 absolute">
            <Image src="/button.png" 
            alt="button"
            width={120}
            height={100}
            className="w-28 h-170"
            />
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
        <div className='absolute bottom-5 z-0 left-135 w-50 h-50 rounded-full bg-blue-dark1'></div>
        <div className='absolute z-0 bottom-8 left-130 w-6 h-6 rounded-full bg-pink-dark1'></div>
        </div>
        <div className="leading-loose mt-10">
          <h3 className="text-blue-dark font-semibold leading-normal w-110 text-3xl">A 
            <span className="text-blue-cyan"> user interface</span> designed <br/>for the classroom</h3>
            <br/>

          <div className="flex flex-col gap-8">
            {Features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-white2 w-13 h-13 shadow-lg flex items-center justify-center rounded-full shrink-0">
                  <Image
                    src={feature.img}
                    alt="feature icon"
                    width={20}
                    height={20}
                    className="pt-1"
                  />
                </div>

                <p className="text-grey-text text-base w-80 leading-8">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* next section  */}
      <div className="px-40 py-20 flex justify-between">
        <div className="flex-cols pt-40 mr-20">
          <h2 className="text-blue-dark leading-normal text-3xl font-semibold"><span className="text-blue-cyan"> Tools 
            </span> For Teachers<br/> And Learners </h2>
            <br/>
            <p className="text-grey-text text-base w-100 leading-7 text-justify">Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.</p>
        </div>
        <div className="relative mr-10">
          <Image src="/girl.png"
          alt="student"
          width={380}
          height={500}
          className="relative z-10"
          />
          <div className='absolute top-20 right-19  z-5 w-50 h-50 rounded-full bg-pink-light2'></div>
          <div className='absolute bottom-23 -left-25  z-5 w-5 h-5 rounded-full bg-pink-light2'></div>
          <div className='absolute top-10 right-15  z-5 w-5 h-5 rounded-full bg-green-light3'></div>
          <div className='absolute bottom-7 -right-10  z-5 w-5 h-5 rounded-full bg-purple-light1'></div>
          <Image
            src="/logo 2.png"
            alt="logo"
            width={150}
            height={150}
            className="absolute
            top-20
            -left-12 
            z-20"
          />
          <Image
            src="/logo3.png"
            alt="logo"
            width={130}
            height={130}
            className="absolute
            top-40
            -right-20 
            z-20"
          />
          <Image src="/dots.png" 
          alt="dots"
          width={900}
          height={500}
          className="absolute scale-125 top-35"
          />
        </div>
      </div>
    </div>
  )
}

export default OurFeatures
