import React from 'react';

const NewsItem = ({ video, onVideoSelect}) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default NewsItem;