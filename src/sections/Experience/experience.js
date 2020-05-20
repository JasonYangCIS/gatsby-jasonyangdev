import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"

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

  return (
    <Section>
      <Text type='h2'>{data.contentfulExperience.sectionTitle}</Text>
      {
        data.contentfulExperience.experience.map((element, key) => (
          <div className="experience__card" key={key}>
            <Text type='h4'>{element.company}</Text>
            <Text type='h5'>{element.datePosition}</Text>
            <Text type='p'>{element.sectionContent.sectionContent}</Text>
          </div>
        ))
      }
    </Section>
  )
}

export default Experience
