function NavBar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className="sticky top-4 md:top-8 z-50 flex justify-center w-full px-4">
      <div className="
        flex justify-center items-center 
        h-12 md:h-16 w-fit gap-1 md:gap-2 px-3 md:px-4
        border border-gray-200/50 rounded-2xl
        bg-white/50 backdrop-blur-md 
        flex-wrap md:flex-nowrap
      ">
        <a href="#" className="md:block font-mono text-gray-800 font-bold text-md md:text-xl px-2 md:px-4">
          Martin M.
        </a>

        {navItems.map((item) => (
          <a 
            key={item.href}
            href={item.href} 
            className='
              font-body font-medium text-gray-600 
              px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-base
              transition-all duration-200 
              hover:bg-white/50 hover:text-gray-800 hover:shadow-sm
            '
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar;