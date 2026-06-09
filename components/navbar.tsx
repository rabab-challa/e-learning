const Navbar = () => {
  return (

    <nav className="nav">
        <div className="logo">
            <div className="logo-dimond"></div>
            <h1 className="logo-text">TOTC</h1>
        </div>
        <ul className="links">
            <li ><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blog">Blog</a></li>
            <li> <a href="/about">About Us</a></li>
        </ul>
        <div className="btn-container">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
        </div>
    </nav>
  )
}
export default Navbar
