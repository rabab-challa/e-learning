const Navbar = () => {
  return (

    <nav className=" flex items-center justifid-between text-white width[1665] height[83]   top[30px] left[121px] pt-2 px-10 ">
        <ul className="flex items-center gap-11 width[721] ml-auto font-normal ">
            <li >
                <a href="/">home</a>
            </li>
            <li>
                <a href="/courses">courses</a>
            </li>
            <li>
                <a href="/career">career</a>
            </li>
            <li>
               <a href="/blog"> blog</a>
            </li>
            <li> 
               <a href="/about"> about us</a>
            </li>
            <button className="bg-[#ffffff] 
            flex
            text-black 
            px-5 
            
            weight-120
            py-2 
            rounded-[80px]">login</button>
            <button className="bg-[#ffffff] 
            flex
            text-black 
            px-5 
            weight-120
            
            py-2 
            w-40px
            rounded-[80px]">sign up</button>
        </ul>

    </nav>
    
    
  )
}

export default Navbar
