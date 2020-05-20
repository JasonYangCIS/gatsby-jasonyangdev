import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Section from "../../components/section/section"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SiteSkillsQuery {
      contentfulMySkillsSection {
        sectionTitle
        mySkillsIcons {
          title
          fixed(width:47) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  `)
  return(
    <Section>
      <h2 dangerouslySetInnerHTML={{ __html: data.contentfulMySkillsSection.sectionTitle }}></h2>
      {
        data.contentfulMySkillsSection.mySkillsIcons.map((element, key) => (
          <div className="skills__card" key={key}>
            <Img 
              fixed={element.fixed}
            />
            <span dangerouslySetInnerHTML={{ __html: element.title }} />
          </div>
        ))
      }
    </Section>
  )
}

export default Skills
