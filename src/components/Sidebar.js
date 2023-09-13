import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
// import { useState } from 'react'


const Sidebar = () => {
  // const[showMenu, setShowMenu] = useState(true)
  

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  // if(!isMenuOpen) return null

  const dispatch = useDispatch()


  return (
    <>
      {!isMenuOpen  ? <div  className='ml-2 text-center flex flex-col items-center mt-14 fixed bg-white '>

       <Link to="/"> <img className='mt-6 w-[24px] h-[24] text-center ' alt="homeicon" src='https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png' /></Link>
        <p className='text-sm' >Home</p>

        <img className='mt-8 w-[20px] h-[20px]' alt="shortsicon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduF0CLr6NFyx-f2Rk3xJct1ts6VmLlhNuZ51slp8w-2gdKVXx2Xyo82thMQKtKGuYlz8&usqp=CAU' />
        <p className='text-[12px]'>Shorts</p>

        <img className='mt-8 w-[20px] h-[20px]' alt="subscriptionicon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCc-kIksBHg2fnPnRjO2o7HQ4t0lVWm3DFo84rhsdgMGzcDCyY' />
        <p className='text-[12px]'>Subscription</p>

        <img className='mt-8 w-[20px] h-[20px]' alt="homeicon" src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWezh-J3Dg1BDn7jQeLZRvOLffujKqw7kdaOzSSz7-5Bvq-aQ2' />
        <p className='text-[12px]'>Library</p>

        <img className='mt-8 w-[20px] h-[20px]' alt="keepwatchicon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiamomVKxVCdX5pqlvgm1pQCMnpVVn4KnNE4I6w4bvTaKg3T5' />
        <p className='text-[12px]'>Watch</p>

      </div > :

        <div onClick={()=>dispatch(closeMenu())} className='p-5  w-48 mt-16 fixed snap-y h-[100vh] bg-white z-100'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscription </li>
            <li>YouTube Music</li>
          </ul>

          <div className='border border-b-0 mt-4 w-28 '></div>
          <ul className='pt-3'>
            <li>Liberary</li>
            <li>History</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Downlaods</li>
            <li>Like Videos</li>
          </ul>

          <div className='border border-b-0 mt-4 w-28'></div>

          <h1 className='font-bold pt-4 pb-2'> Subscription</h1>
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscription </li>
            <li>YouTube Music</li>
          </ul>

          <div className='border border-b-0 mt-4 w-28'></div>

          <h1 className='font-bold pt-4 pb-2'>Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Film </li>
            <li>Live </li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sport</li>
            <li>Learning</li>
            <li>Live Gaming</li>
            <li>Fashion & beauty</li>
          </ul>

        </div>
      }
    </>
  )
}

export default Sidebar