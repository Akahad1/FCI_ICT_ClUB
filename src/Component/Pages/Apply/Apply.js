import React from 'react';

const Apply = () => {
    return (
        <div>
            <p className='text-3xl text-center mt-8'>ADMISSION FORM</p>
            <div className='lg:grid lg:grid-cols-2 ml-6 mr-5 lg:ml-0 lg:mr-0'>
               <div className='lg:ml-20 mt-14 mb-14 lg:mr-8'>
               <h1 className='text-2xl '>Student Details</h1>
            <p className='mt-3'>Student Name:</p>
            <input type="text"  className='h-8  mt-2 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your  Name'/>
            <p className='mt-5'>Student Number :</p>
            <input type="number"  className= 'mt-2   h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Number'/>
            <p className='mt-5'>Student Email Id:</p>
            <input type="email"  className='mt-2   h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Email'/>
            <p className='mt-5'>Student Date of Birth:</p>
            <input type="date"  className='mt-2  h-8 w-full  border rounded-sm border-sky-600' placeholder='Enter Your First Name'/>
            <p className='mt-5'>Gender</p>
            <select name="" id="" className='mt-2  h-8 w-full pl-2  border rounded-sm border-sky-600' >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
            </select>
            <p className='mt-5'>Select Course</p>
            <select name="" id="" className='mt-2  h-8 w-full pl-2  border rounded-sm border-sky-600' >
                <option value="web">Web Development</option>
                <option value="progamming">Progamming</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="networking">NetWorking</option>
            </select>

            <p className='mt-5'>Student Images:</p>
            <input type="text"  className='mt-2  h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Images link'/>
            <p className='mt-5'> Student Address:</p>
            

            <textarea name="" id=""  className=' w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Address'></textarea>
               </div>

               <div className='lg:ml-20 mt-14 mb-14 lg:mr-8'>
               <h1 className='text-2xl '>Guardian Details</h1>

               <p className='mt-3'>Guardian Name:</p>
            <input type="text"  className='mt-2  h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your  Name'/>
            <p className='mt-5'>Guardian Number :</p>
            <input type="number"  className='mt-2  h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Number'/>
            <p className='mt-5'>Guardian Email Id:</p>
            <input type="email"  className='mt-2  h-8 w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Email'/>

            <p className='mt-5'> Guardian Address:</p>
            

            <textarea name="" id=""  className=' w-full p-2 border rounded-sm border-sky-600' placeholder='Enter Your Address'></textarea>

            <button className='w-full btn-secondary btn mt-5'>Submit </button>

               </div>
             </div>
        </div>
    );
};

export default Apply;