import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"

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
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulContact.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulContact.sectionContent.sectionContent }}></div>
    </Section>
  )
}

export default Contact
