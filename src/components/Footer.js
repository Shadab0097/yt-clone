import React from 'react'
import { Link } from 'react-router-dom'
import { FaHouse, FaPlus,  } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div>
            <div className='md:hidden px-10  text-center flex flex-row items-center  mt-[860px] fixed z-10  bg-white w-screen justify-center h-16 '>

                <Link to="/"><button className='mx-5'> <FaHouse size={35}/></button></Link>
               

                <img className=' w-[40px] h-[40px] mx-5' alt="shortsicon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduF0CLr6NFyx-f2Rk3xJct1ts6VmLlhNuZ51slp8w-2gdKVXx2Xyo82thMQKtKGuYlz8&usqp=CAU' />
               
               <button className='ml-5 mb-2 mx-2 p-2 border border-black  rounded-full'><FaPlus size={35}/></button>
              

                <img className=' w-[55px] h-[55px] mx-5' alt="homeicon" src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWezh-J3Dg1BDn7jQeLZRvOLffujKqw7kdaOzSSz7-5Bvq-aQ2' />
               

                <img className=' w-[40px] h-[40px] mx-5' alt="keepwatchicon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiamomVKxVCdX5pqlvgm1pQCMnpVVn4KnNE4I6w4bvTaKg3T5' />
              

            </div >
        </div>
    )
}

export default Footer