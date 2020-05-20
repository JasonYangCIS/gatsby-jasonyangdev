import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../../components/section/section"
import Text from "../../components/text/text"
import styled from 'styled-components';

const StyledProjectsContainer = styled.div`
  li {
    margin-bottom: 0;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query SiteProjectsQuery {
      contentfulFavoriteWebsiteProjects {
        childContentfulFavoriteWebsiteProjectsSectionContentTextNode {
          childMarkdownRemark {
            html
          }
        }
        sectionTitle
      }
    }
  `)
  return (
    <Section>
      <StyledProjectsContainer>
        <Text type='h2'>{data.contentfulFavoriteWebsiteProjects.sectionTitle}</Text>
        <Text type='p'>{data.contentfulFavoriteWebsiteProjects.childContentfulFavoriteWebsiteProjectsSectionContentTextNode.childMarkdownRemark.html}</Text>
      </StyledProjectsContainer>
    </Section>
  )
}

export default Projects
