import React from 'react'
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import figma from '../assets/figma.png';
import java from '../assets/java.png';
import mysql from '../assets/mysql.png';

const Skills = () => {
  return (
    
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container*/}
      <div className='h-24'>
        {/*emptyspace*/}
      </div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-orange-800 '>Skills</p>
          <p className='py-4'>These are the Technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={Html} alt="Html icon" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={Css} alt="Css icon" />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={react} alt="react icon" />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={node} alt="node icon" />
            <p className='my-4'>Node</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={java} alt="Java icon" />
            <p className='my-4'>Java</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
            <p className='my-4'>MySQL</p>
          </div>


          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 '>
            <img className='w-20 mx-auto' src={figma} alt="Figma icon" />
            <p className='my-4'>Figma</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills