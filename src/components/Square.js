import React from 'react';

const Square = ({value, onClick}) => (
	<button className="square" data-pro={value} onClick={onClick}> 
			{value} 
		</button>
);

export default Square;
