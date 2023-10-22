import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className=''>
    <div className='flex mt-16 md:ml-24 fixed w-screen bg-white -z-10  overflow-x-scroll md:overflow-x-hidden'>
      <Button name = "All"/>
      <Button name = "Live"/>
      <Button name = "Moon Landing"/>
      <Button name = "Music"/>
      <Button name = "Bollywood Music"/>
      <Button name = "Dramedy"/>
      <Button name = "Tamil Cinema"/>
      <Button name = "News"/>
      <Button name = "Mantras"/>
      <Button name = "Gadget"/>
      <Button name = "Recently Uploaded"/>
    </div>
    </div>
  )
}

export default ButtonList