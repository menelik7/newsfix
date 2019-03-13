import React from 'react';

const NewsDetail = () => {
	const videoSrc = 'https://www.youtube.com/watch?v=HmrebXca-ZE';

	return (
		<div className="col-12 news-detail">
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">Trial</h4>
				<p>What should I put here?</p>
			</div>
		</div>
	);
}

export default NewsDetail;