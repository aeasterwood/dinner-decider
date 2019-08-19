console.log('App is running');

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			choices: []
		};
	}
	render () {
		const title = 'Dinner Decision';
		return (
			<div>
				<Header title={title} />
				<AddChoice />
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
	}
	render () {
		return (
			<div>
				<form>
					<button>Add Choice</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
