import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';
import variables from '../_variables';

const bounce = keyframes`
  0% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(-5px)
  }
  to {
    transform: translateY(0)
  }
`

const StyledHeader = styled.header`
  background: ${colors.dkgrey};
  width: 100%;
  text-align: center;
  display: inline-block;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);

  @media ${breakpoints.lg} {
    background: ${colors.dkgrey};
    position: fixed;
    top: 0;
    left: 0;
    width: ${variables.headerLgWidth};
    z-index: 10;
    height: 100%;
  }
  @media ${breakpoints.xl} {
    width: ${variables.headerXlWidth};
  }
`;

const StyledH1Container = styled.div`
  @media ${breakpoints.lg} {
    max-width: 300px;
    margin: 0 auto;
  }
  @media ${breakpoints.xl} {
    max-width: 350px;
  }
  h1 {
    margin: 40px auto;
    padding: 0 20px;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 700;
    color: ${colors.grey};
    max-width: 700px;
    @media ${breakpoints.lg} {
      text-align: justify;
    }
    strong {
      color: ${colors.white};
    }
  }
`;

const StyledImg = styled(Img)`
  max-width: 150px;
  margin: 40px auto 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
  border-radius: 50%;
  animation: 2s ${bounce} ease-in-out infinite;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      contentfulHeader {
        sectionContent {
          childMarkdownRemark {
            html
          }
        }
        logo {
          title
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <StyledImg fluid={data.contentfulHeader.logo.fluid} />
      <StyledH1Container dangerouslySetInnerHTML={{ __html: data.contentfulHeader.sectionContent.childMarkdownRemark.html }} />
    </StyledHeader>
  )
}

Header.propTypes = {
  data: PropTypes.string,
}

Header.defaultProps = {
  data: ``,
}

export default Header
