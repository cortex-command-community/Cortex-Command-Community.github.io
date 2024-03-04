import React, { useEffect, useState } from 'react';
import './magic-arrow.css';

function MagicArrow() {
	const [showArrow, setShowArrow] = useState(true);
	// check if the arrow has reached footer
	useEffect(() => {
		const footer = document.querySelector('.footer');
		const handleShowingArrow = () => {
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - footer.scrollHeight
			) {
				setShowArrow(false);
			} else {
				setShowArrow(true);
			}
		};

		window.addEventListener('scroll', handleShowingArrow);

		return () => window.removeEventListener('scroll', handleShowingArrow);
	}, []);

	const handleScroll = () => {
		const sections = [
			{ scrollTo: 'full-pager', viewCheck: 'full-pager', block: 'center' },
			{
				scrollTo: 'scroll-anchor',
				viewCheck: 'cortex-card-container',
				block: 'start',
			},
		];

		for (const section of sections) {
			const viewCheck = document.querySelector(`.${section.viewCheck}`);

			if (viewCheck.getBoundingClientRect().bottom > window.innerHeight + 1) {
				const scrollTo = document.querySelector(`.${section.scrollTo}`);
				scrollTo.scrollIntoView({ block: section.block, behavior: 'smooth' });
				break;
			}
		}
	};

	return (
		<>
			{showArrow && (
				<div className="arrow-container">
					<button onClick={handleScroll} className="arrow-btn">
						<img src="./arrow.gif" alt="Scroll to content" />
					</button>
				</div>
			)}
		</>
	);
}

export default MagicArrow;
