import React from 'react';
import './card.css'

function Card({ title, children }) {
	return (
		<div className='card-element'>
			<div className="card-content">
				<h2 className="card-name">{title}</h2>
				{children}
			</div>
		</div>
	);
}

export default Card;
