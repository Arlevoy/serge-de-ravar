import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"
import Dialog from "@material-ui/core/Dialog"

import { ImageFluid } from "./image"
import { ImageDialog } from "./ImageDialog"
import { ImageNode } from "../interfaces/ImageNode"

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
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = (node: ImageNode) => () => {
    setSelectedImage(node.frontmatter)
    setIsDialogOpen(true)
  }

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
                  fluid {
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

  const renderImage = (node: ImageNode) => (
    <div onClick={handleDialogOpen(node)}>
      <ImageFluid
        key={node.id}
        fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
      />
    </div>
  )

  return (
    <>
      <RowContainer>
        <ColumnContainer>
          {getImagesByColumn(1).map(({ node }: { node: ImageNode }) => {
            return renderImage(node)
          })}
        </ColumnContainer>
        <ColumnContainer>
          {getImagesByColumn(2).map(({ node }: { node: ImageNode }) => {
            return renderImage(node)
          })}
        </ColumnContainer>
      </RowContainer>
      <ImageDialog
        image={selectedImage}
        isOpen={isDialogOpen}
        handleClose={handleDialogClose}
      />
    </>
  )
}
