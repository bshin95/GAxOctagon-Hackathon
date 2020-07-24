import React, { Component } from "react"
import Layout from "./Layout.png"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

class Map extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Venue Map</h1>
        </div>
        <div>
          <img src="Layout.png"></img>
        </div>
        <div>
          <p>Entrance - Exits</p>
          <p>Restrooms</p>
          <p>Sanitizing Sanitation</p>
          <p>Food & Drinks</p>
          <p>Guest Services</p>
        </div>
      </Container>
    )
  }
}

export default Map
