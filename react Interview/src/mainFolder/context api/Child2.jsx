import React from 'react'
import { useContext } from 'react'
import { Theme } from './theme'
export const Child2 = () => {
    
    const[theme,setTheme]=useContext(Theme)
    let themeColor={
        light:'green',
        dark:'blue'
    }


  return (

    <>
    
    <div>Child2:{theme}</div> 
    <button onClick={()=>setTheme(theme=='light'?'dark':'light')}  style={{color:themeColor[theme]}}>change</button>
    
    </>
  )
}
