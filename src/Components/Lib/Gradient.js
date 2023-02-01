import React from 'react';
import BlurBlock from './BlurBlock';

function Gradient() {
    return ( 

        <div>
            <div  className = {`absolute`}>
                <BlurBlock color ={0}  />
            </div>
        </div>
     );
}

export default Gradient;