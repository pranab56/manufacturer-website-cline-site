import React, { useEffect, useState } from 'react';

const Test = () => {
    const limit = 10;
    const [addition,setAddition] = useState(0);
    const handleIncrease = ()=>{
        if(addition < limit){
            setAddition(addition + 1)
        }
       
    }
    const handleDecrease = ()=>{
       if(addition > 0){
        setAddition(addition -1);
       }
    }
    return (
        <div>
            <h1>Total: {addition}</h1>
            <button className='btn btn-danger' onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease} className='btn btn-primary'>Increase</button>
        </div>
    );
};

export default Test;