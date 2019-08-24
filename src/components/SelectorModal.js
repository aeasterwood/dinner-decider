import React from 'react';
import Modal from 'react-modal';

const SelectorModal = (props) => {
	return (
		<Modal isOpen={!!props.selectedChoice} contentLabel="Selected Choice">
			<h3>You should have dinner at:</h3>
			{props.selectedChoice && <p>{props.selectedChoice}</p>}
			<button onClick={props.handleClearSelectedChoice}>Let's go!</button>
		</Modal>
	);
};

export default SelectorModal;
