import { FluidObject } from "gatsby-image"

export interface ImageNode {
  id: string
  frontmatter: FrontmatterImage
  fields: {
    slug: string
  }
}

export interface FrontmatterImage {
  title: string
  column: number
  featuredImage: {
    id: string
    absolutePath: string
    childImageSharp: { fluid: FluidObject }
  }
}
