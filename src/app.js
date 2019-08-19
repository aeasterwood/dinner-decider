console.log('App is running');

class App extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div>
				<h1>this is a test</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
