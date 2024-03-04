import React from 'react';

import './template.css';

function Template(props) {
	return (
		<div className="layout-limits">
			<div className="template-container">
				<div className="template-content">{props.children}</div>
			</div>
		</div>
	);
}

export default Template;
