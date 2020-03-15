import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const HeaderContainer = styled.div`
  background-color: black;
  margin-bottom: 24px;
`

const HeaderTextLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "Playfair Display";
  font-size: 32px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HeaderTextLink to="/">{siteTitle}</HeaderTextLink>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
