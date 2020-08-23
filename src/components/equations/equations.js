import React from "react"
import PropTypes from "prop-types"
import Multiplication from "./multiplication"

class Equations extends React.Component {
	static propTypes = {
		rangeMin: PropTypes.number.isRequired,
		rangeMax: PropTypes.number.isRequired,
		operation: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
	};

	render() {
		switch (this.props.operation) {
			case 'multiplication':
				return <Multiplication
					rangeMin={this.props.rangeMin}
					rangeMax={this.props.rangeMax}
					quantity={this.props.quantity}
					operation={this.props.operation}
				/>
			default:
				return null;
		}
	}
}

export default Equations