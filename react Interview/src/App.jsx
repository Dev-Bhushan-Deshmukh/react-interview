import { Counter } from "./mainFolder/usestate/counter"
import { FetchdataUseeffect } from "./mainFolder/useeffect/fetchdata"

import { Theme } from "./mainFolder/context api/theme"
import { useState } from "react"
import { Parent } from "./mainFolder/context api/parent";
import { CounterUsereducer } from "./mainFolder/usereducers/CounterUsereducer";
import { Userefcomponent } from "./mainFolder/uerRef/userefcomponent";
function App() {
const[theme,setTheme]=useState("light");

  return (
<>
<Userefcomponent/>

</>
  )
}

export default App
