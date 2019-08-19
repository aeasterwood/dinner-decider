console.log('App is running');

class App extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
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
	render () {
		const title = 'Dinner Decision';
		return (
			<div>
				<Header title={title} />
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

const Choices = (props) => {
	return (
		<div>
			{props.choices.map((choice) => {
				return <p>{choice}</p>;
			})}
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
