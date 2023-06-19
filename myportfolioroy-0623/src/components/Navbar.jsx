import React, {useState} from 'react'
import Logo from '../assets/roy-logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaBehanceSquare} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [mobNav, setMobNav]=useState(false)
  const handleClick =()=> setMobNav(!mobNav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#41436A] text-gray-50'>
      <div>
        <Link to="home" smooth={true} offset={50} duration={500} >
          <img  src={Logo} className='hover:scale-110' alt="logo" style={{width: '82px', borderRadius: '12px',cursor:'pointer' }}/>
        </Link>
      </div>

      {/*Menu*/}
      <div>
        <ul className='hidden md:flex'>
          
            <Link className='h-full' to="home" smooth={true} offset={50} duration={500}>
            <li className= 'h-[80px] hover:bg-[#2d2e4b] py-6 '>Home</li>
            </Link>
          
          
            <Link to="about" smooth={true} offset={50} duration={500}>
              <li className='h-[80px] hover:bg-[#2d2e4b] py-6'>About</li>
            </Link>
          
          
            <Link to="skills" smooth={true} offset={50} duration={500}>
              <li className='h-[80px] hover:bg-[#2d2e4b] py-6'> Skills</li>
            </Link>
          
            <Link to="Project" smooth={true} offset={50} duration={500}>
              <li className='h-[80px] hover:bg-[#2d2e4b] py-6'>Projects</li>
            </Link>
          
          
            <Link to="contact" smooth={true} offset={50} duration={500}>
             <li className='h-[80px] hover:bg-[#2d2e4b] py-6'>Contact</li>
            </Link>
          
        </ul>
      </div>

    {/*Hamburger*/}
    <div onClick={handleClick} className="md:hidden z-10">
      {!mobNav ? <FaBars />: <FaTimes />}
    </div>


    {/*MobileMenu*/}
      
        <ul className={!mobNav ? 'hidden': 'absolute top-0 left-0  w-full h-screen bg-[#41436A] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
              About
            </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="Project" smooth={true} offset={50} duration={500}>
              Projects
            </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      
    {/*Social Icons*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/pranitabh-roy-b18413181/" target="_blank" rel="noreferrer">LinkedIn <FaLinkedin size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/PranitabhRoy" target="_blank" rel="noreferrer">Github <FaGithub size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="mailto : roy.pranshu.pranitabh@gmail.com" target="_blank" rel="noreferrer">Email <HiOutlineMail size={30}/> </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#053eff] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.behance.net/pranitabhroy31" target="_blank" rel="noreferrer"> Behance <FaBehanceSquare size={30}/> </a>
        </li>
      </ul>
    </div>


</div>
  )
}

export default Navbar