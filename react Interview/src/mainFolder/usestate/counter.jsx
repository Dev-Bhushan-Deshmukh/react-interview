
//Counter using usestate
import React from 'react'

import { useState } from 'react';

export  const Counter=()=>{
const[counter,setCounter]=useState(0);
    return(
<>
<span>Count={counter}</span> <br />
<button onClick={()=>setCounter( Math.max(counter-1,0) )}>-</button> <button onClick={()=>setCounter(prev=>prev+1)} >+</button>





</>





    )



}