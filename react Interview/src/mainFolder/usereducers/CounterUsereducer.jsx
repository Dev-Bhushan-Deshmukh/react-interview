import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type=='increment')
        {
           return{
            counter:state.counter+1
           }
        }
        else{
            return{

                counter:state.counter-1
            }
        }

}

export const CounterUsereducer = () => {

    const[state,dispatch]=useReducer(reducer,{counter:0})
  return (
    <div>CounterUsereducer
{state.counter}

<button onClick={()=>dispatch({type:'increment'})}></button>
<button onClick={()=>dispatch({type:'decrement'})}></button>

    </div>
  )
}
