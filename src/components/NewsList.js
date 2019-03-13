import './App.css';
import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map(video => {
		return <NewsItem
			key={video.id.videoId}
			onVideoSelect={onVideoSelect}
			video={video}
		/>
	});

	return (
		<div className="news-list">
			<h3 className="align-center">Breaking News</h3>
			<div className="ui relaxed divided list">
				{renderedList}
			</div>
		</div>
	);
}

export default NewsList;