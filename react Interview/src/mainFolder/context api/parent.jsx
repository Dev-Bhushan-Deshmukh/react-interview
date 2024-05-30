// Create a context provider for theming with a theme context and two themes: light and dark.
// Implement a component that consumes the theme context using the useContext hook to dynamically apply the selected theme.


import React from 'react'
import { CHild1 } from './CHild1'
import { Child2 } from './Child2'
import { useContext } from 'react'
import { Theme } from './theme'
export const Parent = () => {
    const[theme,setTheme]=useContext(Theme)
 
    let themeColor={
        light:'green',
        dark:'blue'
    }
  return (
    <div>parent:{theme}
<button onClick={()=>setTheme(theme=='light'?'dark':'light')} style={{color:themeColor[theme]}}>change</button>
<Child2/>
<CHild1/>

    </div>
  )
}
