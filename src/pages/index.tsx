import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"

import { ImageFile } from "../interfaces/File"
import { Home } from "../components/Home"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    font-family: 'Notable', sans-serif;
  }
  `

const IndexPage = ({ data }: { data: ImageFile }) => {
  return (
    <Layout>
      <GlobalStyles />
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
