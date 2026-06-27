type NavbarProps = {
  variant?: "home" | "default";
};

const Navbar = ({ variant = "home" }: NavbarProps) => {
    const textColor =
variant === "home" ? "text-white" : "text-grey1-text";
  return (
    
    <nav className={`flex
    items-center
    justify-between
    w-full
    px-4
    md:px-8
    lg:px-11
    pt-1
    ${textColor}`}>
        <div className="flex text-xl md:text-2xl font-bold relative py-3">            
            <div className="relative left-8 h-10 w-10 absolute rounded border border-logo rotate-45 z-0"></div>
            <h1 className="z-10 pt-1">TOTC</h1>
        </div>
        <ul className={`
            flex
            flex-wrap
            justify-center
            items-center
            gap-4
            md:gap-6
            lg:gap-10
            lg:ml-60
            font-light
            text-sm
            md:text-base
            lg:text-lg
            ${textColor}
            `}>
            <li ><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blog">Blog</a></li>
            <li> <a href="/about">About Us</a></li>
        </ul>
        {/* <div className="lg:hidden text-3xl cursor-pointer">
            ☰
        </div> */}
        {variant === "home" && (
        <div className="flex
            items-center
            font-medium
            text-sm
            md:text-base
            gap-3
            md:gap-6
            mr-0
            lg:mr-15">
            <button className="bg-white
                w-20
                md:w-24
                lg:w-27
                py-2
                text-[#5B5B5B]
                hover:bg-white/30
                hover:text-white
                rounded-full">Login</button>
            <button className="bg-white/30
                w-20
                md:w-24
                lg:w-27
                py-2
                text-white
                hover:bg-white
                hover:text-black
                rounded-full">Sign Up</button>
        </div>)}
        {variant === "default" && (
        <div className="flex
            items-center
            font-medium
            text-sm
            md:text-base
            gap-3
            md:gap-6
            mr-0
            lg:mr-15">
            
        </div>)}
    </nav>
  )
}
export default Navbar
