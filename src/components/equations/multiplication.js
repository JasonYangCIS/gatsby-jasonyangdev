import React from "react"
import PropTypes from "prop-types"
import EquationCard from "./equationCard"
import styled from 'styled-components';
import colors from '../../components/_colors';

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

class Multiplication extends React.Component {
	static propTypes = {
		rangeMin: PropTypes.number.isRequired,
		rangeMax: PropTypes.number.isRequired,
		operation: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	};

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
				/>
			)
		}

		return (
			<StyledForm className="equation__card">
				{cardBuilder}
			</StyledForm>
		)
	}

	render() {
		return (
			this.mulitplicationCard()
		)
	}
}

export default Multiplication