import React from 'react'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import { Route, 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements } from 'react-router-dom'
import Mainoutlet from './outlets/Mainoutlet'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainoutlet />}>
        <Route index element={<Homepage />} />
        <Route path='/register' element={<Register />}/>
      </Route>
    )
  )
const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App
