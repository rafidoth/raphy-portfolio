import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return ( 
        <div className=' w-1/3 h-full px-3 hidden lg:flex flex-col items-end justify-center font-valofont text-3xl xl:text-5xl'>
                <Link to='/'>Home</Link>
                <Link to='terminal'>Terminal</Link>
                <Link to='/social'>Social</Link>
        </div>
     );
}

export default Menu;