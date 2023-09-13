import React from 'react'

const ChatMessages = ({name,messages}) => {
  return (
    <div className='flex items-center p-2'>
           <img className="rounded-full h-8 w-8 " src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" alt="user" />
            <span className='px-2 font-bold'>{name}</span>
            <span>{messages}</span>
      </div>
  )
}

export default ChatMessages