import './App.css';
import React from 'react';
import CategoriesList from './CategoriesList';
import NewsDetail from './NewsDetail';
import NewsList from './NewsList';

class App extends React.Component {
	state = {
		news: [],
		selectedNews: null
	};

	render() {
		return (
			<div className="container">

				<div className="jumbotron align-center">
					<h1>World News Forum</h1>
				</div>

				<div className="row">
					<div className="col-12 col-lg-8">
						<CategoriesList />
						<NewsDetail />
					</div>
					<div className="col-12 col-lg-4 no-left-padding">
						<NewsList />
					</div>
				</div>

			</div>
		);
	}
}

export default App;