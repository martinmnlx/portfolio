import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-4 md:top-8 z-50 flex flex-col items-center w-full px-4">
      {/* Main Container */}
      <div className="
        flex items-center justify-between
        h-12 md:h-16 w-full max-w-fit md:min-w-[400px] gap-2 px-3 md:px-4
        border border-gray-200/50 rounded-2xl
        bg-white/50 backdrop-blur-md relative
      ">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2 font-mono text-gray-800 font-bold text-lg md:text-xl px-2">
          <span>Martin M.</span>
        </a>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className='font-body font-medium text-gray-600 px-4 py-2 rounded-lg text-base transition-all duration-200 hover:bg-white/50 hover:text-gray-800'
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle (Hidden on Desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              md:hidden mt-2 w-full max-w-[250px]
              flex flex-col gap-1 p-2
              border border-gray-200/50 rounded-2xl
              bg-white/80 backdrop-blur-lg shadow-lg
            "
          >
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={() => setIsOpen(false)} // Close menu when link is clicked
                className="
                  font-body font-medium text-gray-600 
                  px-4 py-3 rounded-xl text-center
                  transition-all duration-200 
                  hover:bg-white hover:text-gray-800 hover:shadow-sm
                "
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;