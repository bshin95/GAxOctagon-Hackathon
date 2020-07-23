import React, { Component } from "react"
import logo from "./logo.png"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 375px) {
    padding: 0.5rem;
    overflow: hidden;
  }
`

const Img = styled.img`
  @media (max-width: 375px) {
    overflow: hidden;
  }
`

class LogoComponent extends Component {
  render() {
    return (
      <Div>
        <Img src={logo}></Img>
      </Div>
    )
  }
}

export default LogoComponent
