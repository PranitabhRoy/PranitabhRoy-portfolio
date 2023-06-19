import React from 'react'
import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Resume from '../assets/Resume.pdf'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/*Container*/}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-orange-600 text-xl '>
                    Hi, I am
                </p>
                <h1 className='text-4xl sm:tex-7xl  py-2 font-bold text-[#ccd6f6] '>
                    Pranitabh Roy
                </h1>
                <h2 className ='text-2xl sm:tex-7xl font-bold text-[#a0907c]'>A Frontend Developer and UI/UX Designer</h2> 
                <p className='text-[#c0b2a1] py-4 max-w-[700px]'>With a solid
                    foundation in HTML, CSS, JavaScript, React and UI/UX design principles, I aim to contribute
                    to innovative projects, collaborate with cross-functional teams, and continuously learn
                    and grow adaptively in a dynamic industry.</p>
                <div className='flex flex-row'>   
                    <div className='mx-4 flex flex-row'>
                        
                            <Link className='flex flex-row items-center' to="Project" smooth={true} offset={50} duration={500}>
                                <button className='shadow-lg text-white border-orange-800 border-2 rounded-lg px-6 py-3 my-2 flex flex-row items-center bg-orange-800 hover:bg-orange-950 hover:border-orange-950' >View Work <HiArrowNarrowRight className='ml-4'/>
                                </button>
                            </Link>
                        
                    </div>
                    <div>
                        
                        <a className='flex flex-row items-center' href={Resume} target='_blank' rel="noreferrer">  
                            <button className='shadow-lg text-white border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-orange-800 hover:border-orange-800'>Resume<HiArrowNarrowDown className='ml-4'/>
                            </button>
                        </a>
                        
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default Home