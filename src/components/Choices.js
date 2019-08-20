import React from 'react';
import Choice from './Choice';

const Choices = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteAll}>Delete All</button>
			{props.choices.length === 0 && <p>To get started, add some choices below.</p>}
			{props.choices.map((choice) => (
				<Choice key={choice} choiceText={choice} handleDeleteChoice={props.handleDeleteChoice} />
			))}
		</div>
	);
};

export default Choices;
