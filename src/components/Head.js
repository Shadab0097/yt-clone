import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'
import { SUGGESTION_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'
import { Link} from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
// import ButtonList from './ButtonList'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestion] = useState([])
    const[ showSuggestion , setShowSuggestion] = useState(false)
    const [expandedSearch, setExpandedSearch] = useState(false);
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

    const handleSearch=()=>{
        setExpandedSearch(!expandedSearch)
    }

    return (
        <>
        <div className='grid grid-flow-col items-center  w-screen fixed bg-white  z-50'>
            <div className='flex col-span-1 items-center ml-5'>
                <img alt='hamberger ' onClick={() => toogleHandler()} className='hidden md:block h-8 ml-1 cursor-pointer' src='https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png' />
                <img alt='youtube ' className={`w-32 h-16  -ml-5 md:h-16 md:ml-10`} src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
            </div>
 

            <div className='col-span-1 md:col-span-10 text-center '>
                  <div className={` md:block flex items-center ${expandedSearch? 'w-full px-10 mx-16 -ml-3 ':'hidden'} px-4 `}>
                    <input type='text' className= {`md:w-1/2 border border-gray-400 md:p-1 md:rounded-l-full ${expandedSearch ? 'px-10 rounded-l-full': 'md:px-0' }`}  value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        onFocus={()=>setShowSuggestion(true)}
                        onBlur={()=>{
                           setTimeout(()=>setShowSuggestion(false),200)}}

                        
                        />
                    <button className={`border border-gray-400 p-1 px-3 md:p-2 items-center  md:rounded-r-full ${expandedSearch && 'rounded-r-full'}`} onClick={handleSearch}><BsSearch /></button>
                    </div>

                      { searchQuery && showSuggestion && <div className= {`fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border-gray-100 ml-[158px] text-left ${expandedSearch && 'ml-0 w-[22rem]'} `}>
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


                                   
            <div className={`col-span-1 flex items-center md:items-center ${expandedSearch? '-ml-5':'ml-20'}`}>
            { !expandedSearch && <button className='block md:hidden mx-5' onClick={handleSearch}><BsSearch/></button>}

                <img alt='video-recorder' className='h-6' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/video-recorder-2412627-2027691.png?f=webp' />

                <img alt='bell-icon' className='h-6  px-2 md:px-5' src='https://static.vecteezy.com/system/resources/previews/009/394/759/original/bell-icon-transparent-notification-free-png.png' />
                <img alt='user' className='h-8' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg' />


            </div>
        </div>
       
        </>
    )
}

export default Head