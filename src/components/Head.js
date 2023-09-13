import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'
import { SUGGESTION_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'
import { Link} from 'react-router-dom'
// import ButtonList from './ButtonList'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestion] = useState([])
    const[ showSuggestion , setShowSuggestion] = useState(false)
    // const navigate = useNavigate

    const searchCache = useSelector((store)=>store.search)

  
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
    
            getSuggestion();
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSuggestion = async () => {
        // console.log("api-call" + searchQuery )
        const data = await fetch(SUGGESTION_API + searchQuery)
        const json = await data.json()
        setSuggestion(json[1])

        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))

    }
    
    const dispatch = useDispatch()
    const toogleHandler = () => {
        dispatch(toogleMenu())
    }

    return (
        <>
        <div className='grid grid-flow-col items-center  w-[100vw] fixed bg-white z-50'>
            <div className='flex col-span-1 items-center ml-5'>
                <img alt='hamberger ' onClick={() => toogleHandler()} className='h-8 ml-1 cursor-pointer' src='https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png' />
                <img alt='youtube ' className='h-16 ml-5' src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
            </div>

            <div className='col-span-10 text-center mr-20'>
                   {/* <form  onSubmit={(e)=>{
                    e.preventDefault()
                     setShowSuggestion(false)
                     navigate("/search?q=" + searchQuery)
                   
                }}> */}
                
                    <input type='text' className='w-1/2 border border-gray-400 p-1 rounded-l-full' value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        onFocus={()=>setShowSuggestion(true)}
                        onBlur={()=>{
                           setTimeout(()=>setShowSuggestion(false),200)}}

                        
                        />
                    <button className='border border-gray-400 p-1 rounded-r-full'>search</button>
               
                      { searchQuery && showSuggestion && <div className= 'fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border-gray-100 ml-[158px] text-left '>
                        <ul>
                            {suggestions.map((suggestion,index) => (
                       
                     <Link to={"/search?q="+suggestion} key={index}> <li className='py-2 px-3 hover:bg-gray-100 ' key={suggestion} >
                                
                                {suggestion}
                             
                             </li> 
                             </Link>  
                            
                            ) )}
                        </ul>
                         </div>}
                   
                
               {/* </form> */}
            </div>



            <div className='col-span-1 flex  items-center'>
                <img alt='video-recorder' className='h-6' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/video-recorder-2412627-2027691.png?f=webp' />

                <img alt='bell-icon' className='h-6 px-5' src='https://static.vecteezy.com/system/resources/previews/009/394/759/original/bell-icon-transparent-notification-free-png.png' />
                <img alt='user' className='h-8' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' />


            </div>
        </div>
       
        </>
    )
}

export default Head