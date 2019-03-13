import React from 'react';

const CategoryItem = ({ title, onButtonClick }) => {
	return (
		<div onClick={() => onButtonClick(title)} className="col-2 category-item align-center">
			<div className={`col-12 ${title} align-center`}>
				{title.toUpperCase()}
			</div>
		</div>
	);
}

export default CategoryItem;