import React from "react"
import PropTypes from "prop-types"
import EquationCard from "./equationCard"
import Score from "./score"
import Timer from "../timer/timer"
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	&.equation__card--inactive {
		span.equation__value {
			opacity: 0;
		}
	}
`;
const StyledHr = styled.hr`
	margin: 40px 0;
`;

class Equations extends React.Component {
	static propTypes = {
		rangeMin: PropTypes.number.isRequired,
		rangeMax: PropTypes.number.isRequired,
		operation: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
		timerDuration: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			started: false,
			duration: this.props.timerDuration,
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
			let decrementedState = this.state.duration - 1;
			this.setState({
				duration: decrementedState,
				timerText: 'Reset'
			})
			if (this.state.duration === 0) this.stopTimer();
		}, 1000);
	}

	stopTimer() {
		clearInterval(this.timerId);
	}

	equationCard() {
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
					timerDuration={this.state.timerDuration}
				/>
			)
		}

		return (
			<>
				<StyledForm className={`equation__card ${this.state.duration === this.props.timerDuration ? ' equation__card--inactive' : ''}`}>
					{cardBuilder}
				</StyledForm>
			</>
		)
	}

	render() {
		return (
			<>
				<StyledHr />
				<Timer
					handleClickTimer={this.handleClickTimer.bind(this)}
					timer={this.state.duration}
					timerText={this.state.timerText}
				/>
				<Score
					quantity={this.props.quantity}
				/>
				{this.equationCard()}
				<StyledHr />
			</>
		)
	}
}

export default Equations