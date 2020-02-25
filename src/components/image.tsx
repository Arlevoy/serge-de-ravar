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

const ImageContainer = styled.div``

export const FluidImage = ({ fluid }) => {
  console.log("fluid", fluid)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wall-of-pictures.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageContainer>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}
