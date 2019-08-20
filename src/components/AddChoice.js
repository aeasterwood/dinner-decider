import React from 'react';

class AddChoice extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddChoice (e) {
		e.preventDefault();

		const choice = e.target.elements.choice.value.trim();
		const error = this.props.handleAddChoice(choice);
		this.setState(() => {
			return {
				error: error
			};
		});
		if (!error) {
			e.target.elements.choice.value = '';
		}
	}
	render () {
		return (
			<div>
				{this.state.item && <p>{this.state.item}</p>}
				<form onSubmit={this.handleAddChoice}>
					<input type="text" name="choice" />
					<button>Add Choice</button>
				</form>
			</div>
		);
	}
}

export default AddChoice;
