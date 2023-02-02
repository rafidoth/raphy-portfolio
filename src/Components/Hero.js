import React from 'react';
import Heading from './Heading';
import Menu from './Menu';
import HeroImage from './HeroImage';
import Rafi from './Rafi';
import BlurBlock from './Lib/BlurBlock';

function Hero() {
    return ( 
        <div className='container  mx-auto w-screen h-screen overflow-hidden'>
            <div className='w-full h-1/3  flex flex-col-reverse z-10'>
                <Heading/>
            </div>
            <div className='w-full h-[335px]  flex flex-col items-center lg:flex-row lg:justify-center relative '>
                <BlurBlock/>
                <Menu/>
                <HeroImage/>
                <Rafi/>
            </div>
        </div>
     );
}

export default Hero;