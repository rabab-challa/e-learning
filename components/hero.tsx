import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='hero-container' >
      <div className='container1'>
        <h1 className='container1-text1'><span className="container1-text1-span">Studying</span> Online is now much easier</h1>
        <br />
        <p className='container1-text2'>TOTC is an interesting platform that will teach you in more an interactive way</p>
        <br />
        <div className='container1-btn-div'>
          <button className='container1-btn'>Join For Free
          </button>
          <div className='container1-play-div'>
            <div className='container1-play-btn'></div>
          </div>
            <p className='container1-play-text'>Watch how it works</p>
        </div>
      </div>
      <div className='container2'>
        <Image src="/girl.png" 
        alt="Student"
        width={544} 
        height={892}
        className='container2-img' />
        <div className='container2-box1'> 
          <div className='container2-box1-logo'>
             <Image src="/calendar 1.png" 
            alt="calender" 
            width={32}
            height={32}
            />
          </div>
          <p className='container2-box-text'> <span className='container2-box-span'>250k </span><br/> Assisted Student</p>
        </div>
        <div className='container2-box2'>
          <div className='container2-box2-logo'>
           <Image src="/email.png" 
            alt="calender" 
            width={32}
            height={32}
            />
          </div>
          <p className='container2-box-text'><span className='container2-box-span'> Congratulations </span> <br/> Your admission completed</p>
        </div>
        <div className='container2-box3'>
          <div className='container2-box3-div'>
            <div className='container2-box3-logo'>
            <Image
              src="/user-profile.png"
              alt="profile"
              width={45}
              height={45}
              className='container2-box3-img'
            />
            <div className='container2-box3-img-icon'></div>
            </div>
            <div >
              <h3 className='container2-box3-text1'>User Experience Class</h3>
              <p className='container2-box3-text2'> Today at 12.00 PM</p>
            </div>
          </div>
          <button className='container2-box3-btn'>
            Join Now</button>
        </div>
        <div className='container2-box4'>
          <div className='container2-box4-div'>
            <Image src="/logo4.png"
            alt='logo'
            width={20}
            height={20}
            className='container2-box4-logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero;
