import React from "react"

import Layout from "../components/layout"
import { AllImages } from "../components/AllImages"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AllImages />
    </Layout>
  )
}

export default IndexPage
