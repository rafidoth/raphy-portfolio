import React from 'react';
import shape from '../../Assets/Images/shapeBlur.png'
import cyanShape from '../../Assets/Images/cyanshape.png'




function BlurBlock(props) {
    const blurAmount = " blur-[100px] opacity-[0.5]" 
    return ( 
        <div>
            {(props.color)? <img src={shape} alt="orange" className={blurAmount}/> :<img alt ="cyan" src={cyanShape} className={blurAmount}/>}      
        </div>
    );
}

export default BlurBlock;