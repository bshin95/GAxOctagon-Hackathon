import React, { Component } from "react"
import { Link } from "react-router-dom"
import Slider from "../Carousel/Slider"
import LogoComponent from "../Logo/LogoComponent"
import styled from "styled-components"

const LandingPage = styled.div`
  color: #17014c;
`

const RegisterLink = styled(Link)`
  border-radius: 25px;
  /* padding: 20px; */
  padding: 2rem 3rem;
  width: 200px;
  height: 150px;
  background: #fa818a;
  color: #17014c;
  font-size: 2rem;
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`

const LoginLink = styled(Link)`
  font-size: 2rem;
  color: #17014c;
  text-decoration: underline;
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`

const ButtonContainer = styled.div`
  text-align: center;
`

const ButtonDiv = styled.div`
  padding: 3rem 0;
  font-size: 2rem;
  color: #17014c;
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`

class Landing extends Component {
  render() {
    return (
      <LandingPage>
        <div>
          <LogoComponent />
        </div>
        <div>
          <Slider />
        </div>
        <ButtonContainer>
          <ButtonDiv>
            <RegisterLink to="/register">Create Account</RegisterLink>
          </ButtonDiv>
          <ButtonDiv>
            Already have an account? <LoginLink to="/login">Sign In</LoginLink>
          </ButtonDiv>
        </ButtonContainer>
      </LandingPage>
    )
  }
}

export default Landing
