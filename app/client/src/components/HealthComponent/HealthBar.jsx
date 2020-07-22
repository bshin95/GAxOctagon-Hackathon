import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  text-decoration: none;
  color: black;
  background-color: #f7f7f7;
`

class HealthBar extends Component {
  render() {
    return (
      <StyledLink to="/covid19response">
        Get the latest COVID-19 results here.
      </StyledLink>
    )
  }
}

export default HealthBar
