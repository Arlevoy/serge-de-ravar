import React from "react"

import Layout from "../components/layout"
import { AllImages } from "../components/AllImages"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    font-family: 'Notable', sans-serif;
  }
  `

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      <AllImages />
    </Layout>
  )
}

export default IndexPage
