import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query SiteExperienceQuery {
      contentfulExperience {
        experience {
          sectionContent {
            sectionContent
          }
          company
          datePosition
        }
        sectionTitle
      }
    }
  `)

  return(
    <section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulExperience.sectionTitle }}></h2>
      {
        data.contentfulExperience.experience.map(element => (
          <div className="experience__card">
            <h4 dangerouslySetInnerHTML={{ __html: element.company }}></h4>
            <h5 dangerouslySetInnerHTML={{ __html: element.datePosition }}></h5>
            <p dangerouslySetInnerHTML={{ __html: element.sectionContent.sectionContent }}></p>
          </div>
        ))
      }
    </section>
  )
}

export default Experience
