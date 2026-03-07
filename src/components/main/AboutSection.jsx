function AboutSection({ id }) {
  return (
    <>
      <section id={id} className="w-full flex flex-col items-center pt-[8rem] md:pt-[12rem] px-[1rem] md:px-[2rem]">
        <div className='flex justify-center mb-[2rem]'>
          <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
            About
          </span>
        </div>
        <h1 className="font-body text-3xl md:text-5xl font-bold text-gray-900 mb-[2rem] text-center">
          About Me
        </h1>
        <div className="w-full max-w-[850px] flex flex-col md:flex-row gap-[2rem] p-[1.5rem] md:p-[2rem] shadow-sm border border-gray-200/50 rounded-[1.5rem] bg-white">
          <div>
            <img 
              src="../src/assets/images/self.jpg" 
              className="w-full h-45 md:w-60 md:h-80 rounded-2xl shadow-sm border border-gray-200/50 mx-auto md:mx-0">
            </img>
          </div>
          <div className="flex-1">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed">
              Hey! 
              I'm Martin, a sophomore CS student at De La Salle University.
              I'm from Taguig City, near BGC.
              Having some background in graphic design, I combine my creative and logical thinking in building software, 
              focusing mainly on frontend development, with experience on full-stack development as well.
            </p>
            <p className="font-body text-base md:text-lg text-gray-700 mt-[1.5rem] leading-relaxed">
              <span className="text-gray-500 font-semibold mr-1">
                Fun Fact: 
              </span>
              - I enjoy playing sports (especially basketball).
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;