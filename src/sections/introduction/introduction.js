import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query SiteIntroductionQuery {
      contentfulIntroduction {
        sectionTitle
        sectionContent {
          sectionContent
        }
      }
    }
  `)
  return(
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulIntroduction.sectionTitle }}></h2>
      <p dangerouslySetInnerHTML={{ __html: data.contentfulIntroduction.sectionContent.sectionContent }}></p>
    </section>
  )
}

export default Introduction
