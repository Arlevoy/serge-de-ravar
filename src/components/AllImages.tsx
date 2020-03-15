import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { ImageFluid } from "./image"

const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`

const ColumnContainer = styled.div`
  flex: 50%;
  max-width: 50%;
  padding: 0 4px;
  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`

export const AllImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              column
              featuredImage {
                id
                absolutePath
                childImageSharp {
                  fluid(maxWidth: 600) {
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

  const getImagesByColumn = (columnId: number) =>
    data.allMarkdownRemark.edges.filter(({ node }) => {
      return node.frontmatter.column === columnId
    })

  return (
    <RowContainer>
      <ColumnContainer>
        {getImagesByColumn(1).map(({ node }) => {
          return (
            <ImageFluid
              key={node.id}
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          )
        })}
      </ColumnContainer>
      <ColumnContainer>
        {getImagesByColumn(2).map(({ node }) => {
          return (
            <ImageFluid
              key={node.id}
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          )
        })}
      </ColumnContainer>
    </RowContainer>
  )
}
