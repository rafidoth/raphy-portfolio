import React, {useState} from 'react';
import BlurBlock from './BlurBlock';

function Gradient() {
    const [coOrds, setCoOrds] = useState([0,0]);

    let coOrdinates = {
        right : `${coOrds[0]}vw`,
        bottom : `${coOrds[1]}vh`,
    }

    const handleAnimation = ()=>{
        let x = Math.floor(Math.random()*91);
        let y = Math.floor(Math.random()*91);
        setCoOrds([x,y]);
    }
    

    return ( 

        <div>
            <div  onClick={handleAnimation} style={coOrdinates} className = {`absolute`}>
                <BlurBlock color ={0}  />
            </div>
        </div>
     );
}

export default Gradient;