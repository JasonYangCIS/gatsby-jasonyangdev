import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import colors from '../../components/_colors';

const StyledFieldset = styled.fieldset`
	display: inline-block;
	color: ${colors.mdGrey};
	margin: 20px 10px 0;
	border: 0;
	width: 80px;
	position: relative;
	border: 2px solid ${colors.offWhite};
	padding: 5px;
	box-shadow: 0 3px 6px rgba(0,0,0,.05);
	&.equation{
		&--incorrect input {
			background: ${colors.danger};
		}
		&--correct input {
			background: ${colors.success};
		}
	}
	label, span.equation__value {
		width: 100%;
		display: inline-block;
		text-align: right;
	}
	input {
		border: 0;
		border-top: 1px solid ${colors.mdGrey};
		width: 100%;
		height: 30px;
		display: inline-block;
		text-align: right;
	}
	.equation__operator {
		position: absolute;
		bottom: 32px;
		left: 5px;
		z-index: 1;
		font-size: 18px;
		font-family: arial, sans-serif;
	}
`;

class EquationCard extends React.Component {
	static propTypes = {
		key: PropTypes.string.isRequired,
		index: PropTypes.number.isRequired,
		rangeMin: PropTypes.number.isRequired,
		rangeMax: PropTypes.number.isRequired,
		operation: PropTypes.string.isRequired,
		handleClickTimer: PropTypes.number.isRequired,
		timer: PropTypes.func.isRequired,
		timerDuration: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			answered: false,
			answer: null,
			correct: null,
			valueOne: this.getRandomInt(),
			valueTwo: this.getRandomInt()
		};
	}

	componentDidMount() {
		this.setAnswer();
	}

	getRandomInt() {
		let min = Math.ceil(this.props.rangeMin);
		let max = Math.floor(this.props.rangeMax);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}

	getOperator() {
		switch (this.props.operation) {
			case 'multiplication':
				return 'x'
			case 'subtraction':
				return '-'
			case 'addition':
				return '+'
			case 'division':
				return '÷'
			default:
				return '*';
		}
	}

	getAnswer(x, y) {
		switch (this.props.operation) {
			case 'multiplication':
				return (x * y)
			case 'subtraction':
				return (x - y)
			case 'addition':
				return (x + y)
			case 'division':
				return (x / y)
			default:
				return (x * y)
		}
	}

	setAnswer() {
		this.setState({
			answer: parseInt(this.getAnswer(this.state.valueOne, this.state.valueTwo))
		});
	}

	checkAnswer(answer) {
		let isCorrect = true;

		if (answer !== this.state.answer) {
			isCorrect = false;
		};

		this.setState({
			correct: isCorrect
		});
	}

	onChange() {
		// if answer is correct, change focus to next item
		// if on last item, submit the form
	}

	onFocus() {
		// start timer as soon as user enters the input field
		if (this.props.timer === this.props.timerDuration) {
			this.props.handleClickTimer();
		}
	}

	setAnswered() {
		if (this.input.value.length > 0) {
			this.setState({
				answered: true
			});
		}
	}

	onBlur() {
		this.setAnswered();
		this.checkAnswer(parseInt(this.input.value));
	}

	render() {
		let fieldSetClass = '';
		if (this.state.answered && this.state.correct) {
			fieldSetClass = 'equation--correct';
		} else if (this.state.answered || this.props.timer === 0) {
			fieldSetClass = 'equation--incorrect';
		}

		return (
			<StyledFieldset
				className={
					fieldSetClass
				}>
				<label htmlFor={`equation_card_${this.props.index}`}>
					<span className="equation__value">{this.state.valueOne}</span>
					<span className="equation__value">{this.state.valueTwo}</span>
					<span className="equation__operator">{this.getOperator()}</span>
					<input
						id={`equation_card_${this.props.index}`}
						type="number"
						ref={input => (this.input = input)}
						onChange={() => this.onChange()}
						onBlur={() => this.onBlur()}
						onFocus={() => this.onFocus()}
						disabled={this.state.answered || this.props.timer === 0}
					/>
				</label>
			</StyledFieldset>
		)
	}
}

export default EquationCard