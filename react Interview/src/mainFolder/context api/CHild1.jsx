import React from 'react'
import { useContext } from 'react'
import { Theme } from './theme'
export const CHild1 = () => {
    
    const[theme,setTheme]=useContext(Theme)
    
    let themeColor={
        light:'green',
        dark:'blue'
    }
  return (
    <>

    
<div>CHild1:{theme}</div> <button onClick={()=>setTheme(theme=='light' ?'dark':'light')} style={{color:themeColor[theme]}}>change</button>
    </>
  )
}
