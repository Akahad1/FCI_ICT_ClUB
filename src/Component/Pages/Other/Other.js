import React from 'react';
import img1 from '../../../Images/FB_IMG_17138494165981430.jpg'
import img2 from '../../../Images/FB_IMG_17138494278395444.jpg'
import img3 from '../../../Images/FB_IMG_17138494311181106.jpg'
import img4 from '../../../Images/FB_IMG_17138494351034303.jpg'
import img5 from '../../../Images/Screenshot (4).png'
import './Other.css'

const Other = () => {
    return (
        <div>
            <div className="hero bg2 mt-20  lg:min-h-[80vh] md:min-h-[50vh] min-h-[40vh] mb-20 " style={{backgroundImage: 'url(https://i.ibb.co/TMz98Mq/IMG-20231225-141207.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="">
    
      <h1 className=" text-3xl text-white font-semibold  mt-4 md:ml-20 lg:ml-0">Photo Gallery</h1>
      <div className='lg:grid lg:grid-cols-3 mt-10'>
        <img src={img1} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-0 ml-3 mb-5'></img>
        <img src={img2} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-8 ml-3 mb-5'></img>
        <img src={img3} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-8 ml-3 mb-5'></img>
       
                
            
      
    </div>
      <div className='lg:grid lg:grid-cols-3 mt-10'>
        <img src={img4} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-0 ml-3 mb-5'></img>
        <img src={img2} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-8 ml-3 mb-5'></img>
        <img src={img3} alt='' className='lg:h-72 lg:w-96 md:h-72 md:w-96 h-64 w-80 rounded-lg lg:col-span-1 lg:ml-8 ml-3 mb-5'></img>
       
                
            
      
    </div>
  </div>
</div>

        

        <div className='pt-20 pb-20 bg-base-200'>
            <p className='text-xl font-semibold text-center'>PRINCIPAL'S MESSAGE​</p>

            <div>
            <div className='lg:flex md:flex md:justify-center mt-20 lg:justify-center'>
                <img src={img5} alt='' className='lg:h-96 lg:w-2/6 w-11/12 lg:ml-8 ml-3 md:ml-5 mt-3'></img>
                <div>
                    <h1 className='lg:text-2xl md:text-2xl md:ml-4 lg:ml-44 lg:mt-0 md:mt-0 mt-5 text-xl ml-3 font-bold'>Mazharul Islam Chowdhury</h1>
                    <h1 className='lg:text-2xl md:text-2xl md:ml-4 lg:ml-44 lg:mt-0 md:mt-0 mt-5 text-xl ml-3 font-semibold'>Principal of Feni Computer Institute</h1>
                    <p className='md:w-96 lg:w-96  lg:ml-44 ml-4 md:ml-4  mt-4 md:mr-3 mr-5'>The principal of the institution wholeheartedly commends the FCI ICT Club for its outstanding contributions to technological literacy and innovation among students. Recognizing the club's commitment to fostering expertise in Web Development, Programming, Graphic Design, and Networking, the principal emphasizes the importance of such platforms in preparing students for a digital future. The principal appreciates the club's efforts in organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
                </div>
            </div>
            </div>
        </div>


        <div className='mt-10 mb-20'>
        <p className='text-3xl font-bold text-center  mt-8 mb-8'>STUDENT SAYS</p>

        <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full bg-slate-600">
       
    <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-6 ml-5 mr-6 bg-white '>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Ashraful Islam</p>
        </div>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-2 ml-5 mr-6 bg-white lg:inline md:inline hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>Consistency is the most important thing for a programmer. Before joining programming hero web development course. .</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Abdullah An-Noor</p>
        </div>

        <div className='lg:h-60 lg:w-96 mt-20 lg:ml-24 md:ml-24 ml-5 mr-6 bg-white lg:inline md:hidden hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>I tried to learn web development but the thing was I always loosed my consistency and It was frustratingy.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold '>Labib Ahmed</p>
        </div>


    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle text-black">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full bg-slate-600">
  <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-6 ml-5 mr-6 bg-white '>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Shikve Khan</p>
        </div>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-2 ml-5 mr-6 bg-white lg:inline md:inline hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Muhammad</p>
        </div>

        <div className='lg:h-60 lg:w-96 mt-20 lg:ml-24 md:ml-24 ml-5 mr-6 bg-white lg:inline md:hidden hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold '>Parvez Rahman</p>
        </div>


    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full bg-slate-600">
  <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-6 ml-5 mr-6 bg-white '>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Rakiv Khan</p>
        </div>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-2 ml-5 mr-6 bg-white lg:inline md:inline hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Nahid</p>
        </div>

        <div className='lg:h-60 lg:w-96 mt-20 lg:ml-24 md:ml-24 ml-5 mr-6 bg-white lg:inline md:hidden hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold '>Farhan</p>
        </div>


    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full bg-slate-600">
  <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-6 ml-5 mr-6 bg-white '>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Saki Khan</p>
        </div>
        <div className='lg:h-60 lg:w-96 md:w-96 md:h-60 mt-20 lg:ml-24 md:ml-2 ml-5 mr-6 bg-white lg:inline md:inline hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold'>Monsur </p>
        </div>

        <div className='lg:h-60 lg:w-96 mt-20 lg:ml-24 md:ml-24 ml-5 mr-6 bg-white lg:inline md:hidden hidden'>
          <p className=' text-5xl ml-5 mt-2'>“</p>    
         <p className=' ml-7 mr-8'>organizing workshops, projects, and collaborative initiatives that not only enhance technical skills but also promote teamwork and creativity.</p>
         <p className=' text-5xl ml-80 mt-1'>“</p>   
          <p className=' text-xl ml-60 mt-1 font-semibold '>Nishat</p>
        </div>


    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>


            
        </div>
    );
};

export default Other;