import React from 'react';
import img1 from '../../../Images/FB_IMG_17138493746219754.jpg'
import img2 from '../../../Images/FB_IMG_17138494278395444.jpg'

const WhyUS = () => {
    return (
        <div>
            <div className='mt-20 mb-20'>
           

            <div className='lg:flex md:flex md:justify-center mt-20 lg:justify-center'>
                <img src={img1} alt='' className='lg:h-96 lg:w-2/6 w-11/12 lg:ml-8 ml-3 md:ml-5 mt-3'></img>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl md:ml-4 lg:ml-44 lg:mt-0 md:mt-0 mt-5 text-xl ml-3 font-bold'>WHY US</h1>
                    <div className="divider h-1 w-24 lg:bg-red-700 md:ml-4 lg:ml-44 ml-3"></div> 
                    <p className='md:w-96 lg:w-96  lg:ml-44 ml-4 md:ml-4  mt-4 md:mr-3 mr-5'>The FCI ICT Club develops as a response to the growing importance of Information and Communication Technology (ICT) in today's digital world. Recognizing the need for students to acquire practical skills and knowledge in areas like Web Development, Programming, Graphic Design, and Networking, the club offers a platform for hands-on learning and exploration. Through workshops, projects, and collaborative activities, the club fosters innovation, creativity, and problem-solving abilities among its members. By continuously adapting to technological advancements and industry trends, the club ensures that students are well-equipped to meet the demands of the evolving ICT landscape.</p>
                </div>
            </div>
        </div>
            <div className='pt-10 pb-20 bg-base-200'>
           

            <div className='lg:flex md:flex md:justify-center mt-20 lg:justify-center'>
                
                <div>
                    <h1 className='lg:text-3xl md:text-2xl md:ml-4 lg:ml-8 ml-3  lg:mt-0 md:mt-0 mt-5 text-xl  font-bold'>OUR MISSION</h1>
                    <div className="divider h-1 w-24 lg:bg-red-700 lg:ml-8 ml-3 md:ml-5 "></div> 
                    <p className='md:w-96 lg:w-96 lg:ml-8 ml-3 md:ml-5   mt-4 md:mr-3 mr-5'>Our mission at the FCI ICT Club is to empower students with practical skills and knowledge in Information and Communication Technology (ICT). We aim to foster innovation, creativity, and problem-solving abilities through hands-on learning experiences in Web Development, Programming, Graphic Design, and Networking. By providing a collaborative platform for exploration and growth, we strive to prepare students for a digital-centric future and equip them with the tools and confidence to succeed in the evolving ICT landscape. We are committed to promoting interdisciplinary learning, embracing technological advancements, and inspiring a passion for excellence in technology education among our members.</p>
                </div>
                <img src='https://i.ibb.co/Bj15VGY/IMG-20231225-141505.jpg' alt='' className='lg:h-96 lg:w-2/6 w-11/12 lg:ml-44 ml-4 md:ml-4  mt-3'></img>
            </div>
        </div>

        <div className='mt-20 mb-20'>
           

            <div className='lg:flex md:flex md:justify-center mt-20 lg:justify-center'>
                <img src={img2} alt='' className='lg:h-96 lg:w-2/6 w-11/12 lg:ml-8 ml-3 md:ml-5 mt-3'></img>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl md:ml-4 lg:ml-44 lg:mt-0 md:mt-0 mt-5 text-xl ml-3 font-bold'>OUR VISION</h1>
                    <div className="divider h-1 w-24 lg:bg-red-700 md:ml-4 lg:ml-44 ml-3"></div> 
                    <p className='md:w-96 lg:w-96  lg:ml-44 ml-4 md:ml-4  mt-4 md:mr-3 mr-5'>Our vision at the FCI ICT Club is to be a leading hub for technological innovation and excellence. We aspire to cultivate a dynamic learning environment where students can explore and master the latest trends and tools in Web Development, Programming, Graphic Design, and Networking. By fostering a culture of collaboration, creativity, and continuous learning, we aim to inspire the next generation of ICT professionals who are equipped to drive positive change and make meaningful contributions to the digital world. We envision a future where our members are industry-ready, innovative thinkers, and lifelong learners committed to pushing the boundaries of technology.</p>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default WhyUS;