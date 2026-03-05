function HeroSection({ id }) {
  return (
    <>
      <section id={id} className='w-full flex flex-col justify-center items-center pt-[6rem] md:pt-[12rem] px-[1rem] md:px-[2rem]'>
        <div className='flex justify-center mb-[2rem]'>
          <span className='inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-[0.5rem] border border-gray-200 font-body'>
            Welcome
          </span>
        </div>
        <h1 className='text-[2.5rem] md:text-[4rem] lg:text-[8rem] font-body font-bold text-center'>
          Martin Manalo
        </h1>
        <h2 className='text-[1rem] md:text-[1.5rem] font-body font-semibold text-gray-500 text-center max-w-[600px]'>
          Sophomore, Computer Science <span className="font-normal">at</span> De La Salle University
        </h2>
      </section>
    </>
  )
}

export default HeroSection;