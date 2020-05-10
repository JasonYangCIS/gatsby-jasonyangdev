import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulFavoriteWebsiteProjects.sectionTitle }}></h2>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulFavoriteWebsiteProjects.sectionContent.sectionContent }}></div>
    </section>
  )
}

export default Projects
