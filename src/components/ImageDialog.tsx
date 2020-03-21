import React, { useState } from "react"
import Dialog from "@material-ui/core/Dialog"
import Img from "gatsby-image"
import styled from "styled-components"
import CloseIcon from "@material-ui/icons/Close"

import { useTheme, useMediaQuery, IconButton } from "@material-ui/core"
import { FrontmatterImage } from "../interfaces/ImageNode"

interface ImageDialogProps {
  isOpen: boolean
  handleClose: () => void
  image: FrontmatterImage | null
}

const IconButtonContainer = styled.div`
  padding-left: 24px;
`

const ImageContainer = styled.div``

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.div`
  flex: 1;
  text-align: center;
`

export const ImageDialog = ({
  isOpen,
  handleClose,
  image,
}: ImageDialogProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery("(max-width:600px)")

  return (
    <Dialog
      fullWidth={true}
      fullScreen={isMobile}
      maxWidth={"lg"}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
    >
      {image && (
        <ImageContainer>
          <Header>
            <IconButtonContainer>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </IconButtonContainer>
            <Title>{image.title}</Title>
          </Header>
          <Img fluid={image.featuredImage.childImageSharp.fluid} />
        </ImageContainer>
      )}
    </Dialog>
  )
}
