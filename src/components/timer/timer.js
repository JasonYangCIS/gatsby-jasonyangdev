import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import colors from '../../components/_colors';

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	fieldset {
		border: 0;
		text-align: center;
		input, label {
			display: block;
			text-align: center;
			margin: 0 auto;
		}
		label {
			margin-bottom: 20px;
		}
	}
`;

class Timer extends React.Component {

	render() {
		return (
			<StyledForm>
				<fieldset>
					<label htmlFor="timer">
						<span ref={span => (this.span = span)}>{this.props.timer}</span> Seconds
					</label>
					<input
						id="timer"
						type="button"
						ref={input => (this.input = input)}
						onClick={this.props.handleClickTimer.bind(this)}
						value={this.props.timerText}
					/>
				</fieldset>
			</StyledForm>
		)
	}
}

export default Timer