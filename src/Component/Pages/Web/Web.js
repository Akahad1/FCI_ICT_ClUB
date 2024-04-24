import React, { useState } from 'react';
import img1 from '../../../Images/laptop-which-there-is-world-people-drawn.jpg'
import { CiClock2 } from "react-icons/ci";
import { MdAssignment } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md"

const Web = () => {

    const [togol ,setTogol]=useState('')
    console.log(togol)
    return (
        <div>
            <div className='mt-20 mb-20'>
           

           <div className='lg:flex  md:ml-16 mt-20 lg:justify-center'>
               <img src={img1} alt='' className='lg:h-96 lg:w-2/6 md:w-6/6  w-11/12 lg:ml-8 ml-3 md:ml-0 mt-3'></img>
               <div className='bg-gray-800 md:mt-5 lg:ml-44 p-8 lg:w-96 md:w-11/12 w-11/12 mt-6 lg:mt-0 md:ml-0 ml-5'>
                  <p className='text-xl text-white mb-4'>Course Features</p>
                  <div className='flex'><p className='text-xl text-white '> <CiClock2 className='inline mr-3 ' />Duration</p>
                  <p className='text-white ml-32  md:ml-96 lg:ml-32 text-xl'>6 Month</p>
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

       <div className='flex mb-10 lg:ml-52'>
        <p onClick={()=>setTogol('description')} className={`${togol=== 'description'?'text-xl lg:ml-10 bg-slate-200 text-red-600 p-3 rounded-lg font-semibold':'text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg font-semibold'}`}>Description</p>

        <p onClick={()=>setTogol('syllabus')} className={`${togol=== 'syllabus'?'text-xl lg:ml-10 bg-slate-200 text-red-600 p-3 font-semibold rounded-lg':'text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg font-semibold'}`}> Syllabus</p>
        
        <p onClick={()=>setTogol('rules')} className={`${togol=== 'rules'?'text-xl lg:ml-10 bg-slate-200 text-red-600 p-3 rounded-lg font-semibold':'font-semibold text-xl lg:ml-10 bg-slate-200 p-3 rounded-lg'}`}> Rules</p>

        <p className='text-xl lg:ml-16 bg-slate-200 font-semibold p-3 rounded-lg'>Apply Now</p>


       </div>
            
        </div>
    );
};

export default Web;