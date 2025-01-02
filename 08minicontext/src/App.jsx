import './App.css'
import UserContext from './Context/userContext'
import UserContextProvider from './Context/usercontextprovider'
import React from 'react'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <UserContextProvider>
    <h1>React with Chai and share is important</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
