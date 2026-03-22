import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

import covVideo from "../../assets/videos/crown-of-vengeance.mp4";
import ebVideo from "../../assets/videos/eventbuddy.mp4";

const projects = [
  {
    title: "Taftics: Establishment Review App (for Taft)",
    tagline: "FULL-STACK",
    description:
      "A collaborative platform built for DLSU students to crowdsource and verify establishment ratings. Features a real-time voting system and location-based filtering.",
    tech: ["React", "Bootstrap", "MongoDB", "Node.js", "Express.js"],
    video: "/videos/taftics-demo.mp4",
    github: "https://github.com/Gabiesaur/CCAPDEV-MCO",
    live: "#",
  },
  {
    title: "Crown of Vengeance: Turn-Based Fighting Game",
    tagline: "GAME DEV",
    description:
      "A logic-heavy fighting game engine developed in Java. Implemented custom state machines for character moves and a frame-perfect collision system.",
    tech: ["Java", "JSwing"],
    video: covVideo,
    github: "https://github.com/martinmnlx/crown-of-vengeance",
    live: "#",
  },
  {
    title: "EventBuddy: Event Hall Reservation System",
    tagline: "FULL-STACK",
    description:
      "A web application designed to streamline event hall reservations. Features include real-time availability, user reviews, and an admin dashboard.",
    tech: ["Java", "MySQL"],
    video: ebVideo,
    github: "https://github.com/martinmnlx/eventbuddy",
    live: "#",
  },
];

function ProjectsSection({ id }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [index]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex(
      (prevIndex) =>
        (prevIndex + newDirection + projects.length) % projects.length,
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: (direction) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col items-center pt-32 md:pt-48 px-4 md:px-8 bg-white dark:bg-black"
    >
      <motion.h1
        variants={itemVariants}
        className="font-body text-4xl md:text-6xl font-bold text-slate-200 dark:text-slate-800 mb-6 w-full max-w-250 text-center md:text-left"
      >
        *Featured Projects
      </motion.h1>

      <div className="relative w-full max-w-250">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col md:flex-row gap-8 p-6 md:p-8 border border-slate-100 dark:border-slate-900 rounded-3xl bg-slate-50 dark:bg-slate-950"
          >
            {/* LEFT: Video Player */}
            <div className="shrink-0">
              <div
                className="relative w-full md:w-120 aspect-4/3 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <video
                  ref={videoRef}
                  key={projects[index].video}
                  src={projects[index].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={isHovered}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Text Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-mono text-xs md:text-sm font-semibold text-slate-400 dark:text-slate-600 tracking-widest uppercase">
                  {projects[index].tagline}
                </h2>
                <h3 className="font-body text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mt-2">
                  {projects[index].title}
                </h3>
                <p className="font-body text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                  {projects[index].description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {projects[index].tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-mono font-medium text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <motion.a
                  href={projects[index].github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-black rounded-xl text-sm font-body font-bold hover:bg-slate-800 dark:hover:bg-slate-200"
                >
                  <Github size={18} /> Code
                </motion.a>
                <motion.a
                  href={projects[index].live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-body font-bold hover:bg-slate-50 dark:hover:bg-slate-950 transition-all"
                >
                  <ExternalLink size={18} /> Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="flex justify-center md:justify-end gap-3 mt-6">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-black text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-black text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
