import React, { Component } from "react"
import styled from "styled-components"

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  padding: 0;
  margin: auto;
`

const IconContainer = styled.div`
  text-align: center;
`

const Icons = styled.img`
  width: 40%;
`

const Text = styled.p`
  font-size: 1.5rem;
`

class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <IconContainer>
          <Icons
            src="https://image.flaticon.com/icons/svg/751/751463.svg"
            alt="magnifying-glass"
          ></Icons>
          <Text>Explore</Text>
        </IconContainer>
        <IconContainer>
          <Icons
            src="https://image.flaticon.com/icons/svg/860/860332.svg"
            alt="ticket"
          ></Icons>
          <Text>My Events</Text>
        </IconContainer>
        <IconContainer>
          <Icons
            src="https://image.flaticon.com/icons/svg/848/848043.svg"
            alt="profile"
          ></Icons>
          <Text>Profile</Text>
        </IconContainer>
      </NavContainer>
    )
  }
}

export default NavBar
