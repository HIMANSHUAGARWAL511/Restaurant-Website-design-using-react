import React from 'react'
import Restaurent from "./component/basics/Restaurent"
const App = () => {
  return (
    <Restaurent />
  )
}


//How react is actually looking into it

/*const App = () => {
  return React.createElement("div", {}, React.createElement("h1", {}, "Hello world"))
}*/
export default App