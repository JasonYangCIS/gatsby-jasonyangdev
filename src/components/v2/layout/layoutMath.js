/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import colors from "../../_colors";

const StyledMain = styled.main`
  background: ${colors.white};
  width: 100%;
  display: block;
  padding: 20px;
  max-width: 1100px;
  margin: 40px auto;
`;

class Layout extends React.Component {
  render() {
    return (
      <>
        <StyledMain>{this.props.children}</StyledMain>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
