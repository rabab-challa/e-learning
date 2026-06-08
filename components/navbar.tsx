const Navbar = () => {
  return (

    <nav className=" flex items-center w-full gap-8 justify-between text-white py-2 px-10 ">
        <div className="flex text-xl font-bold relative px-7 py-3">
            <div className="relative left-8 h-[37px] w-[37px] absolute rounded border border-[#00fff0] rotate-45 z-0 "></div>
            <h1 className="z-10 pt-1">TOTC</h1>
        </div>
        <ul className="flex items-center gap-8  text-[22px] ">
            <li ><a href="/">home</a></li>
            <li><a href="/courses">courses</a></li>
            <li><a href="/career">career</a></li>
            <li><a href="/blog"> blog</a></li>
            <li> <a href="/about"> about us</a></li>
        </ul>
        <div className="flex gap-3 ">
            <button className="bg-white/30
            text-[22px]
            flex
            text-white
            justify-center
            w-[100px]
            py-2 
            hover:bg-white
            hover:text-black
            rounded-full">login</button>
            <button className="bg-white/30
            text-[22px]
            flex
            text-white 
            justify-center
            w-[100px]
            py-2 
            hover:bg-white
            hover:text-black
            rounded-full">sign up</button>
        </div>
    </nav>
  )
}
export default Navbar
