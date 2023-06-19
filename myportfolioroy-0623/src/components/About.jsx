import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-800'>About</p>
          </div>
          <div>

          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div className='sm:text-right pl-4 text-4xl font-bold '>
            <p>Hi, I am Pranitabh, welcome to my PortFolio. Please take a look around.</p>
          </div>
          <div className='pl-4'>
            <p>I am passionate in creating excellent product design apps and modern websites as a UI/UX Designer and a Frontend Developer.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About