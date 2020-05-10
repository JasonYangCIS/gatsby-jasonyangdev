import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"

import Introduction from "../sections/Introduction/introduction"
import Experience from "../sections/Experience/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <Experience />
  </Layout>
)

export default IndexPage
