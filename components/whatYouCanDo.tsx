import Image from "next/image";

const WhatYouCanDo = () => {
  return (
    <div className="px-35 my-20 flex justify-between font-poppins items-center gap-5">
      <div className="relative">
        <div className="absolute top-7 -left-5 w-13 h-13 bg-green-light rounded-full z-0"></div>
        <h1 className="relative z-10 text-xl lg:text-2xl pt-10  leading-normal font-medium text-blue-dark">
          Everything you can do in a physical <br/> classroom,
          <span className="text-blue-cyan">
            {" "}
            you can do with TOTC
          </span>
        </h1>

        <br />

        <p className="text-lg font-normal z-50 text-grey-text  leading-loose">
          TOTC's school management software helps traditional <br/> and online
          schools manage scheduling, attendance,<br/> payments and virtual
          classrooms all in one secure cloud-<br/> based system.
        </p>

        <br />

        <p className="text-grey-text text-sm font-light underline underline-offset-4 cursor-pointer">
          Learn more
        </p>

        <div className="absolute bottom-26 -z-10 -right-1 w-6 h-6 bg-green-light rounded-full"></div>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-d-cyan rounded-2xl z-0"></div>

        <Image
          src="/teacher.png"
          alt="confident-teacher-explaining-lesson-pupils"
          width={500}
          height={400}
          className="relative z-10 rounded-2xl"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
            <Image src="/polygon 2.png" 
            alt="play button" 
            width={17}
            height={17}
            className='ml-1 mt-0.5'
            />
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-light rounded-2xl z-0"></div>
      </div>
    </div>
  );
};

export default WhatYouCanDo;