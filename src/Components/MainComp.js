import React from 'react';
import Hero from './Hero';
import SecondPage from './SecondPage';
import Social from './Social';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainComp() {
    window.addEventListener('wheel', (event)=>{
        console.log(event.deltaY);
    });
    return ( 
        <div className='bg-dark text-white'>
            <Router>
                <Routes>
                    <Route path = "/" element= {<Hero/>} />
                    <Route path = "/terminal" element ={<SecondPage/>}/>
                    <Route path = "/social" element ={<Social/>}/>
                </Routes>
            </Router>
        </div>
     );
}

export default MainComp;