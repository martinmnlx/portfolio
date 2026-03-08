import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Taftics: Taft-Based Establishment Review App",
    tagline: "01 / FULL-STACK",
    description: "A collaborative platform built for DLSU students to crowdsource and verify establishment ratings. Features a real-time voting system and location-based filtering.",
    tech: ["React", "Bootstrap", "MongoDB", "Express", "Node.js"],
    image: "/images/project1.webp",
    github: "#",
    live: "#"
  },
  {
    title: "Crown of Vengeance: Turn-Based Fighting Game",
    tagline: "02 / GAME DEV",
    description: "A logic-heavy fighting game engine developed in Java. Implemented custom state machines for character moves and a frame-perfect collision system.",
    tech: ["Java", "JSwing"],
    image: "/images/project2.webp",
    github: "#",
    live: "#"
  },
  {
    title: "EventBuddy: Event Hall Reservation System",
    tagline: "03 / FULL-STACK",
    description: "A web application designed to streamline event hall reservations. Features include real-time availability, user reviews, and an admin dashboard for managing bookings.",
    tech: ["Java", "JSwing", "JDBC", "MySQL"],
    image: "/images/project3.webp",
    github: "#",
    live: "#"
  }
];

function ProjectsSection({ id }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  // Modern Slide Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.4 }
    })
  };

  return (
    <section id={id} className="w-full min-h-screen flex flex-col items-center pt-32 md:pt-48 px-4 md:px-8 bg-white">
      {/* Title Header - Now even larger and more minimalist */}
      <div className="w-full max-w-300 mb-12">
        <h1 className="font-body text-4xl md:text-6xl font-bold text-slate-200 text-center md:text-left">
          *Featured Projects
        </h1>
      </div>

      <div className="w-full max-w-300 relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* LEFT: Large Image Canvas (Spans 7 columns) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-slate-100 border border-slate-100">
                <motion.img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              
              {/* Floating Pagination Arrows on Image (Mobile/Tablet visible) */}
              <div className="absolute bottom-4 right-4 flex gap-2 lg:hidden">
                <button onClick={() => paginate(-1)} className="p-3 bg-white/90 backdrop-blur rounded-full shadow-lg"><ChevronLeft size={20}/></button>
                <button onClick={() => paginate(1)} className="p-3 bg-white/90 backdrop-blur rounded-full shadow-lg"><ChevronRight size={20}/></button>
              </div>
            </div>

            {/* RIGHT: Text Content (Spans 5 columns) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-blue-600 tracking-widest uppercase mb-4">
                {projects[index].tagline}
              </span>
              <h3 className="font-body text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {projects[index].title}
              </h3>
              <p className="font-body text-lg text-slate-600 leading-relaxed mb-8">
                {projects[index].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {projects[index].tech.map((t) => (
                  <motion.span 
                    key={t} 
                    className="px-3 py-1 text-xs font-mono font-medium text-slate-400 border border-slate-200 rounded-lg"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-6 items-center">
                <a href={projects[index].github} className="group flex items-center gap-2 font-body font-bold text-slate-900">
                  <Github size={18} /> 
                  <span className="border-b-2 border-transparent group-hover:border-slate-900 transition-all">View Code</span>
                </a>
                <a href={projects[index].live} className="group flex items-center gap-2 font-body font-bold text-blue-600">
                  <ExternalLink size={18} /> 
                  <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop Custom Navigation (Positioned Bottom Right) */}
        <div className="hidden lg:flex absolute -bottom-24 right-0 items-center gap-8">
           <div className="flex flex-col items-end">
             <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">Navigate</span>
             <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-4 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="p-4 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;