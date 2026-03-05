function StackSection({ id }) {
  const techData = {
    frontend: ["React", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML5/CSS3"],
    backend: ["Node.js", "Python", "Java", "MySQL", "JDBC", "C", "C++"],
    tools: ["Git", "GitHub", "VS Code", "Intellij", "Figma", "Vercel", "Discord"],
  };

  const ListItems = ({ items }) => (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span key={item} className="font-body px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200">
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section id={id} className="pt-[10rem]">
      <div className="flex flex-col gap-[2.5rem] p-[2rem] shadow-sm border border-gray-200/50 rounded-[1.5rem] bg-white">
        <h1 className="font-body text-5xl font-bold text-gray-900">Tech Stack</h1>
        
        <div className="flex flex-col gap-[2rem]">
          <div>
            <h2 className="font-body text-xl font-semibold">Frontend Development</h2>
            <ListItems items={techData.frontend} />
          </div>

          <div>
            <h2 className="font-body text-xl font-semibold ">Backend Development</h2>
            <ListItems items={techData.backend} />
          </div>

          <div>
            <h2 className="font-body text-xl font-semibold">Developer Tools</h2>
            <ListItems items={techData.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackSection;