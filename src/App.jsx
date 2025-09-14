import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainpage from './pages/Mainpage'
import AuthForm from './components/Authform'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />   // ✅ lowercase 'element'
  },
  {
    path:"/Signup",
    element:<AuthForm/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
