import React from 'react';
import img1 from '../../../Images/FB_IMG_17138493746219754.jpg'

const About = () => {
    return (
        <div className='mt-20 mb-20'>
            <div>
                <h1 className='font-bold text-3xl text-center'>ABOUT US</h1>
                <p className='text-center '>Feni ICT Club,Feni</p>
            </div>

            <div className='lg:flex md:flex md:justify-center mt-20 lg:justify-center'>
                <img src={img1} alt='' className='lg:h-96 lg:w-2/6 w-11/12 lg:ml-8 ml-3 md:ml-5 mt-3'></img>
                <div>
                    <h1 className='lg:text-2xl md:text-2xl md:ml-4 lg:ml-44 lg:mt-0 md:mt-0 mt-5 text-xl ml-3 font-bold'>Welcome to FCI ICT Club</h1>
                    <p className='md:w-96 lg:w-96  lg:ml-44 ml-4 md:ml-4  mt-4 md:mr-3 mr-5'>The FCI ICT Club is a vibrant organization with four specialized departments: Web Development, Programming, Graphic Design, and Networking. The Web Development team focuses on creating responsive websites using languages like HTML, CSS, and JavaScript. In Programming, members sharpen their coding skills in languages such as Python, Java, and C++, tackling coding challenges and projects. The Graphic Design department explores visual communication and digital media design using tools like Adobe Photoshop and Illustrator. Lastly, the Networking department delves into network design, configuration, and security, ensuring robust and secure computer networks.</p>
                </div>
                
            </div>
        </div>
    );
};

export default About;