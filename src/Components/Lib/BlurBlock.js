import React from 'react';


function BlurBlock() {
    return ( 
        <div className='absolute z-0 opacity-50 animate-spin-slow'>
            <div className='w-[400px] h-[20px] -rotate-45 blur-2xl bg-blue  '></div>
            <div className='w-[400px] h-[20px] -rotate-45 blur-2xl bg-blue  '></div>
            <div className='w-[400px] h-[20px] rotate-45 blur-2xl bg-red  '></div>
            <div className='w-[400px] h-[20px] rotate-45 blur-2xl bg-red '></div>
            <div className='w-[400px] h-[20px]  blur-2xl bg-blue '></div>
            <div className='w-[400px] h-[20px]  blur-2xl bg-red '></div>
        </div>
    );
}

export default BlurBlock;