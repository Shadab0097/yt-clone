import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomMessages, generateRandomName } from '../utils/helper'

const LiveChatMessage = () => {
    const [LiveMesaages , setLiveMessages]= useState('')
    const dispatch = useDispatch()

    const chatmessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                messages: generateRandomMessages(20)
            }))
            //api polling
        }, 2000)

      

        return () => clearInterval(i)

    },[])
    return (
        <>
        <div  className=' ml-[13px] border border-black h-[460px] mt-20 w-full overflow-y-scroll flex flex-col-reverse overflow-x-scroll no-scrollbar'>
            {chatmessages.map((c) => <ChatMessages name={c.name} messages={c.messages} key={c.messages} />
            )}   
        </div>
        <form className='my-2 flex justify-center' onSubmit={ (e)=>{ 
              e.preventDefault() 
              console.log("submit")
              dispatch(addMessages({
                name:"Shadab Khan",
                messages:LiveMesaages
              }))
              setLiveMessages('')

              }}>
            <input type='text' className='border border-black' value={LiveMesaages} onChange={(e)=>{
                setLiveMessages(e.target.value)
            }}/>
            <button className='mx-2 bg-green-200'>Send</button>
        </form>
        </>
    )
}

export default LiveChatMessage