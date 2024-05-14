import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/Aboutus.jsx'
import Sellonecoyaan from './components/Sellonecoyaan/Sellonecoyaan.jsx'
import Careers from './components/Careers/Careers.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='sell-On-Ecoyaan' element={<Sellonecoyaan />} />
      <Route path='careers' element={<Careers />} />

    </Route>
  )

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
