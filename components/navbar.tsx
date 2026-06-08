const Navbar = () => {
  return (

    <nav className=" flex items-center w-full gap-8 justify-between text-white py-2 px-10 ">
        <div className="flex text-2xl font-extrabold relative px-7 py-3">
            <div className="relative left-8 h-10 w-10 absolute rounded border border-[#00fff0] rotate-45 z-0 "></div>
            <h1 className="z-10 pt-1">TOTC</h1>
        </div>
        <ul className="flex items-center gap-15 ml-60 font-thin text-x">
            <li ><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blog">Blog</a></li>
            <li> <a href="/about">About Us</a></li>
        </ul>
        <div className="flex font-thin mr-15 gap-6 ">
            <button className="bg-white/30
            text-xl
            flex
            text-white
            justify-center
            w-25
            py-2 
            hover:bg-white
            hover:text-black
            rounded-full">Login</button>
            <button className="bg-white/30
            text-xl
            flex
            text-white 
            justify-center
            w-25
            py-2 
            hover:bg-white
            hover:text-black
            rounded-full">Sign Up</button>
        </div>
    </nav>
  )
}
export default Navbar
