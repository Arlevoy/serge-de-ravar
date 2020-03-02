import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = styled(Img)`
  transform: scale(1);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
  margin: 8px;
`

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
          <ImageContainer>
            <Image
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </ImageContainer>
        )
      })}
    </ColumnContainer>
  )
}
