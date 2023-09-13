import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex mt-16 ml-24 fixed bg-white -z-10'>
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
  )
}

export default ButtonList