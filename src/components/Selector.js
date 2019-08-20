import React from 'react';

const Selector = (props) => {
	return (
		<div>
			<button onClick={props.handleSelector} disabled={!props.hasChoices}>
				Where should we eat?
			</button>
		</div>
	);
};

export default Selector;
