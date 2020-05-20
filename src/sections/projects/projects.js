import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectsQuery {
      contentfulFavoriteWebsiteProjects {
        sectionContent {
          sectionContent
        }
        sectionTitle
      }
    }
  `)
  return(
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulFavoriteWebsiteProjects.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulFavoriteWebsiteProjects.sectionContent.sectionContent }}></div>
    </Section>
  )
}

export default Projects
