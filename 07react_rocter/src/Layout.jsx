import React from 'react'
import Header from './componentes/Header/Header'
import Footer from './componentes/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>  
    </>
  )
}

export default Layout
