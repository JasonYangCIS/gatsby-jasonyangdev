import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import colors from '../_colors';

const StyledTextContainer = styled.div`
  width: 100%;
  display: inline-block;
  h2 {
    color: ${colors.mdgrey};
    font-weight: 400;
  }
  p {
    color: ${colors.mdgrey};
  }
`;

class Text extends React.Component {
  render() {
    const { type, children } = this.props;
    const validTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

    const safeType = type ? type.toLowerCase() : '';
    const TextEle = validTypes.includes(safeType) ? safeType : 'p';

    return (
      <StyledTextContainer>
        <TextEle dangerouslySetInnerHTML={{ __html: children }} />
      </StyledTextContainer>
    );
  }
}

export default Text

Text.propTypes = {
  data: PropTypes.string,
}

Text.defaultProps = {
  data: ``,
}