import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ data }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Img 
      fixed={data.logo.fixed}
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
        dangerouslySetInnerHTML={{ __html: data.sectionContent.sectionContent }}
      />
    </div>
  </header>
)

Header.propTypes = {
  data: PropTypes.object,
}

Header.defaultProps = {
  data: ``,
}

export default Header
