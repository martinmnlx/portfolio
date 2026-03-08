import { Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function HeroSection({ id }) {
  const links = [
    { label: 'GitHub', url: 'https://github.com/martinmnlx', Icon: Github },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martin-d-manalo/', Icon: Linkedin },
  ];

  // Animation Variants for a clean staggered entry
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section 
      id={id} 
      className='w-full flex flex-col justify-center items-center pt-28 md:pt-48 px-4 md:px-8 bg-white overflow-hidden'
    >
      {/* 1. The Name */}
      <motion.h1 
        {...fadeInUp}
        className='text-7xl md:text-9xl font-body font-bold text-center mb-4 text-slate-800'
      >
        Martin<br className="md:hidden" /> Manalo
      </motion.h1>

      {/* 2. Role & University */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className='text-sm md:text-[1.25rem] font-mono font-medium text-slate-600 text-center mb-8 md:mb-16'
      >
        Software Engineer & UI Designer <br className="md:hidden" />
        <span className="hidden md:inline"> • </span> 
        CS Sophomore, De La Salle University
      </motion.h2>
      
      {/* 3. Social Links with stagger */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className='grid grid-cols-2 md:flex md:flex-row gap-x-3 gap-y-4 md:gap-4 justify-center mb-4 w-67 max-w-md md:max-w-none px-4 md:px-0 mx-auto'
      >
        {links.map((link) => {
          const { Icon } = link;
          return (
            <motion.a
              key={link.label}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              href={link.url}
              target="_blank" 
              rel="noreferrer"
              className='flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-900 font-body font-medium rounded-xl border border-slate-200 hover:bg-slate-100 whitespace-nowrap'
            >
              <Icon size={16} strokeWidth={2} />
              <span className='text-sm md:text-base'>{link.label}</span>
            </motion.a>
          );
        })}

        {/* The "Primary CTA" Button */}
        <motion.a
          key="contact"
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          href='#contact'
          className='
            flex items-center justify-center gap-2 px-4 py-2.5 
            bg-blue-600 text-white font-body font-medium rounded-xl
            hover:bg-blue-700 whitespace-nowrap
            
            col-span-2 md:col-span-1 md:w-auto
          '        
        >
          <MessageCircle size={16} strokeWidth={2} />
          <span className='text-sm md:text-base'>Contact Me</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroSection;