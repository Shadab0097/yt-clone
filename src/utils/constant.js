const API_KEY = 'AIzaSyDjZ4msQX59QcxDcnqDkBU4e_-cJNPlvJ4'

 export const LIVE_CHAT_COUNT =20;

 export const YOUTUBE_VIDEO_SEARCH_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&key="+ API_KEY + "&q=";
	
 
export const YOUTUBE_API ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ API_KEY;

 export const SUGGESTION_API ="https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D"

 
export const YOUTUBE_VIDEO_INFO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
API_KEY +
"&id=";