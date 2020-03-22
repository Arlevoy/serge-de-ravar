import styled from "styled-components"

export const ColumnContainer = styled.div`
  flex: 50%;
  max-width: 50%;
  padding: 0 4px;
  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`
