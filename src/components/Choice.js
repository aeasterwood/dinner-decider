import React from 'react';

const Choice = (props) => {
	return (
		<div>
			{props.choiceText}
			<button
				onClick={(e) => {
					props.handleDeleteChoice(props.choiceText);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default Choice;
