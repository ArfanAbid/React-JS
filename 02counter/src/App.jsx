// learning state in react

import { useState } from 'react'

import './App.css'

function App() {
  //let [variable,function]=useState() -> Hooks
    let [counter,setCounter]=useState(10) // --> Hooks
    
    // let counter=15 // previously
    const addValue= () =>{
      // counter=counter+1  previously
      setCounter(counter+1)
    }

    const removeValue=() =>{ 
      /*will be done one time or use callbacks
      setCounter(counter-1)
      setCounter(counter-1)
      setCounter(counter-1)
      setCounter(counter-1)
      setCounter(counter-1)*/

      // using callbacks

      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
      setCounter((prevCounter)=>prevCounter-1)
    }

  return (
    <>

    <h1>React Course {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer: {counter}</p>

    </>
  )
}

export default App
