import React from 'react';

import './template.css';

function Template(props) {
	return (
		<div className="layout-limits">
			<div className="template-container">
				<div style={{ padding: '48px 8px 0' }}>{props.children}</div>
			</div>
		</div>
	);
}

export default Template;
