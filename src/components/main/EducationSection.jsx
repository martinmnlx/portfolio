function EducationSection({ id }) {
  const educationData = [
    {
      school: "De La Salle University",
      degree: "Bachelor of Science in Computer Science",
      major: "Major in Software Technology",
      duration: "2024 - Present",
      gpa: "3.564",
      relevantCourses: ["CCAPDEV", "CCINFOM", "CSADPRG", "CSINTSY"]
    }
  ];

  return (
    <section id={id} className="w-full flex flex-col items-center pt-[8rem] md:pt-[10rem] px-[1rem] md:px-[2rem]">
      <div className='flex justify-center mb-[2rem]'>
        <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
          Education
        </span>
      </div>
      <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 mb-[2rem] text-center">
        My Education
      </h1>
      
      <div className="w-full max-w-[800px] flex flex-col gap-[2rem] p-[1.5rem] md:p-[2rem] shadow-sm border border-gray-200/50 rounded-[1.5rem] bg-white">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="p-[1.5rem] md:p-[2rem] border border-gray-200/50 rounded-[1.2rem] bg-gray-50 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[1rem] mb-[1.5rem]">
              <div>
                <h2 className="font-body text-lg md:text-xl font-bold text-gray-900">
                  {edu.school}
                </h2>
                <h3 className="font-body text-base md:text-lg font-semibold text-gray-700 mt-[0.5rem]">
                  {edu.degree}
                </h3>
                <p className="font-body text-sm md:text-base text-gray-600 mt-[0.25rem]">
                  {edu.major}
                </p>
              </div>
              <div className="md:text-right">
                <p className="font-body text-sm md:text-base text-gray-600 font-semibold">
                  {edu.duration}
                </p>
                <p className="font-body text-sm text-gray-500 mt-[0.25rem]">
                  GPA: {edu.gpa}
                </p>
              </div>
            </div>
            
            <div className="mt-[1.5rem]">
              <p className="font-body text-gray-600 mb-[0.5rem]">
                <span className="font-semibold">Relevant Coursework:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.relevantCourses.map((course) => (
                  <span
                    key={course}
                    className="font-body px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
