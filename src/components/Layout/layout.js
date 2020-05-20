/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"
import styled from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';
import variables from '../_variables';

const StyledMain = styled.main`
  background: ${colors.white};
  width: 100%;
  display: block;

  @media ${breakpoints.lg} {
    max-width: calc(100% - ${variables.headerLgWidth});
    margin-left: auto;
  }
  @media ${breakpoints.xl} {
    max-width: calc(100% - ${variables.headerXlWidth});
  }
`;

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
