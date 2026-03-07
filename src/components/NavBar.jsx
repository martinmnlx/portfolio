import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    // We keep this relative so the absolute dropdown knows where to anchor
    <nav className="sticky top-4 md:top-8 z-50 flex flex-col items-center w-full px-4">
      
      {/* Main Bar */}
      <div className="
        flex items-center justify-between
        h-12 md:h-16 w-full max-w-fit md:min-w-[400px] gap-2 px-3 md:px-4
        border border-gray-200/50 rounded-2xl
        bg-white/50 backdrop-blur-md relative z-50
      ">
        <a href="#" className="flex items-center gap-2 font-mono text-gray-800 font-bold text-lg md:text-xl px-2">
          <Terminal size={18} className="text-blue-500" />
          <span>Martin M.</span>
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

        {/* Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown - Now Absolutely Positioned */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              absolute top-[110%] left-1/2 -translate-x-1/2 
              md:hidden w-[calc(100%-2rem)] max-w-[300px]
              flex flex-col gap-1 p-2
              border border-gray-200/50 rounded-2xl
              bg-white/90 backdrop-blur-xl shadow-xl z-40
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