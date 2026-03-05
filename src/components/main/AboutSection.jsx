function AboutSection({ id }) {
  return (
    <>
      <section id={id} className="pt-[12rem]">
        <div className="flex flex-row gap-[2rem] p-[2rem] shadow-sm border-1 border-gray-200/50 rounded-[1.5rem]">
          <div>
            <img 
              src="../src/assets/images/self.jpg" 
              className="w-[18rem] h-[18rem] rounded-[1rem] shadow-sm border-1 border-gray-200/50">
            </img>
          </div>
          <div className="w-[36rem]">
            <h1 className="font-body font-bold text-[3rem]">
              Martin Manalo 
            </h1>
            <h2 className="font-body text-gray-500">
              CGPA: 3.564 <span className="px-[0.25rem]">•</span> Computer Science, Major in Software Technology
            </h2>
            <p className="font-body text-[1rem] mt-[1.5rem]">
              Hey! 
              I'm Martin, a sophomore CS student at De La Salle University.<br></br>
              I'm from Taguig City, near BGC.
              Having some background in graphic design, I combine my creative and logical thinking in building software, 
              focusing mainly on frontend development, with experience on full-stack development as well.
            </p>
            <h3 className="font-body mt-[2rem]">
              <span className="text-gray-500 pr-[0.25rem]">Relevant Coursework:</span> CCAPDEV, CCINFOM, CSADPRG, CSINTSY
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;