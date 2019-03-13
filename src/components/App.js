import './App.css';
import React from 'react';
import CategoriesList from './CategoriesList';
import youtube from '../apis/youtube';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('cnn');
	}

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({ 
			videos: response.data.items, 
			selectedVideo: response.data.items[2]  
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="container">

				<div className="jumbotron align-center">
					<h1>NewsFix</h1>
				</div>

				<div className="row">
					<div className="col-12 col-lg-8" style={{ height: '65vh' }}>
						<CategoriesList onButtonClick={this.onTermSubmit}/>
						<NewsDetail video={this.state.selectedVideo} />
					</div>
					<div className="col-12 col-lg-4">
						<NewsList 
							onVideoSelect={this.onVideoSelect} 
							videos={this.state.videos} 
						/>
					</div>
				</div>

			</div>
		);
	}
}

export default App;