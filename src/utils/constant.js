const API_KEY = 'AIzaSyDjZ4msQX59QcxDcnqDkBU4e_-cJNPlvJ4'

 export const LIVE_CHAT_COUNT =20;

 export const YOUTUBE_VIDEO_SEARCH_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key="+ API_KEY + "&q=";
	
 
export const YOUTUBE_API ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ API_KEY;

 export const SUGGESTION_API ="https://corsproxy.io?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

 
export const YOUTUBE_VIDEO_INFO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
API_KEY +
"&id=";