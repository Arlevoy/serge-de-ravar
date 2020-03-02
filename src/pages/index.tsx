import React from "react"

import Layout from "../components/layout"
import { FirstColumnImage } from "../components/FirstColumnImage"
import { SecondColumnImage } from "../components/SecondColumnImage"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { FixedObject } from "gatsby-image"
import styled from "styled-components"

const styles = {
  imagesContainer: {
    marginBottom: `1.45rem`,
    display: "flex",
    "flex-direction": "row",
  },
  columnContainer: {
    flex: 1,
  },
}

const ImageContainer = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: row;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ImageContainer>
        <FirstColumnImage />
        <SecondColumnImage />
      </ImageContainer>
    </Layout>
  )
}

export default IndexPage
