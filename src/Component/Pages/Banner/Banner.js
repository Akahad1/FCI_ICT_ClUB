import React from 'react';
import '../../../App.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero lg:min-h-[80vh] md:min-h-[50vh] min-h-[40vh]  " style={{backgroundImage: 'url(https://i.ibb.co/TMz98Mq/IMG-20231225-141207.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className=" text-2xl  text-center">FENI COMPUTER INSTITUTE <br/> INFORMATION AND COMMUNICATION TECHONOLOGY  CLUB</h1>
      <div className='mt-10'>
                <Link><button className=' text-white bg-black lg:p-4 md:p-4 p-3 rounded-xl  md:mt-54  '>Read More</button></Link>
                <Link><button className='btn  ml-20'>Apply Now</button></Link>
             </div>
      
    </div>
  </div>
</div>



            
            

         
        </div>
    );
};

export default Banner;