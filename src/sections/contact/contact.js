import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"

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
      <Text type='h2'>{data.contentfulContact.sectionTitle}</Text>
      <Text type='p'>{data.contentfulContact.sectionContent.sectionContent}</Text>
    </Section>
  )
}

export default Contact
