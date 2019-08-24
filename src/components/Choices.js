import React from 'react';
import Choice from './Choice';

const Choices = (props) => {
	return (
		<div>
			<div className="widget-header">
				<h3 className="widget-header__title">Choices</h3>
				<button className="button button--delete" onClick={props.handleDeleteAll}>
					Delete All
				</button>
			</div>
			{props.choices.length === 0 && <p className="widget__message">To get started, add some choices below.</p>}
			{props.choices.map((choice, index) => (
				<Choice key={choice} choiceText={choice} count={index + 1} handleDeleteChoice={props.handleDeleteChoice} />
			))}
		</div>
	);
};

export default Choices;
