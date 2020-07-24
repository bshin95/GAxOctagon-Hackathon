import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 1rem;
`

const Event = styled.div`
  text-align: center;
  color: #15014d;
`

const Description = styled.div`
  text-align: left;
  color: #15014d;
`

const Icons = styled.img`
  width: 20%;
`

const IconRows = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`

class healthsafety extends Component {
  render() {
    return (
      <Container>
        <Event>
          <h1>Health & Safety Protocols</h1>
          <div>
            <p>Barclays Center Brooklyn, NY</p>
          </div>
        </Event>
        <Description>
          The health and safety of artists, fans, industry, staff and partners
          is of the utmost importance. Among the measures all parties involved
          have aligned to include extensive social distancing procedures,
          meaningful capacity limitations. Barclays Center is unequivocally
          committed to ensuring that the show does not compromise the health and
          safety of anyone involved in the event.
        </Description>
        <div>
          <IconRows>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/2950/2950160.svg"></Icons>
              <p>Masks Required</p>
            </div>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/2913/2913371.svg"></Icons>
              <p>Sanitizing Stations</p>
            </div>
          </IconRows>
          <IconRows>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/2927/2927101.svg"></Icons>
              <p>Temperature Checks</p>
            </div>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/2937/2937133.svg"></Icons>
              <p>Limited Capacity</p>
            </div>
          </IconRows>
          <IconRows>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/3209/3209227.svg"></Icons>
              <p>Wheelchair Accessible</p>
            </div>
            <div>
              <Icons src="https://image.flaticon.com/icons/svg/3063/3063121.svg"></Icons>
              <p>Onsite First-Aid</p>
            </div>
          </IconRows>
        </div>
      </Container>
    )
  }
}

export default healthsafety
