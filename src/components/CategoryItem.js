import React from 'react';

const CategoryItem = ({ title }) => {
	return (
		<div className="col-2 category-item align-center">
			<div className={`col-12 ${title} align-center`}>
				{title}
			</div>
		</div>
	);
}

export default CategoryItem;