import React, { Component } from "react"
import styled from "styled-components"
import LogoComponent from "../Logo/LogoComponent"
import { Link } from "react-router-dom"

const ProfileContainer = styled.div``

const Name = styled.h1`
  font-size: 5rem;
`

const ProfileDescription = styled.div`
  font-size: 2rem;
  padding: 0;
`

const PicContainer = styled.div`
  text-align: center;
  overflow: hidden;
  /* border-radius: 50%; */
`
const ProPic = styled.img`
  width: 70%;
  border-radius: 50%;
`

class Description extends Component {
  render() {
    const { age, name, location } = this.props
    return (
      <ProfileContainer>
        <Link to="/dashboard">
          <LogoComponent />
        </Link>
        <div>
          <Name>{name}</Name>
        </div>
        <ProfileDescription>
          <p>Age: {age}</p>
          <p>{location}</p>
        </ProfileDescription>
      </ProfileContainer>
    )
  }
}

export default Description
