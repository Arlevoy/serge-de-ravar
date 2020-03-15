import React, { useState } from "react"

import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

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
  flex: 1 1 300px;
`

export const ImageFluid = ({ fluid }) => {
  return (
    <ImageContainer>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}
