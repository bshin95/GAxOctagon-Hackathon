import React, { Component } from "react"
import Layout from "./Layout.png"
import styled from "styled-components"
import Footer from "../SharedComponents/Footer"

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`

const MapLayout = styled.img`
  width: 50%;
`

const Info = styled.div`
  display: flex;
  text-align: center;
  padding: 0 3rem;
`

const IconImg = styled.img`
  width: 10%;
`

const Direction = styled.div`
  align-items: center;
`

class Map extends Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <h1>Venue Map</h1>
          </div>
          <div>
            <MapLayout src={Layout}></MapLayout>
          </div>
          <Direction>
            <Info>
              <IconImg src="https://image.flaticon.com/icons/svg/2088/2088029.svg"></IconImg>
              <p>Entrance - Exits</p>
            </Info>
            <Info>
              <IconImg src="https://image.flaticon.com/icons/svg/1656/1656887.svg"></IconImg>
              <p>Restrooms</p>
            </Info>
            <Info>
              <IconImg src="https://image.flaticon.com/icons/svg/2913/2913485.svg"></IconImg>
              <p>Sanitizing Sanitation</p>
            </Info>
            <Info>
              <IconImg src="https://image.flaticon.com/icons/svg/3132/3132691.svg"></IconImg>
              <p>Food & Drinks</p>
            </Info>
            <Info>
              <IconImg src="https://image.flaticon.com/icons/svg/786/786024.svg"></IconImg>
              <p>Guest Services</p>
            </Info>
          </Direction>
        </Container>
      </>
    )
  }
}

export default Map
