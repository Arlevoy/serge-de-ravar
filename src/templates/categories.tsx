import React, { useState } from "react"
import { RowContainer } from "../components/Layout/RowContainer"
import { ColumnContainer } from "../components/Layout/ColumnContainer"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { ImageNode } from "../interfaces/ImageNode"
import { ImageFluid } from "../components/image"
import { ImageDialog } from "../components/ImageDialog"

export default ({ data }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleDialogClose = () => setIsDialogOpen(false)
  const handleDialogOpen = (node: ImageNode) => () => {
    setSelectedImage(node.frontmatter)
    setIsDialogOpen(true)
  }

  const getImagesByColumn = (columnId: number) =>
    data.allMarkdownRemark.edges.filter(({ node }) => {
      return node.frontmatter.column === columnId
    })

  const renderImage = (node: ImageNode) => {
    console.log("node", node)
    return (
      <div onClick={handleDialogOpen(node)}>
        <ImageFluid
          key={node.id}
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
        />
      </div>
    )
  }
  console.log("data", data)
  return (
    <Layout>
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
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $slug } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            column
            category
            featuredImage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
