import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { StrictMode } from "react"
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import { Route } from "react-router-dom"
import Github from "./components/Github/Github.jsx"
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path="" element = {<Home/>}></Route>
      <Route path="about" element = {<About/>}></Route>
      <Route path="contact" element = {<Contact/>}></Route>
      <Route path="user/:userid" element = {<User/>}></Route>
      <Route path="github" element = {<Github/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
