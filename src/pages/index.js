import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

import Introduction from "../sections/introduction/introduction";
import Experience from "../sections/experience/experience";
import Skills from "../sections/skills/skills";
import Facts from "../sections/facts/facts";
import Projects from "../sections/projects/projects";
import Contact from "../sections/contact/contact";

class IndexPage extends React.Component {
  componentDidMount = () => {
    window.VANTA.BIRDS({
      el: ".vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color1: 0xd27e36,
      color2: 0xd235bf,
      birdSize: 0.5,
      wingSpan: 20.0,
      speedLimit: 2.0,
      separation: 50.0,
      cohesion: 50.0,
      quantity: 4.0,
      backgroundColor: 0x0,
    });
  };
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

export default IndexPage;
