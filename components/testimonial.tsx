import Image from "next/image"
const Testimonial = () => {
  return (
    <div className='my-30 px-30 flex justify-between'>
      <div>
        <div className=' flex items-center gap-8 font-nunito'>
            <div className='w-15 h-[1px] bg-blue-dark7'></div>
            <p className='text-blue-dark7 text-base font-normal tracking-widest'>TESTIMONIAL</p>
        </div>
        <br/>
        <div className='space-y-6'>
            <h3 className='text-5xl text-blue-dark font-nunito font-bold'>What They Say?</h3>
            {/* <br/> */}
            <p className='text-lg text-grey-text font-normal tracking-wider leading-8 w-120'>TOTC has got more than 100k positive ratings from our users around the world. </p>
            
            <p className='text-lg text-grey-text font-normal tracking-wider w-120'>Some of the students and teachers were greatly helped by the Skilline.</p>
            
            <p className='text-lg text-grey-text font-normal tracking-wider w-120'>Are you too? Please give your assessment</p>
            
               <button className="w-70 h-13 border border-blue-cyan2 rounded-full flex items-center justify-between pl-8 text-blue-cyan2 overflow-hidden">
                <span>Write your assessment</span>

                <div className="w-13 h-13 border rounded-full border-blue-cyan2 flex items-center justify-center">
                    <Image src="/Arrow 2.png"
                    alt="arrow"
                    width={20}
                    height={20} />
                </div>
                </button>
             
        </div>
      </div>
      <div className="relative w-80 h-110 shadow-xl mr-50">
        <Image src="/smiling-woman 1.png"
        alt="women"
        fill
        className="object-cover rounded-xl"
        />
        <div className="absolute top-50 -right-5 shadow-xl/20 w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Image src="/Vector 5.png"
            alt="arrow"
            height={10}
            width={10} />
        </div>
        <div className="absolute w-2 h-45 -bottom-14 left-5 bg-[#F67766]  rounded-l-xl z-10"></div>
        <div className="absolute px-5 font-nunito w-90 h-45 shadow-xl/30 py-5 -bottom-14 left-5 bg-white rounded-xl z-0">
            <div className="flex justify-center gap-5 ">
            <div className='h-20 w-[1px] bg-grey-light5 '></div>
            <p className="text-xs text-grey-text3 leading-5 text-left tracking-wide">"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
            </div>
            <div className="flex pt-8 pr-5 justify-between">
                <p className="pl-3 text-sm font-bold text-grey-text">Gloria Rose</p>
                <Image src="/star5.png"
                alt="stars"
                width={40}
                height={10}
                className="w-15 h-3" />
            </div>
            <p className="absolute right-3 pr-5 text-[10px] text-grey-text3">12 reviews at Yelp</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
