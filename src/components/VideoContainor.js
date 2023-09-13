import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import Videos,{AdVideoCard} from './Videos'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

const VideoContainor = () => {
  const [video, setVideo] = useState([])

  useEffect(() => {
    getVIdeos()
  },[])

  const getVIdeos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    console.log(json)
    setVideo(json?.items)
  }
  // console.log(video[0])
  if (video.length === 0) { return <Shimmer/>}
  return (
    <div className='flex flex-wrap m-2 mt-28 ml-24 absolute -z-20'>
     {video[39] && <AdVideoCard info={video[39]} name="Ad"/>}
   { video.map((video)=>

  <Link to={"/watch?v="+video.id}  key={video.id}> <Videos key={video.id} info={video} /></Link>
    
    ) }
     
    </div>
  )
}

export default VideoContainor