import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin-bottom: 20px;
`;

class Score extends React.Component {
	static propTypes = {
		quantity: PropTypes.number.isRequired,
	};

	render() {
		return (
			<StyledDiv>
				<span ref={span => (this.span = span)}>0</span> / {this.props.quantity}
			</StyledDiv>
		)
	}
}

export default Score