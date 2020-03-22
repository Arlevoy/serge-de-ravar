import { FluidObject } from "gatsby-image"

export interface ImageFile {
  id: string
  childImageSharp: {
    fluid: FluidObject
  }
}
