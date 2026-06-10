const Navbar = () => {
  return (

    <nav className="flex items-center w-full gap-8 pt-3 px-11 justify-between text-white  ">
        <div className="flex text-2xl font-bold relative py-3">
            <div className="relative left-8 h-10 w-10 absolute rounded border border-[#00fff0] rotate-45 z-0"></div>
            <h1 className="z-10 pt-1">TOTC</h1>
        </div>
        <ul className="flex items-center gap-10 ml-60 font-light text-lg">
            <li ><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blog">Blog</a></li>
            <li> <a href="/about">About Us</a></li>
        </ul>
        <div className="flex font-medium text-base mr-15 gap-6">
            <button className="bg-white
                flex
                text-[#5B5B5B]
                justify-center
                w-27
                py-2 
                hover:bg-white/30
                hover:text-white 
                rounded-full">Login</button>
            <button className="bg-white/30
                flex
                text-white 
                justify-center
                w-27
                py-2 
                hover:bg-white
                hover:text-black
                rounded-full">Sign Up</button>
        </div>
    </nav>
  )
}
export default Navbar
