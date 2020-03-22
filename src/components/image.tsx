import React, { useState } from "react"

import styled from "styled-components"
import Img, { FluidObject } from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const Image = styled(Img)`
  cursor: pointer;
  transform: scale(1);
  transition: 0.3s ease-in-out;
  height: 100%;
  &:hover {
    transform: scale(1.2);
    opacity: ${props => (props.alt === "category" ? "0.2" : 1)};
    background-color: black;
  }
`

const Container = styled.div`
  overflow: hidden;
  margin-top: 8px;
  vertical-align: middle;
  position: relative;
  width: 100%;
  height: 100%;
`

const OverlayLabelContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  ${Container}:hover & {
    opacity: 1;
  }
`

const OverlayLabel = styled.div`
  display-events: none;
  color: black;
  font-size: 16px;
  padding: 16px 32px;
`

interface ImageFluidProps {
  fluid: FluidObject
  label?: string
  type: "category" | "image"
}

export const ImageFluid = ({ fluid, label, type }: ImageFluidProps) => {
  console.log("label", label)
  return (
    <Container>
      <Image alt={type} fluid={fluid} />
      <OverlayLabelContainer>
        <OverlayLabel>{label}</OverlayLabel>
      </OverlayLabelContainer>
    </Container>
  )
}
