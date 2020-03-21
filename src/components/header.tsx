import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const HeaderContainer = styled.div`
  background-color: black;
  padding: 24px 36px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HeaderTextLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 32px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTextLink to="/">{siteTitle}</HeaderTextLink>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
