import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import colors from '../_colors';
import breakpoints from '../_breakpoints';

const StyledHeader = styled.header`
  background: ${colors.dkgrey};
  width: 100%;
  text-align: center;

  @media ${breakpoints.lg} {
    background: ${colors.dkgrey}
  }
`;

const StyledHeading1 = styled.h1`
  margin: 0;
`;

const StyledImg = styled(Img)`
  max-width: 150px;
  margin: 0 auto;
  box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
  border-radius: 50%;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      contentfulHeader {
        sectionContent {
          sectionContent
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
      <StyledHeading1 dangerouslySetInnerHTML={{ __html: data.contentfulHeader.sectionContent.sectionContent }} />
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
