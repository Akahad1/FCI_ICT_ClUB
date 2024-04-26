import React, { useState } from 'react';
import { CiClock2 } from 'react-icons/ci';
import { MdAssignment, MdCastForEducation } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/971.jpg'
import pdf from '../../../Images/COMPUTER PROGRAMMING.pdf'

const Programming = () => {
    const [togol ,setTogol]=useState('description')
    return (
        <div>

<div className='mt-20 mb-20  lg:grid lg:grid-cols-2'>
           <div className='lg:col-span-1 '>
           <img src={img1} alt='' className='lg:h-96 lg:w-10/12 md:w-6/6  w-11/12 lg:ml-auto ml-3 md:ml-8 mt-3'></img>

           <div className='flex pb-10 lg:mb-0 lg:pb-10 lg:ml-32 md:ml-8 lg:mr-0 md:mr-9 ml-3 mr-5  pt-6 bg-base-300'>
        <p onClick={()=>setTogol('description')} className={`${togol=== 'description'?'text-xl lg:ml-10 bg-white text-red-600 p-3 rounded-lg font-semibold':'text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg font-semibold '}`}>Description</p>

        <p onClick={()=>setTogol('syllabus')} className={`${togol=== 'syllabus'?'text-xl lg:ml-10 bg-white text-red-600 p-3 font-semibold rounded-lg':'text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg font-semibold'}`}> Syllabus</p>
        
        <p onClick={()=>setTogol('rules')} className={`${togol=== 'rules'?'text-xl lg:ml-10 bg-white text-red-600 p-3 rounded-lg font-semibold':'font-semibold text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg'}`}> Rules</p>

        <Link to='/apply'><p className='text-xl lg:ml-16 bg-slate-200 font-semibold p-3 rounded-lg lg:inline md:inline hidden lg:mt-5'>Apply Now</p></Link>


       </div>

       {togol==='description'&&
        <div className='bg-base-300 lg:ml-32 p-8 md:ml-8 md:mr-9 ml-3 mr-5 lg:mr-0'>
        <p className='mb-2 text-xl'>Programming Description</p>
        <p >The FCI ICT Club's Programming department is a vibrant community dedicated to mastering coding languages and problem-solving techniques. Through workshops, coding competitions, and collaborative projects, members explore languages such as Python, Java, and C++, honing their skills and deepening their understanding of software development. Emphasizing algorithmic thinking and best coding practices, the department fosters creativity and innovation in solving real-world challenges. Members engage in peer-to-peer learning, mentorship programs, and industry guest lectures to stay abreast of the latest trends and technologies. With a focus on cultivating a passion for coding and equipping members with practical skills, the Programming team prepares students for success in diverse career paths within the ever-evolving field of programming and software engineering.</p>


       </div>
       }
       {togol==='syllabus'&&
        <div className='bg-base-300 lg:ml-32 p-8 md:ml-8 md:mr-9 ml-3 mr-5 lg:mr-0'>
        <p className='mb-2 text-xl'>Programming Syllabus</p>
        <p >Download Web Syllabus <a href={pdf} download='pdf' >Download</a></p>


       </div>
       }
       {togol==='rules'&&
        <div className='bg-base-300 lg:ml-32 p-8 md:ml-8 md:mr-9 ml-3 mr-5 lg:mr-0'>
        <p className='mb-2 text-xl'>Rules</p>
        <p >1, Respect: Treat all members with respect and professionalism, fostering a welcoming and inclusive environment for everyone.<br/>
2, Participation: Actively engage in club activities, workshops, and projects to maximize learning and contribution.<br/>
3, Collaboration: Encourage teamwork and collaboration among members, promoting knowledge sharing and collective problem-solving.<br/>
4, Attendance: Attend club meetings, events, and workshops regularly, notifying the club leadership in case of absence.<br/>
5, Code of Conduct: Adhere to the club's code of conduct, maintaining integrity, honesty, and ethical behavior in all interactions and projects.<br/>
6, Responsibility: Take ownership of assigned tasks and responsibilities, meeting deadlines and commitments to the best of one's ability.<br/>
7, Learning: Continuously strive for personal and professional growth, seeking out opportunities to expand skills and knowledge in ICT fields.<br/>
 8, Respect for Resources: Treat club resources, equipment, and facilities with care and responsibility, ensuring their proper use and maintenance.<br/></p>


       </div>
       }
           </div>










           <div className='  md:ml-16  lg:col-span-1'>
               
               <div className='bg-gray-800 md:mt-5 lg:ml-44 p-8 lg:w-96 md:w-11/12 w-11/12 mt-6 lg:mt-0 md:ml-0 ml-5'>
                  <p className='text-xl text-white mb-4'>Course Features</p>
                  <div className='flex'><p className='text-xl text-white '> <CiClock2 className='inline mr-3 ' />Duration</p>
                  <p className='text-white ml-32  md:ml-96 lg:ml-32 text-xl'>1 year</p>
                  </div>
                  <div className="divider h-1  w-40 bg-white  "></div> 
                  <div className='flex'><p className='text-xl text-white '> <MdCastForEducation className='inline mr-3 ' />Education</p>
                  <p className='text-white ml-32  md:ml-96 lg:ml-32  text-xl'>Yes</p>
                  </div>
                  <div className="divider h-1  w-40 bg-white  "></div> 
                  <div className='flex'><p className='text-xl text-white '> <PiStudentFill className='inline mr-3 ' />Students</p>
                  <p className='text-white ml-[124px] lg:ml-[124px] md:ml-96  text-xl'>Unlimited</p>
                  </div>
                  <div className="divider h-1  w-40 bg-white  "></div> 
                  <div className='flex'><p className='text-xl text-white '> <MdAssignment className='inline mr-3 ' />Assessments</p>
                  <p className='text-white ml-32 md:ml-96 lg:ml-32 text-xl'>10</p>
                  </div>
                  <div className="divider h-1  w-40 bg-white  "></div> 
               </div>
           </div>
       </div>
            
        </div>
    );
};

export default Programming;