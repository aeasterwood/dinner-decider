console.log('App is running');

class App extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
		this.state = {
			choices: []
		};
	}
	handleAddChoice (choice) {
		this.setState((prevState) => {
			return {
				options: prevState.choices.concat(choice)
			};
		});
	}
	render () {
		const title = 'Dinner Decision';
		return (
			<div>
				<Header title={title} />
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
