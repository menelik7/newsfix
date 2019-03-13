import './App.css';
import React from 'react';
import CategoryItem from './CategoryItem';

const categories = ['CNN', 'FOX', 'BBC', 'NYT', 'ALJ', 'ESAT'];

const renderedCategoryButtons = categories.map((category, i) => {
	return <CategoryItem
		key={i}
		title={category}
	/>;
});

const CategoriesList = () => {
	return (
		<div className="categories-list col-12">
			<div className="row">
				{renderedCategoryButtons}
			</div>
		</div>
	);
}

export default CategoriesList;