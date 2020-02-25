import React from "react"

import Layout from "../components/layout"
import { FluidImage } from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { FixedObject } from "gatsby-image"

interface MarkdownRemark {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        frontmatter: {
          title: string
          featuredImage: {
            childImageSharp: { fluid: FixedObject }
          }
        }
      }
    }[]
  }
}

const IndexPage = ({ data }: { data: MarkdownRemark }) => {
  console.log("query", data)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <FluidImage
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
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
`
export default IndexPage
