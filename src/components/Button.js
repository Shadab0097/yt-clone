import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
        <button className=' px-4 py-0 md:px-3 md:py-2 m-1.5 bg-gray-200 rounded-lg text-xs '>{name}</button>
    </div>
  )
}

export default Button