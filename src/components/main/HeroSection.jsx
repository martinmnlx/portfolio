import { Github, Linkedin, ArrowRight } from 'lucide-react';
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
      className='w-full flex flex-col justify-center items-center pt-28 md:pt-48 pb-16 px-4 md:px-8 bg-white overflow-hidden'
    >
      {/* 1. The Name */}
      <motion.h1 
        {...fadeInUp}
        className='text-5xl md:text-9xl font-body font-bold text-center mb-4 text-slate-800'
      >
        Martin Manalo
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
        CS Sophomore at De La Salle University
      </motion.h2>
      
      {/* 3. Social Links with stagger */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className='flex flex-row gap-3 md:gap-4 flex-wrap justify-center mb-10'
      >
        {links.map((link) => {
          const { Icon } = link;
          return (
            <motion.a
              key={link.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank" 
              rel="noreferrer"
              className='flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 font-body font-medium rounded-xl border border-slate-200 hover:bg-slate-100 transition-all duration-200 whitespace-nowrap'
            >
              <Icon size={16} strokeWidth={2} />
              <span className='text-sm md:text-base'>{link.label}</span>
            </motion.a>
          );
        })}
      </motion.div>
      
      {/* 4. Professional CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='group flex flex-col md:flex-row items-center gap-2 font-body text-sm md:text-base text-slate-600'
      >
        <p>Interested in collaborating on a project?</p>
        <a 
          href="#contact" 
          className='flex items-center gap-1.5 text-blue-600 font-semibold hover:gap-3 transition-all duration-300'
        >
          Get in touch <ArrowRight size={18} />
        </a>
      </motion.div>

    </section>
  );
}

export default HeroSection;