import axios from 'axios';

const KEY = 'AIzaSyCh3Hq-0npymmVzD3i3t66vYoeUYWvilq4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
