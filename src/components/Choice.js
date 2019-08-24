import React from 'react';

const Choice = (props) => {
	return (
		<div className="option">
			<p className="option__text">
				{props.count}. {props.optionText}
			</p>
			{props.choiceText}
			<button
				className="button button--delete"
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
