import React, { useEffect, useState } from 'react';
import './CortexCardContents.css';

function CortexCardContents({ right, title, body, file }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = file;
	}, [file]);

	return (
		<div className={`card-contents ${right ? 'card-contents--reverse' : ''}`}>
			<div style={{ flex: '1' }}>
				<div
					style={{
						padding: '8px 16px',
					}}
				>
					<h1>{title}</h1>
					<p>{body}</p>
				</div>
			</div>
			{/* This is an image placeholder **Imagine an Image** */}
			<div className="image-placeholder">
				{imageLoaded ? (
					<img src={file} alt="advantages gif" />
				) : (
					<div className="loading-container">Loading...</div>
				)}
			</div>
		</div>
	);
}

export default CortexCardContents;
