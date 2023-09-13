import React from 'react'
// import { useState } from 'react';
import { formatYouTubeViews } from '../utils/helper'

const Videos = ({info}) => {
 

    console.log(info)
    // const { snippet , statistics} = info
    // const { channelTitle , title , thumbnails} = snippet
  return (
    <div className=' p-2 m-2 w-[330px] '>
        <img className='rounded-lg ' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold py-2 overflow-x-hidden'>{info?.snippet?.title}</li>
            <li className="">{info?.snippet?.channelTitle}</li>
            {/* <li>{info?.snippet?.publishedAt}</li> */}
            <li>{formatYouTubeViews(info?.statistics?.viewCount)} views</li>

        </ul>

       
    </div>
  )
}

 export const AdVideoCard = ({info , name})=>{
return(
  <div className=' p-2 m-2 w-[330px] shadow-lg '>
        <img className='rounded-lg ' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold py-2 overflow-x-hidden'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li className='font-bold text-lg'>{name}</li>

        </ul>

       
    </div>
)
}

export default Videos