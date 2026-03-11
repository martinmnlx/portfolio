import { Github, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/CV_MANALO_CARLMARTIN.pdf';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
    { name: 'Facebook', url: 'https://www.facebook.com/martinmnlx', Icon: Facebook },
  ];

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="mt-32 w-full border-t border-slate-100 bg-slate-50">
      <div className="max-w-[900px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Nav links */}
        <div className="flex items-center gap-5 font-body text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.url} className="hover:text-slate-900 transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Center: Copyright */}
        <p className="font-body text-xs text-slate-400 text-center order-last md:order-none">
          © {currentYear} Martin Manalo
        </p>

        {/* Right: Socials + Resume + Back to top */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
              aria-label={link.name}
            >
              <link.Icon size={17} strokeWidth={2} />
            </motion.a>
          ))}

          <div className="w-px h-4 bg-slate-200 mx-1" />

          <a
            href={resumePdf}
            download
            className="px-3 py-1.5 bg-slate-900 text-white font-body text-xs font-semibold rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            Resume
          </a>

          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="text-slate-400 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}