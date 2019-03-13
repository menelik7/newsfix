import './App.css';
import React from 'react';
import CategoryItem from './CategoryItem';

const CategoriesList = ({ onButtonClick }) => {
	const categories = ['cnn', 'fox', 'bbc', 'nyt', 'alj', 'esat'];

	const renderedCategoryButtons = categories.map((category, i) => {
		return <CategoryItem
			key={i}
			title={category}
			onButtonClick={onButtonClick}
		/>
	});

	return (
		<div className="categories-list col-12">
			<div className="row">
				{renderedCategoryButtons}
			</div>
		</div>
	);
}

export default CategoriesList;