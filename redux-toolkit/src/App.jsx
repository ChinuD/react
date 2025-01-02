import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </ Provider>
  )
}
export default App
