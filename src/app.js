class App extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
		this.handleSelector = this.handleSelector.bind(this);
		this.state = {
			choices: [ 'Test one', 'Test two' ]
		};
	}
	handleAddChoice (choice) {
		this.setState((prevState) => {
			return {
				choices: prevState.choices.concat(choice)
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
				<Selector handleSelector={this.handleSelector} />
				<Choices choices={this.state.choices} />
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
			<button onClick={props.handleSelector}>Where should we eat?</button>
		</div>
	);
};

const Choices = (props) => {
	return <div>{props.choices.map((choice) => <Choice key={choice} choiceText={choice} />)}</div>;
};

const Choice = (props) => {
	return (
		<div>
			{props.choiceText}
			<button>Delete</button>
		</div>
	);
};

class AddChoice extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
	}
	handleAddChoice (e) {
		e.preventDefault();

		const choice = e.target.elements.choice.value.trim();
		const item = this.props.handleAddChoice(choice);
	}
	render () {
		return (
			<div>
				<form onSubmit={this.handleAddChoice}>
					<input type="text" name="choice" />
					<button>Add Choice</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
