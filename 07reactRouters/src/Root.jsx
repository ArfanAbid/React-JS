import React from 'react'
import Header from './Components/Hearder/Header'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Root


// Also can be done in App.jsx