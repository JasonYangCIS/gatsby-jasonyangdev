import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Seo/seo"

import Introduction from "../sections/Introduction/introduction"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
)

export default IndexPage
