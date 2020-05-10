import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Introduction from "../sections/introduction/introduction"
import Experience from "../sections/experience/experience"
import Skills from "../sections/skills/skills"
import Facts from "../sections/facts/facts"
import Projects from "../sections/projects/projects"
import Contact from "../sections/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <Experience />
    <Skills />
    <Facts />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
