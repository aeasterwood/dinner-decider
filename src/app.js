import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
		this.handleDeleteChoice = this.handleDeleteChoice.bind(this);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.handleSelector = this.handleSelector.bind(this);
		this.state = {
			choices: []
		};
	}
	componentDidMount () {
		try {
			const json = localStorage.getItem('choices');
			const choices = JSON.parse(json);
			if (choices) {
				this.setState(() => {
					return {
						choices
					};
				});
			}
		} catch (e) {
			//do nothing
		}
	}
	componentDidUpdate (prevProps, prevState) {
		if (prevState.choices.length !== this.state.choices.length) {
			const json = JSON.stringify(this.state.choices);
			localStorage.setItem('choices', json);
			console.log('saving data');
		}
	}
	handleAddChoice (choice) {
		if (!choice) {
			return 'Enter value';
		} else if (this.state.choices.indexOf(choice) > -1) {
			return 'This choice already exists!';
		}
		this.setState((prevState) => {
			return {
				choices: prevState.choices.concat(choice)
			};
		});
	}
	handleDeleteChoice (choiceToDelete) {
		this.setState((prevState) => {
			return {
				choices: prevState.choices.filter((choice) => {
					return choiceToDelete !== choice;
				})
			};
		});
	}
	handleDeleteAll () {
		this.setState(() => {
			return {
				choices: []
			};
		});
	}
	handleSelector () {
		const random = Math.floor(Math.random() * this.state.choices.length);
		const selection = this.state.choices[random];
		alert(selection);
	}
	render () {
		const title = 'Dinner Decider';
		return (
			<div>
				<Header title={title} />
				<Selector hasChoices={this.state.choices.length > 0} handleSelector={this.handleSelector} />
				<Choices
					choices={this.state.choices}
					handleDeleteChoice={this.handleDeleteChoice}
					handleDeleteAll={this.handleDeleteAll}
				/>
				<AddChoice handleAddChoice={this.handleAddChoice} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	);
};

const Selector = (props) => {
	return (
		<div>
			<button onClick={props.handleSelector} disabled={!props.hasChoices}>
				Where should we eat?
			</button>
		</div>
	);
};

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

ReactDOM.render(<App />, document.getElementById('app'));
