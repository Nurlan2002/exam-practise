import React from 'react'
import Navbar from '../companents/Navbar'
import {Outlet} from 'react-router-dom'

const MainRoots = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainRoots