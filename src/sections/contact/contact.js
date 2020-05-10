import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      contentfulContact {
        sectionTitle
        sectionContent {
          sectionContent
        }
      }
    }
  `)
  return(
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulContact.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulContact.sectionContent.sectionContent }}></div>
    </section>
  )
}

export default Contact
