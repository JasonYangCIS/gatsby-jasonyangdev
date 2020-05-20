import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';

const StyledCard = styled.div`
  width: 100%;
	display: block;
	padding: 10px;
	box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
	margin-bottom: 40px;

  @media ${breakpoints.lg} {
  }
  @media ${breakpoints.xl} {
	}
	h1, h2, h3, h4, h5, h6 {
		margin-bottom: 0;
	}
	h4 {
		font-size: 1.35em;
    margin-bottom: 5px;
	}
	p {
		font-size: .75rem;
		line-height: 1.25;
	}
`;

const Card = ({ children }) => {

  return (
    <StyledCard>
			{children}
    </StyledCard>
  )
}

Card.propTypes = {
  data: PropTypes.string,
}

Card.defaultProps = {
  data: ``,
}

export default Card
