import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulFacts.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulFacts.sectionContent.sectionContent }} />
    </section>
  )
}

export default Facts
