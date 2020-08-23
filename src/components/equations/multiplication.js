import React from "react"
import PropTypes from "prop-types"
import EquationCard from "./equationCard"
import Timer from "../timer/timer"
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	&.equation__card--inactive {
		label {
			opacity: 0;
		}
	}
`;
const StyledHr = styled.hr`
	margin: 40px 0;
`;

class Multiplication extends React.Component {
	static propTypes = {
		rangeMin: PropTypes.number.isRequired,
		rangeMax: PropTypes.number.isRequired,
		operation: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			started: false,
			duration: 60,
			timerText: 'Start Timer'
		};
	}

	handleClickTimer() {
		// handle reset button click
		if (this.state.started === true) {
			window.location.reload();
		}

		this.setState({
			started: true,
		})

		this.timerId = setInterval(() => {
			this.state.duration--
			this.setState({
				duration: this.state.duration--,
				timerText: 'Reset'
			})
			if (this.state.duration === 0) this.stopTimer();
		}, 1000);
	}

	stopTimer() {
		clearInterval(this.timerId);
	}

	mulitplicationCard() {
		let cardBuilder = [];
		for (var i = 0; i < this.props.quantity; i++) {
			cardBuilder.push(
				<EquationCard
					key={`${this.props.operation}-${i}`}
					index={i}
					rangeMin={this.props.rangeMin}
					rangeMax={this.props.rangeMax}
					operation={this.props.operation}
					handleClickTimer={this.handleClickTimer.bind(this)}
					timer={this.state.duration}
				/>
			)
		}

		return (
			<>
				<Timer
					handleClickTimer={this.handleClickTimer.bind(this)}
					timer={this.state.duration}
					timerText={this.state.timerText}
				/>
				<StyledForm className={`equation__card ${this.state.duration === 60 ? ' equation__card--inactive' : ''}`}>
					{cardBuilder}
				</StyledForm>
			</>
		)
	}

	render() {
		return (
			<>
				<StyledHr />
				{this.mulitplicationCard()}
				<StyledHr />
			</>
		)
	}
}

export default Multiplication