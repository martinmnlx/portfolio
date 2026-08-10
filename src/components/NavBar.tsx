import { useState, type Dispatch, type SetStateAction } from "react";
import { Menu, Minimize2, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavBarProps = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

function NavBar({ dark, setDark }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-4 md:top-8 z-50 flex justify-center w-full px-4">
      <div className="relative flex flex-col items-center w-full max-w-fit md:min-w-100">
        <div
          className="
          flex items-center justify-between 
          h-12 md:h-16 w-full gap-4 px-5 md:pr-2.5
          border border-slate-200/50 dark:border-slate-800/50 rounded-2xl
          bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md z-50
        "
        >
          <a
            href="#"
            className="font-mono text-slate-800 dark:text-slate-200 md:px-2 font-bold text-lg md:text-xl whitespace-nowrap"
          >
            Martin M.
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="font-body font-medium text-slate-600 dark:text-slate-400 px-4 py-2 rounded-lg text-base hover:text-slate-800 dark:hover:text-slate-200 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={() => setDark((prev) => !prev)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="px-4 text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 dark:text-slate-400"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <Minimize2 size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                absolute top-[calc(100%+0.5rem)] left-0 right-0 
                flex flex-col gap-1 p-2
                border border-gray-200/50 dark:border-slate-700/50 rounded-2xl
                bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-40
                md:hidden
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    font-body font-medium text-gray-600 dark:text-slate-300
                    px-4 py-2 rounded-xl text-center
                    transition-all duration-200 
                    hover:bg-white dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-white
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
