function NavBar() {
  return (
    <nav className="sticky top-[1rem] md:top-[2rem] z-50 flex justify-center w-full px-[1rem]">
      <div className="
        flex justify-center items-center 
        h-[3rem] md:h-[4rem] w-fit gap-[0.25rem] md:gap-[0.5rem] px-[0.5rem] md:px-[1rem]
        border-1 border-gray-200/50 rounded-2xl
        bg-white/30 backdrop-blur-md 
        shadow-sm flex-wrap md:flex-nowrap
      ">
        <h1 className="hidden md:block font-body text-gray-700 font-bold text-lg md:text-xl px-2 md:px-4">
          Martin Manalo
        </h1>

        <a href="#about" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-[0.8rem] text-sm md:text-base
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          About
        </a>
        
        <a href="#projects" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-[0.8rem] text-sm md:text-base
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          Projects
        </a>
        
        <a href="#contact" className='
          font-body text-gray-500 
          px-2 md:px-4 py-1 md:py-2 rounded-[0.8rem] text-sm md:text-base
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