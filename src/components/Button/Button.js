import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Button.css';

function Button({ link, to, children }) {
	const Tag = link ? 'a' : 'button';

	return (
		<Tag className="button-element" href={to} target="_blank">
			<span className="button-content">{children}</span>
			{link && <FontAwesomeIcon icon={faExternalLinkAlt} />}
		</Tag>
	);
}

export default Button;
