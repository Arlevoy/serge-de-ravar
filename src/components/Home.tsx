import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Img, { FluidObject } from "gatsby-image"
import Dialog from "@material-ui/core/Dialog"

import { ImageFluid } from "./image"
import { ImageDialog } from "./ImageDialog"
import { ImageNode } from "../interfaces/ImageNode"
import { ImageFile } from "../interfaces/File"

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
interface HomeData {
  allImages: {
    edges: { node: ImageNode }[]
  }
  parisCover: ImageFile
}

export const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = (node: ImageNode) => () => {
    setSelectedImage(node.frontmatter)
    setIsDialogOpen(true)
  }

  const data: HomeData = useStaticQuery(graphql`
    query {
      allImages: allMarkdownRemark {
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
      parisCover: file(relativePath: { eq: "categories/paris.jpg" }) {
        id
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const getImagesByColumn = (columnId: number) => {
    console.log("data", data)
    return data.allImages.edges.filter(({ node }) => {
      return node.frontmatter.column === columnId
    })
  }

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
          <Link to="/paris">
            <ImageFluid fluid={data.parisCover.childImageSharp.fluid} />
          </Link>
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
