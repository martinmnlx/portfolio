import { useState } from 'react';
import { Menu, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-4 md:top-8 z-50 flex justify-center w-full px-4">
      
      {/* 2. The Relative Container: This is the anchor point for the overlap */}
      <div className="relative flex flex-col items-center w-full max-w-fit md:min-w-[400px]">
        
        {/* Main Bar */}
        <div className="
          flex items-center justify-between 
          h-12 md:h-16 w-full gap-4 px-5
          border border-gray-200/50 rounded-2xl
          bg-white/50 backdrop-blur-md z-50
        ">
          <a href="#" className="font-mono text-gray-800 font-bold text-lg md:text-xl whitespace-nowrap">
            Martin M.
          </a>

          {/* Desktop Links */}
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

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <Minimize2 size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* 3. The Overlapping Menu: 'absolute' makes it float over content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                absolute top-[calc(100%+0.5rem)] left-0 right-0 
                flex flex-col gap-1 p-2
                border border-gray-200/50 rounded-2xl
                bg-white/80 backdrop-blur-xl shadow-xl z-40
                md:hidden
              "
            >
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="
                    font-body font-medium text-gray-600 
                    px-4 py-3 rounded-xl text-center
                    transition-all duration-200 
                    hover:bg-white hover:text-gray-800
                  "
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;