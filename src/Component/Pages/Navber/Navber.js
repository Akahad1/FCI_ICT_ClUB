import React, { useState } from 'react';
import { BiSolidInstitution } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import logo from '../../../Images/Fci-ict-club-logo.jpg'
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import '../../../App.css'
import './Navber.css'
const Navber = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredCouress, setIsHoveredCouress] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleMouseEnterCouress = () => {
      setIsHoveredCouress(true);
    };
  
    const handleMouseLeaveCouress = () => {
      setIsHoveredCouress(false);
    };


    return (
        <div>
            {/* 1stNabver */}
            <div className='bg-black  lg:flex  md:flex'>
                <p className='lg:text-xl  md:text-xl text-white p-3'><BiSolidInstitution 
                className='inline lg:text-3xl text-xl md:text-3xl' /> Welcome to Feni Computer Institute ICT Club</p>
                <div className=' flex justify-center  lg:p-3 md:p-3 pb-3 lg:ml-auto md:mr-10 lg:mr-10 md:ml-auto'>

                <FaFacebook  className='lg:text-3xl md:text-3xl text-2xl  text-white'/>
                <button className='text-white lg:text-xl md:text-xl lg:ml-6 md:ml-8 ml-5'>Apply Now</button>

                </div>

            </div>

            {/* 2nd navber */}

            <div >
                <div className='lg:ml-10 ml-5 flex'>
                    <img alt=' logo' src={logo} className='lg:h-32 md:h-32 lg:w-32 md:w-32  h-24 w-24 rounded' ></img>
                    <p className='mt-5 md:mt-8 md:text-xl text-xl lg:text-3xl'>Feni Computer Institute <br/>ICT Club</p>

                    <div className='flex lg:ml-auto lg:mr-24'>
                    <div className='hidden md:flex md:ml-5 mt-10  lg:flex lg:mr-40'>
                    <IoMailOpenOutline  className='text-5xl mr-3'/>
                    <p >  <span className='font-bold'>Mail Us</span> <br/> fciictclub@gmail.com</p>
                    </div>
                    <div className='hidden md:flex md:ml-5 mt-10 lg:flex'>
                    <FiPhoneCall  className='text-5xl mr-3'/>
                    <p >  <span className='font-bold'>Mail Us</span> <br/>+8801511897** </p>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* 3nd navber */}

            <div className=''>

            <div className="navbar bg-black p-2  sticky top-0">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-80">
        <li><p className=' text-xl text-white'><Link to='/sed'>Home</Link></p></li>
        
        


      </ul>
    </div>
    
  </div>
  <div className=" hidden lg:flex ml-20">
    <p className='mr-20 text-xl text-white'><Link to='/'>Home</Link></p>
    <p onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }} className='mt-3 w-32 flex text-xl text-white'>About Us <RiArrowDropDownLine className='h-10 w-10  ' /></p>
        {isHovered && (
        <div 
        className='absolute border-gray-800 bg-black border-2 p-5 mt-[-40px] ml-32'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
          <Link to='/why'><p className='text-sky-600'>WHY US</p></Link>
         <Link to='/faculty'> <p className='text-sky-600 mt-5'>FACULTY</p></Link>
         <Link to='/governing'> <p className='text-sky-600 mt-5 mb-10'>Governing Body</p></Link>
        </div>
      )}
    <p onMouseEnter={handleMouseEnterCouress} 
        onMouseLeave={handleMouseLeaveCouress}
        style={{ cursor: 'pointer' }} className='text-white mt-3 w-32 flex ml-20 text-xl '>Couress <RiArrowDropDownLine className='h-10 w-10 ' /></p>
        {isHoveredCouress && (
        <div 
        className='absolute  border-gray-800 z-20 h-44 bg-black  border-2 p-5 mt-[-40px] ml-80'
        onMouseEnter={handleMouseEnterCouress} 
        onMouseLeave={handleMouseLeaveCouress}
        >
          <Link to='/web'><p className='text-sky-600'>Web Development</p></Link>
          <Link to='/progamming'><p className='text-sky-600 mt-5'>Programming </p></Link>
          <Link to='/graphic'><p className='text-sky-600 mt-5 mb-10'>Graphic Design</p></Link>
        </div>
      )}

    
    
    
    
  </div>
  <div className="navbar-end ml-24 lg:ml-44">
  <p><Link className='lg:text-xl text-white' to='/contact'>Contact Us</Link></p>
  </div>
</div>

                
            </div>





        </div>
    );
};

export default Navber;