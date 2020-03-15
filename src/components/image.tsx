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
`

const ImageModal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
`

const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
`

export const ImageFluid = ({ fluid }) => {
  const [selectedImage, setSelectedIMage] = useState<FluidObject>()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onImageSelect = () => setIsModalVisible(true)

  const closeModal = () => setIsModalVisible(false)
  return (
    <ImageContainer onClick={onImageSelect}>
      <Image fluid={fluid} />
    </ImageContainer>
  )
}
