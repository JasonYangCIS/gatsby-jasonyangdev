import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"

const Facts = () => {
  const data = useStaticQuery(graphql`
    query SiteFactsQuery {
      contentfulFacts {
        sectionContent {
          sectionContent
        }
        sectionTitle
      }
    }
  `)
  return(
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulFacts.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulFacts.sectionContent.sectionContent }} />
    </Section>
  )
}

export default Facts
