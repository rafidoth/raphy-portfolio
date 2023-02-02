import React from 'react';
import HeroImg from '../Assets/Images/heropic.svg';

function HeroImage() {
    return ( 
        <div className='w-[248px] h-[335px]'>
            <img src={HeroImg} alt="mainHeroImage" className='relative after:absolute ' />
        </div>
     );
}

export default HeroImage;