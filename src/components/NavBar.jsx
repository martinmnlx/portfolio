function NavBar() {
  return (
    <nav className="sticky top-4 md:top-8 z-50 flex justify-center w-full px-4">
      <div className="
        flex justify-center items-center 
        h-12 md:h-16 w-fit gap-1 md:gap-2 px-3 md:px-4
        border border-gray-200/50 rounded-2xl
        bg-white/50 backdrop-blur-md 
        flex-wrap md:flex-nowrap
      ">
        <a href="#" className="md:block font-mono text-gray-700 font-bold text-lg md:text-xl px-2 md:px-4">
          Martin M.
        </a>

        <a href="#about" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          About
        </a>
        
        <a href="#projects" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          Projects
        </a>
        
        <a href="#contact" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          Contact
        </a>
      </div>
    </nav>
  )
}

export default NavBar;