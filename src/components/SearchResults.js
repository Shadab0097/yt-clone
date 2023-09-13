import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constant"
import { useSearchParams } from "react-router-dom";
import Videos from "./Videos";
import { Link } from "react-router-dom";

const SearchResults = () => {
	const [queryParams] = useSearchParams();
	const [videos, setVideos] = useState([]);
	console.log(queryParams.get("q"));

	useEffect(() => {
		getVideos();
	}, [queryParams.get("q")]);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEO_SEARCH_API + queryParams.get("q"));
		const json = await data.json();
		// console.log(json.items);
		setVideos(json.items);
        console.log(json.items)
	};
	if (videos.length === 0) {
		return <div>Loading...</div>;
	}
	return (
		<div className="flex flex-col ml-24 mt-20">
			{videos.map((video) => {
				if (video.id.kind === "youtube#video") {
					return (
						<Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
							{/* <Videos info={video} /> */}
                            <div className=' p-2 m-2  h-[120px] flex items-top mb-24 '>
                        <div className=''>
                            <img className='rounded-lg w-[368px] h-[201px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                        </div>
                        <div className='ml-5 w-[600px]'>
                            <ul>
                                <li className='text-[20px] '>{video?.snippet?.title}</li>
                                <li className="text-[16px] ">{video?.snippet?.channelTitle}</li>
                                <li>{video?.snippet?.description}</li>
                                {/* <li className='text-[14px]'>{video?.statistics?.viewCount} views</li> */}

                            </ul>
                        </div>

                    </div>
						</Link>
					);
				}
			})}
		</div>
	);
};

export default SearchResults;
