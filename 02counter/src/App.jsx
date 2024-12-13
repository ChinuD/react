import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
  } 
  const subtractValue = () =>{
    if(counter>0){
      setCounter(counter-1)
    }
  } 
  const clear = () =>{
    setCounter(counter - counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subtractValue}>Remove Value {counter}</button>
      <br />
      <button onClick={clear}>Clear {counter}</button>
    </>
  )
}

export default App
