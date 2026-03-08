import selfImage from '../../assets/images/self.jpg';

function AboutSection({ id }) {
  return (
    <>
      <section id={id} className="w-full flex flex-col items-center pt-32 md:pt-[12rem] md:px-[2rem]">
        <div className='flex justify-center mb-8'>
          <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 font-body'>
            About
          </span>
        </div>
        <div className="w-full max-w-[850px] flex flex-col md:flex-row gap-8 p-[1.5rem] md:p-[2rem] border border-gray-200/50 rounded-3xl bg-white">
          <div>
            <img 
              src={selfImage}
              className="w-60 h-60 md:w-80 md:h-80 rounded-2xl border border-gray-200/50 mx-auto md:mx-0">
            </img>
          </div>
          <div className="flex-1">
            <h2 className="font-mono text-sm md:text-md font-bold text-slate-400 mt-2">
              GET TO KNOW ME
            </h2>
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed mt-2">
              Hey, I'm Martin!
            </p>
            <h2 className="font-mono text-sm md:text-md font-bold text-slate-400 mt-6">
              FUN FACTS
            </h2>
            <p className="font-body text-base md:text-lg text-slate-800 leading-relaxed mt-2">
              - I enjoy playing basketball (and other sports) and going to the gym.<br />
              - I enjoy not only watching, but also dissecting the numbers behind basketball.<br />
              - I love watching comic book movies, especially the MCU and the older Marvel films.<br />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;