import React from 'react';
import progamming from '../../../Images/971.jpg'
import web from '../../../Images/3000078.jpg'
import networking from '../../../Images/laptop-which-there-is-world-people-drawn.jpg'
import graphic from '../../../Images/Tiny graphic designer drawing with big pen on computer screen.jpg'
import { Link } from 'react-router-dom';

const Couress = () => {
    return (
        <div className='bg-base-200 pt-20 pb-10  '>
            <p className='text-2xl text-center font-semibold mb-20'>OUR COURSES</p>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
                <div className='lg:col-span-1 lg:ml-24 md:ml-3 ml-3 mr-2'>
                   <Link to='/progamming'> <img alt='' className='h-72 ' src={progamming}></img></Link>
                   <div className=' bg-white p-3 lg:w-96 md:w-96 w-[355px] lg:h-80 md:h-80 h-96'>
                   <h1 className='text-xl mb-5 '>Programming</h1>
                    <p className=''>The FCI ICT Club's Programming department is a hub for coding enthusiasts. Members hone their skills in languages like Python, Java, and C++, engaging in coding challenges and hands-on projects. Through workshops and collaborative learning, the department fosters a dynamic environment where members explore innovative solutions and enhance their problem-solving abilities in the realm of software development.</p>
                   </div>
                </div>
                <div className='lg:col-span-1 md:col-span-1 lg:ml-24 mt-5 lg:mt-0 md:mt-0 md:ml-2 ml-3 mr-2'>
                   <Link to='/web'> <img alt='' className='h-72 w-96' src={web}></img></Link>
                   <div className=' bg-white p-3 lg:w-96 md:w-96 w-[355px] lg:h-80 md:h-80 h-96'>
                   <h1 className='text-xl mb-5 '>Web Development</h1>
                    <p className=''>The FCI ICT Club's Web Development department is dedicated to crafting interactive and responsive websites. Members delve into front-end and back-end technologies, mastering languages like HTML, CSS, and JavaScript, along with frameworks like React and Angular. Through workshops and projects, the department encourages creativity and innovation, empowering members to design and develop engaging web applications and interfaces.</p>
                   </div>
                </div>
                <div className='lg:col-span-1 md:col-span-1 lg:ml-24 mt-5 lg:mt-0  md:ml-4 ml-3 mr-2 '>
                    <Link to='/graphic'><img alt='' className='h-72 w-96' src={graphic}></img></Link>
                   <div className=' bg-white p-3 lg:w-96 md:w-96 w-[355px] lg:h-80 md:h-80 h-96'>
                   <h1 className='text-xl mb-5 '>Graphic</h1>
                    <p className=''>The FCI ICT Club's Graphic Design department focuses on visual communication and digital media design. Members learn design principles and utilize tools like Adobe Photoshop, Illustrator, and InDesign to create compelling visuals and branding materials. Through hands-on projects and workshops, the department fosters creativity and artistic expression, equipping members with the skills to produce impactful designs for various digital platforms and print media.</p>
                   </div>
                </div>

                <div className='lg:hidden md:col-span-1 lg:ml-24 mt-5 lg:mt-0  md:ml-2 ml-3 mr-2'>
                    <img alt='' className='h-72 w-96' src={networking}></img>
                   <div className=' bg-white p-3 lg:w-96 md:w-96 w-[355px] lg:h-80 md:h-80 h-96'>
                   <h1 className='text-xl mb-3 '>Networking</h1>
                    <p className=''>The FCI ICT Club's Networking department delves into the intricacies of computer networking. Members learn about network design, configuration, troubleshooting, and security protocols. Through practical exercises and workshops, the department emphasizes the importance of robust and secure network infrastructure. Members gain hands-on experience in setting up and maintaining networks, ensuring efficient data communication and safeguarding against potential threats in the digital landscape.</p>
                   </div>
                </div>

                
                
            </div>
        </div>
    );
};

export default Couress;