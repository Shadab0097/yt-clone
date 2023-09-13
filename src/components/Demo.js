import React, { useMemo, useRef } from 'react'
import { useState } from 'react'
import { findNthPrime } from '../utils/helper'

const Demo = () => {

  const [change, setchange] = useState("")
  const [isDarkTheme, setisDarkTheme] = useState(false)
  const[increase , setIncrease] = useState(0)
  const ref = useRef(0)

  console.log("render again")
  const nthPrime = useMemo(() => findNthPrime(change), [change])

  let x=0
  return (
    <>
      <div className={'w-96 h-96 text-black border border-black mx-32 my-24 p-8' + (isDarkTheme && 'bg-blue-700 text-red-900')} >
        <div>
          <button className='bg-green-700' onClick={() => setisDarkTheme(!isDarkTheme)}>togle</button>
        </div>
        <div >

          <input type='number' className='border border-black w-44' value={change} onChange={(e) => { setchange(e.target.value) }} />

          <h1>Prime Number {nthPrime}</h1>
        </div>
      </div>
      <div className={'w-96 h-96 text-black border border-black mx-32 my-24 p-8' + (isDarkTheme && 'bg-blue-700 text-red-900')} >
       
       <button className='bg-green-400' onClick={()=>{
        x=x+1
        console.log(x)
        }}>increase x</button>
        <span>{x}</span>

        <button className='bg-green-400 ml-2 mr-2' onClick={()=>{
        setIncrease(increase+1)
        // console.log(increase)
        }}>increase state</button>
        <span>{increase}</span>

        <button className='bg-green-400' onClick={()=>{
        ref.current = ref.current +1
        console.log( "ref",ref.current)
        }}>increase</button>
        <span>{ref.current}</span>
      </div>
    </>
  )
}

export default Demo