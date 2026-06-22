import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 pb-5 bg-blue-dark8 space-y-5'>
      <div className='flex items-center justify-center gap-5'>
        <div className="flex text-xl font-semibold relative py-3">            
            <div className="relative left-6 h-8 w-8 absolute rounded border border-logo rotate-45 z-0"></div>
            <h1 className="z-10 pt-1 text-white">TOTC</h1>
        </div>
        <div className='h-10 w-[1px] bg-grey-light6 '></div>
        <div>
            <p className='text-white text-base font-normal w-30'>Virtual Class for Zoom</p>
        </div>
      </div>

      <p className='text-center text-base pt-5 text-grey-light5 tracking-wide '>Subscribe to get our Newsletter</p>
      <div className="flex justify-center items-center gap-4 ">
        <div className="w-70 h-12 border border-grey-light8 rounded-full px-6 flex items-center">
            <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent outline-none text-white placeholder:text-grey-light8 w-full text-sm"
            />
        </div>

        <button className="h-12 px-8 rounded-full bg-blue-cyan2 text-white text-sm font-medium">
            Subscribe
        </button>
        </div>

        <div className="flex justify-center items-center gap-4 pt-10 text-grey-light7 text-sm">
        <p>Careers</p>
        <span>|</span>
        <p>Privacy Policy</p>
        <span>|</span>
        <p>Terms & Conditions</p>
        </div>

        <p className="text-center text-grey-light7 text-sm">
        © 2021 Class Technologies Inc.
        </p>
    </div>
  )
}

export default Footer
