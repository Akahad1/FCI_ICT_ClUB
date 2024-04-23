import React from 'react';
import '../../../App.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            
            <div className="hero  z-10 lg:min-h-[90vh] md:min-h-[50vh] min-h-[40vh]  brightness-[0.75] " style={{backgroundImage: 'url(https://i.ibb.co/TMz98Mq/IMG-20231225-141207.jpg)'}   }>
            
             <h1 className='lg:text-4xl font-bold text-white text-sm text-center mb-20'>FENI COMPUTER INSTITUTE  <br /> INFORMATION AND COMMUNICATION TECHONOLOGY <br className='mt-4 mb-4'/> CLUB</h1>

             <div>
                <Link><button className=' text-white bg-black lg:p-4 md:p-4 p-3 rounded-xl lg:mt-60 md:mt-54 mt-40 '>Read More</button></Link>
                <Link><button className='btn mt-32 ml-20'>Apply Now</button></Link>
             </div>
            </div>

            {/* <img alt=' ' src='https://i.ibb.co/TMz98Mq/IMG-20231225-141207.jpg' className='h-full w-full'></img> */}
        </div>
    );
};

export default Banner;