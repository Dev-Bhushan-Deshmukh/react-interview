import { Counter } from "./mainFolder/usestate/counter"
import { FetchdataUseeffect } from "./mainFolder/useeffect/fetchdata"

import { Theme } from "./mainFolder/context api/theme"
import { useState } from "react"
import { Parent } from "./mainFolder/context api/parent";
import { CounterUsereducer } from "./mainFolder/usereducers/CounterUsereducer";
function App() {
const[theme,setTheme]=useState("light");

  return (
<>
<CounterUsereducer/>
</>
  )
}

export default App
