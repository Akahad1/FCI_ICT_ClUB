import React from 'react';
import Banner from '../Banner/Banner';
import About from '../AboutUs/About';
import Couress from '../Couress/Couress';
import Other from '../Other/Other';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <About></About>
           <Couress></Couress>
           <Other></Other>
        </div>
    );
};

export default Home;