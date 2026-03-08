import { Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/CV_MANALO_CARLMARTIN.pdf';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
    { name: 'Facebook', url: 'https://www.facebook.com/martinmnlx', Icon: Facebook },
  ];

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-32 w-full border-t border-slate-100 bg-slate-50">
      <div className="flex flex-col items-center px-[1rem] md:px-[2rem] py-12 md:py-16 gap-10">
        
        {/* Top Section: Navigation and Back to Top */}
        <div className="w-full max-w-[900px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-body text-slate-500 text-sm md:text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:text-slate-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs font-bold text-slate-400 tracking-widest uppercase cursor-pointer hover:text-slate-900 transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </motion.button>
        </div>

        {/* Middle Section: Socials and CTA */}
        <div className="w-full max-w-[900px] flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-100">
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-2.5 bg-slate-50 text-slate-600 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                aria-label={link.name}
              >
                <link.Icon size={20} strokeWidth={2} />
              </motion.a>
            ))}
          </div>

          <a
            href={resumePdf}
            download
            className="px-6 py-2.5 bg-slate-900 text-white font-body font-semibold rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-sm"
          >
            Download Resume
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-mono text-[10px] md:text-xs font-bold text-slate-300 tracking-[0.2em] uppercase">
            Built with React & Tailwind
          </p>
          <p className="font-body text-slate-400 text-xs md:text-sm text-center">
            © {currentYear} Martin Manalo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;