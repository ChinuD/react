import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../../02counter/src/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Hitesh",
    age: 21
  }

  let myArr = []
  return (
    <>
    <Card channel="chaiaurCode" someObj={myObj}/>
    </>
  )
}

export default App
