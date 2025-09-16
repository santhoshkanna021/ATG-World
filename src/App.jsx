import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainpage from './pages/Mainpage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />   // ✅ lowercase 'element'
  },

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
