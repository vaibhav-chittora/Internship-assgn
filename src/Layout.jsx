import React from 'react'
import Header from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'
import Carousel from './components/Carousel/Carousel'



function Layout() {
    return (
        <>
            <Header />
            {/* <Carousel/> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout