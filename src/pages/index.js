import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Introduction from "../sections/introduction/introduction"
import Experience from "../sections/experience/experience"
import Skills from "../sections/skills/skills"
import Facts from "../sections/facts/facts"
import Projects from "../sections/projects/projects"
import Contact from "../sections/contact/contact"

class IndexPage extends React.Component {
  componentDidMount = () => {
    window.VANTA.BIRDS({
      el: ".vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color1: 0xd27e36,
      color2: 0xd235bf,
      birdSize: 0.50,
      wingSpan: 20.00,
      speedLimit: 2.00,
      separation: 50.00,
      cohesion: 50.00,
      quantity: 4.00
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Jason Yang | Frontend Engineer" />
        <Introduction />
        <Projects />
        <Experience />
        <Skills />
        <Facts />
        <Contact />
      </Layout>
    );
  }
}

export default IndexPage
