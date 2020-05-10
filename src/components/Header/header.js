import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteHeaderQuery {
      contentfulHeader {
        sectionContent {
          sectionContent
        }
        logo {
          title
          fixed {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }
  `)
  return(
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Img 
        fixed={data.contentfulHeader.logo.fixed}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 
          style={{ margin: 0 }}
          dangerouslySetInnerHTML={{ __html: data.contentfulHeader.sectionContent.sectionContent }}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.string,
}

Header.defaultProps = {
  data: ``,
}

export default Header
