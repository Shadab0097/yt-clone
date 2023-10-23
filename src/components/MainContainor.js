import React from 'react'
import ButtonList from './ButtonList'
import VideoConatinor from './VideoContainor'
import Footer from './Footer'

const MainContainor = () => {
  return (
    <div className='w-screen'>
        <ButtonList/>
        <VideoConatinor/>
        <Footer/>
      
    </div>
  )
}

export default MainContainor