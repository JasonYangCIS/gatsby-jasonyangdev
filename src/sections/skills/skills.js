import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <section>
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
    </section>
  )
}

export default Skills
