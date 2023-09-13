import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainor from './CommentContainor'
import LiveChatMessage from './LiveChatMessage'
import WatchPageVideos from './WatchPageVideos'
import { YOUTUBE_VIDEO_INFO_API } from '../utils/constant'
import { formatYouTubeViews } from '../utils/helper'


const WatchPage = () => {
    const [watchPageInfo, setWatchPageInfo] = useState([])
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"))
    const dispatch = useDispatch()
    const videoId = searchParams.get("v")
    useEffect(() => {
        dispatch(closeMenu())
        getInfo()
    }, [videoId])

    const getInfo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_INFO_API + videoId)
        const json = await data.json()
        setWatchPageInfo(json?.items[0])
        console.log(json?.items[0])
    }
    return (
        <>
            <div className='flex absolute z-10'>
                <div className='bg-white w-full'>
                    <div className='flex flex-col'>
                        <div className='pl-5 mt-20 w-full'>
                            <iframe width="800"
                                height="460"
                                src={"https://www.youtube.com/embed/" + videoId}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div>{watchPageInfo && (
                            <div className="px-6 py-3">
                                <h1 className="text-xl font-bold">{watchPageInfo?.snippet?.title}</h1>
                                <h1 className="mt-2 text-l font-semibold">
                                    {watchPageInfo?.snippet?.channelTitle}
                                </h1>
                                <h1 className="mb-1 font-medium text-sm">
                                    {formatYouTubeViews(watchPageInfo?.statistics?.viewCount)} Views
                                </h1>
                            </div>
                        )}</div>
                        <div className='pt-4 pl-3 w-[800px]'>
                            <CommentContainor />
                        </div>
                        <div className='w-[800px]'>
                            <LiveChatMessage />
                        </div>

                    </div>
                </div>

                <div className='mt-16'>
                    <WatchPageVideos />
                </div>

            </div>
        </>
    )
}

export default WatchPage