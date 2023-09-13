const API_KEY = 'AIzaSyDSuLrZ5bAW-7L6v4ueWhCZwsYXlWlrKNE'

 export const LIVE_CHAT_COUNT =20;

 export const YOUTUBE_VIDEO_SEARCH_API =
	"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key="+ API_KEY + "&q=";
	
 
export const YOUTUBE_API ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ API_KEY;

 export const SUGGESTION_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

 
export const YOUTUBE_VIDEO_INFO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
API_KEY +
"&id=";