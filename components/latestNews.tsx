
import Image from 'next/image'
import NewsData from '../data/resouces'
const LatestNews = () => {
  return (
    <div className='py-20  space-y-20 '>
      <div className='font-nunito'>
          <h1 className='lg:text-3xl text-center text-lg text-blue-dark font-bold'>Lastest News and Resources</h1> <br/>
          <p className='text-base text-grey-text font-normal text-center '>See the developments that have occurred to TOTC in the world </p>
          </div>
          <div className='flex justify-between gap-8'>
            <div className='pl-40 space-y-5'>
            <div className="relative h-60 w-110">
                <Image src="/rect32.png"
                alt="rect 32"
                fill
                className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-blue-dark9/10 rounded-2xl"></div>
            </div>
            <div className='text-sm font-normal text-white rounded-full bg-blue-cyan2 w-23 py-1 text-center'>NEWS</div>
            <div className='space-y-5'> 
                <p className='text-blue-dark8 text-lg font-medium w-105'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                <p className='text-sm text-light text-grey-text w-95 tracking-wide'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <p className="text-grey-text text-sm font-light underline underline-offset-4 cursor-pointer">
                    Read more
                </p>
            </div>
            </div>
            <br/>
            <div className="space-y-8 pr-30">
                {NewsData.map((item) => (
                    <div key={item.id} className="flex gap-8 items-center">
                    
                    <div className="relative w-95 h-33 ">
                        <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-2xl"
                        />
                          <div className="absolute inset-0 bg-blue-dark9/10 rounded-2xl"></div>

                        <div className="absolute bottom-4 right-4 bg-blue-cyan2 text-white text-xs px-2 py-1 rounded-full">
                        {item.tag}
                        </div>
                    </div>

                    <div className="space-y-2 ">
                        <h3 className="text-base font-medium leading-loose text-blue-dark8 ">
                        {item.title}
                        </h3>

                        <p className="text-grey-text text-sm leading-5">
                        {item.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
          </div>
    </div>
  )
}

export default LatestNews
