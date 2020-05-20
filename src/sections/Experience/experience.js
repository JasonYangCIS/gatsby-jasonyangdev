import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"

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
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulExperience.sectionTitle }}></h2>
      {
        data.contentfulExperience.experience.map((element, key) => (
          <div className="experience__card" key={key}>
            <h4 dangerouslySetInnerHTML={{ __html: element.company }}></h4>
            <h5 dangerouslySetInnerHTML={{ __html: element.datePosition }}></h5>
            <p dangerouslySetInnerHTML={{ __html: element.sectionContent.sectionContent }}></p>
          </div>
        ))
      }
    </Section>
  )
}

export default Experience
