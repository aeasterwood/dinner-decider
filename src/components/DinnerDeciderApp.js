import React from 'react';
import Header from './Header';
import Selector from './Selector';
import AddChoice from './AddChoice';
import Choices from './Choices';
import OptionModal from './SelectorModal';
import SelectorModal from './SelectorModal';

class DinnerDeciderApp extends React.Component {
	constructor (props) {
		super(props);
		this.handleAddChoice = this.handleAddChoice.bind(this);
		this.handleDeleteChoice = this.handleDeleteChoice.bind(this);
		this.handleDeleteAll = this.handleDeleteAll.bind(this);
		this.handleSelector = this.handleSelector.bind(this);
		this.handleClearSelectedChoice = this.handleClearSelectedChoice.bind(this);
		this.state = {
			choices: [],
			selectedChoice: undefined
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
		this.setState(() => {
			return {
				selectedChoice: selection
			};
		});
	}
	handleClearSelectedChoice () {
		this.setState(() => {
			return {
				selectedChoice: undefined
			};
		});
	}
	render () {
		const title = 'Dinner Decider';
		return (
			<div>
				<Header title={title} />
				<div className="container">
					<Selector hasChoices={this.state.choices.length > 0} handleSelector={this.handleSelector} />
					<div className="widget">
						<Choices
							choices={this.state.choices}
							handleDeleteChoice={this.handleDeleteChoice}
							handleDeleteAll={this.handleDeleteAll}
						/>
						<AddChoice handleAddChoice={this.handleAddChoice} />
					</div>
				</div>
				<SelectorModal
					selectedChoice={this.state.selectedChoice}
					handleClearSelectedChoice={this.handleClearSelectedChoice}
				/>
			</div>
		);
	}
}

export default DinnerDeciderApp;
