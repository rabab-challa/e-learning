import Image from "next/image"
import Features from "../data/features"
import gradebookData from "../data/gradeBook"
const OurFeatures = () => {
  return (
    <div className='my-10 '>
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
      {/* next section  */}
      <div className="px-40 py-10 flex justify-between">
        <div className="relative">

          <div className="absolute -top-3 -left-8 w-16 h-16 rounded-full bg-blue-light3"></div>
          <div className="absolute -top-6 left-20 w-4 h-4 rounded-full bg-orange-light1"></div>
          <div className="absolute -bottom-9 -left-3 w-4 h-4 rounded-full bg-green-light1"></div>
          <div className="absolute top-60 -right-12 w-3 h-3  rounded-full bg-pink-light4"></div>
          <div className="relative  bg-white rounded-xl shadow-[0_-4px_30px_rgba(0,0,0,0.06)] p-6 w-85 h-100">

            <div className="inline-flex items-center justify-center px-6 py-1 rounded-full bg-blue-sky text-grey-text2 text-sm font-medium">
              Question 1
            </div>

            <h2 className="mt-4 text-2xl leading-loose font-semibold text-blue-dark3">
              True or false? This play takes place in Italy
            </h2>
            <br/>
              <Image
                src="/image 13.png"
                alt="Italy"
                width={350}
                height={200}
                className="absolute shadow-2xl rounded-xl"
              />
            

            <div className="absolute -bottom-8 -right-20 bg-white shadow-lg rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="relative flex items-center">
              <Image
                src="/sent.png"
                alt="send"
                width={50}
                height={50}
                className="z-10"
              />
              <div className="absolute w-9 h-9 bg-green-light5 top-1.5 left-1.5 z-0 rounded-full"></div>
              <div className="z-10">
                <p className="text-green-light4 font-semibold  text-base">
                  Your answer was <br/>
                  sent successfully
                </p>
                <div className="absolute w-5 h-5 bg-green-light5 top-7 -right-2 -z-10 rounded-full"></div>
                </div>
              </div>

            </div>
            <div className="absolute -top-8 -right-4">
              <Image
                src="/cross.png"
                alt="cross"
                width={120}
                height={120}
              />
            </div>

            <div className="absolute top-1.5 -right-15">
              <Image
                src="/tick.png"
                alt="tick"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 ">
          <h3 className="text-3xl text-blue-dark font-semibold leading-normal ">Assessments, <br/>
            <span className="text-blue-cyan">Quizzes</span>, Tests</h3><br/>
            <p className="text-base text-grey-text font-normal leading-loose">Easily launch live assignments, quizzes, and<br/> tests.
            Student results are automatically entered in<br/> the online gradebook.</p>
          </div>
      </div>
      {/* next section  */}
      <div className="pl-30 pr-50 py-30 flex gap-20 justify-between">
        <div className="mt-20">
          <h3 className="text-2xl text-blue-cyan font-semibold leading-normal " >Class Management<br/> 
            <span className="text-blue-dark">Tools for Educators</span></h3><br/>
            <p className="text-base text-grey-text font-normal leading-loose w-110">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. 
              With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
        </div>
        <div className="relative w-120 h-85 Z-20 overflow-visible bg-white rounded-2xl shadow-lg">

          <div className="h-12 bg-blue-sky3 flex items-center justify-center text-white text-sm rounded-t-xl font-medium">
            GradeBook
          </div>

          <div className="absolute -top-5 -left-3 w-18 h-18 bg-white/60 rounded-full shadow-md flex items-center justify-center">
            <div className="w-13 h-13 bg-white rounded-full shadow-md flex items-center justify-center">
            <Image
              src="/star.png"
              alt="star"
              width={44}
              height={44}
            />
            </div>
          </div>
          <div className="absolute -bottom-7 z-0 -left-7 w-42 h-34 bg-blue-sky4  rounded-xl"></div>
          <div className="absolute top-4 -right-8 w-14 h-14 bg-white/30 rounded-full shadow-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
            <Image
              src="/book 1.png"
              alt="book"
              width={24}
              height={24}
            /></div>
          </div>
          <div className="absolute -top-9 right-0 w-8 h-8 rounded-full bg-blue-sky2"></div>
          <div className="absolute -top-3 -right-8 w-4 h-4 rounded-full bg-blue-sky2"></div>
            <div className="relative ">
              {gradebookData.map((item) => (
                <div
                  key={item.score}
                  className={`absolute ${item.top} ${
                    item.align === "left" ? item.left : item.right
                  } flex items-center`}
                >
                  {item.align === "left" ? (
                    <>
                      <div className={`${item.lineWidth} h-5 ${item.lineBg}`}></div>

                      <Image
                        src={item.image}
                        alt=""
                        width={60}
                        height={60}
                        className="-ml-2 rounded-full"
                      />

                      <div className={`${item.scoreBg} ${item.scoreText} px-4 py-1 rounded-full`}>
                        {item.score}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`${item.scoreBg} ${item.scoreText} px-4 py-1 rounded-full `}>
                        {item.score}
                      </div>

                      <Image
                        src={item.image}
                        alt=""
                        width={60}
                        height={60}
                        className="rounded-full"
                      />

                      <div className={`${item.lineWidth} h-5  ${item.lineBg}`}></div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
          <button className="absolute bottom-4 right-5 px-8 py-3 rounded-full shadow-lg shadow-[#545AE8]/40 bg-gradient-to-r from-[#545AE7] to-[#393FCF] text-white text-sm font-medium">
            Export
          </button>
        </div>
      </div>
      {/* next section  */}
      <div className="pl-30 pr-40 py-20 flex justify-between gap-60">
          <div className="relative z-0">
            <div className="absolute -top-6 -right-6 -z-10 border border-13 border-blue-d-cyan w-20 h-20 bg-white rounded-full"></div>
            <Image src="/polygon 3.png"
            alt="playbutton"
            width={20}
            height={20}
            className="absolute top-15 -right-15"
            />
            <Image src="/blurBg.png"
            alt="blurbg"
            width={480}
            height={40}
            />
            <div className="absolute top-18  left-18">
              <div className='relative w-110 backdrop-blur-xs rounded-t-xl h-6 bg-grey-light2'>
                  <div className='absolute w-3 h-3 bg-red-light top-2 left-4 rounded-full'></div>
                  <div className='absolute w-3 h-3 bg-yellow-light top-2 left-8 rounded-full'></div>
                  <div className='absolute w-3 h-3 bg-green-light2 top-2 left-12 rounded-full'></div>
              </div>
              <div className='relative w-110 backdrop-blur-sm rounded-b-xl shadow-xl shadow-b-xl h-65 z-10 bg-white'>
                <div className="absolute top-8 left-15">
                  <div className="relative w-35 h-35 overflow-hidden rounded-lg ">
                    <Image 
                    src="/portrait-teacher-giving-online-class 1.png"
                    alt="teacher"
                    fill
                    className=" object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-8 left-55 w-0 h-35 border border-grey-light3"></div>
                <div className="absolute top-8 left-60">
                  <div className="relative w-35 h-35 items-center overflow-hidden rounded-lg ">
                  <Image 
                  src="/image 10.png"
                  alt="teacher"
                  fill      
                  className=" object-cover"
                  />
                 </div>
                </div>
                <div className="absolute bottom-3 left-10">
                  <p className="text-grey-text text-lg font-semibold">Private Discussion</p>
                  <p className="text-grey-light4 text-xs font-light">Your video can't be seen by others</p>
                </div>
                <div className="absolute bottom-3 right-5 ">
                  <button className="bg-gradient-to-r from-red-start to-red-end rounded-full w-35 shadow-xl/30 shadow-[#EB493A] text-white text-base h-10">End Discussion</button>
                </div>
              </div>
             <div className="absolute top-8 -left-8 w-18 h-18 z-10 bg-white/60 rounded-full shadow-md flex items-center justify-center">
             <div className="w-13 h-13 bg-white rounded-full shadow-md flex items-center justify-center">
              <Image src="/vector.png"
              alt="user"
              height={40}
              width={40}
              />
             </div>
             </div>
            </div>
           <div className="absolute -bottom-5 -z-10 -left-5 w-42 h-42 bg-blue-light6 rounded-xl"></div>
          </div>
          <div className="mt-20">
            <h2 className="text-blue-dark text-3xl font-semibold w-90 leading-normal">One-on-One  <span className="text-blue-cyan">Discussions</span></h2>
            <p className="text-grey-text text-sm font-normal leading-loose w-90">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
          </div>
      </div>
      <div className="flex justify-center mt-30">
        <button className="text-blue-cyan2 border border-blue-cyan2 rounded-full w-50 h-15"> See more features</button>
      </div>
    </div>
  )
}

export default OurFeatures
