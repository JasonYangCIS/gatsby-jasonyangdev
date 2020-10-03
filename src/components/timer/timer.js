import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 0;
  input,
  label {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  label {
    margin-bottom: 20px;
  }
`;

class Timer extends React.Component {
  static propTypes = {
    handleClickTimer: PropTypes.func.isRequired,
    timer: PropTypes.number.isRequired,
    timerText: PropTypes.string.isRequired,
  };

  render() {
    return (
      <StyledForm>
        <label htmlFor="timer">
          <span ref={span => (this.span = span)}>{this.props.timer}</span>{" "}
          Seconds
          <input
            id="timer"
            type="button"
            ref={input => (this.input = input)}
            onClick={this.props.handleClickTimer.bind(this)}
            value={this.props.timerText}
          />
        </label>
      </StyledForm>
    );
  }
}

export default Timer;
