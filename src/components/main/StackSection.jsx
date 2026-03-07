function StackSection({ id }) {
  const techData = {
    frontend: ["React", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5/CSS3"],
    backend: ["Node.js", "Python", "Java", "MySQL", "JDBC", "C", "C++"],
    tools: ["Git", "GitHub", "VS Code", "Intellij IDEA", "Arduino IDE", "Figma", "Vercel"],
  };

  const ListItems = ({ items }) => (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span key={item} className="font-mono px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section id={id} className="w-full flex flex-col items-center pt-[8rem] md:pt-[10rem] px-[1rem] md:px-[2rem]">
      <div className='flex justify-center mb-[2rem]'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
          Skills
        </span>
      </div>
      <div className="w-full max-w-[800px] flex flex-col gap-[2rem] md:gap-[2.5rem] p-[1.5rem] md:p-[2rem] shadow-sm border border-gray-200/50 rounded-[1.5rem] bg-white">
        <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 text-center mb-[1rem]">Tech Stack</h1>
        <div className="flex flex-col gap-[2rem]">
          <div className="p-[1rem] rounded-[0.8rem] border border-gray-100 bg-gray-50 hover:shadow-sm transition-all duration-200">
            <h2 className="font-body text-base md:text-lg font-semibold text-gray-900 mb-[0.75rem]">Frontend Development</h2>
            <ListItems items={techData.frontend} />
          </div>

          <div className="p-[1rem] rounded-[0.8rem] border border-gray-100 bg-gray-50 hover:shadow-sm transition-all duration-200">
            <h2 className="font-body text-base md:text-lg font-semibold text-gray-900 mb-[0.75rem]">Backend Development</h2>
            <ListItems items={techData.backend} />
          </div>

          <div className="p-[1rem] rounded-[0.8rem] border border-gray-100 bg-gray-50 hover:shadow-sm transition-all duration-200">
            <h2 className="font-body text-base md:text-lg font-semibold text-gray-900 mb-[0.75rem]">Developer Tools</h2>
            <ListItems items={techData.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;