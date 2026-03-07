function ProjectsSection({ id }) {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React and Tailwind CSS featuring dark mode support.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <section id={id} className="pt-[8rem] md:pt-[10rem]">
      <div className='flex justify-center mb-[2rem]'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
          Projects
        </span>
      </div>
      <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 mb-[2rem] text-center">
        Project Gallery (Placeholder)
      </h1>
      
      <div className="overflow-x-auto pb-4 scrollbar-hide w-full -mx-[1rem] md:-mx-[2rem] px-[1rem] md:px-[2rem]">
        <div className="flex gap-[1rem] md:gap-[1.5rem] min-w-max">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[18rem] md:w-[26rem] p-[1.25rem] md:p-[1.5rem] border border-gray-200/50 rounded-[1.2rem] bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h2 className="font-body text-lg md:text-xl font-bold text-gray-900 mb-[0.75rem]">
                {project.title}
              </h2>
              
              <p className="font-body text-sm md:text-base text-gray-600 mb-[1rem]">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-[1rem]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-body px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm font-medium rounded-[0.5rem] border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                className="font-body px-4 py-2 bg-gray-900 text-white font-medium rounded-[0.8rem] inline-block hover:bg-gray-800 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
