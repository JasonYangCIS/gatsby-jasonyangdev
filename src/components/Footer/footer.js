import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      contentfulFooter {
        sectionContent {
          sectionContent
        }
      }
    }
  `)
  return(
    <footer dangerouslySetInnerHTML={{ __html: data.contentfulFooter.sectionContent.sectionContent }}></footer>
  )
}


export default Footer
