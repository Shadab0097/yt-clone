// import React, { useState } from 'react'
import Sidebar from './Sidebar'
// import MainContainor from './MainContainor'
import { Outlet } from 'react-router-dom'

const Body = () => {
  // const[showSidebar ,setShowSideBar]= useState(true)
  return (
    <div className='flex'>
      <Outlet />
      <Sidebar />

    </div>
  )
}

export default Body