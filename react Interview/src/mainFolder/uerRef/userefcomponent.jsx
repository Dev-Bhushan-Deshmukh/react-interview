import React, { useRef } from 'react'

export const Userefcomponent = () => {
    let inputRef=useRef(null)
  return (
    <div>userefcomponenU

<input type="text" ref={inputRef} /> <button onClick={()=>inputRef.current.focus()}>focus</button>




    </div>
  )
}
