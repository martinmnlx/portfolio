function NavBar() {
  return (
    <nav className="sticky top-[2rem] z-50 flex justify-center w-full">
      <div className="
        flex justify-center items-center 
        h-[4rem] w-fit gap-[0.5rem] px-[1rem]
        border-1 border-gray-200/50 rounded-[1.5rem]
        bg-white/30 backdrop-blur-md 
        shadow-sm
      ">
        <h1 className="font-body text-gray-700 font-bold text-xl px-4">
          Martin Manalo
        </h1>

        <a href="#about" className='
          font-body text-gray-500 
          px-4 py-2 rounded-[0.8rem]
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          About
        </a>
        
        <a href="#" className='
          font-body text-gray-500 
          px-4 py-2 rounded-[0.8rem] 
          transition-all duration-200 
          hover:bg-white/50 hover:text-black hover:shadow-sm
        '>
          Projects
        </a>
        
        <a href="#" className='
          font-body text-gray-500 
          px-4 py-2 rounded-[0.8rem] 
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