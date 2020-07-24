import React, { Component } from "react"
import Layout from "./Layout.png"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const MapLayout = styled.img`
  width: 50%;
`

class Map extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Venue Map</h1>
        </div>
        <div>
          <MapLayout src={Layout}></MapLayout>
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
