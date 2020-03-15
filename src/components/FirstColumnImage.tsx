import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { ImageFluid } from "./image"

const ColumnContainer = styled.div`
  flex: 1;
`

export const FirstColumnImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { column: { eq: 1 } } }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              featuredImage {
                id
                absolutePath
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <ColumnContainer>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <ImageFluid
            key={node.id}
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        )
      })}
    </ColumnContainer>
  )
}
