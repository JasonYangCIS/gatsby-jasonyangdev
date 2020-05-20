import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"

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
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulIntroduction.sectionTitle }}></h2>
      <p dangerouslySetInnerHTML={{ __html: data.contentfulIntroduction.sectionContent.sectionContent }}></p>
    </Section>
  )
}

export default Introduction
