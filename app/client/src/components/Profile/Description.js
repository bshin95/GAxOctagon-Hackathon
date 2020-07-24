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
        <PicContainer>
          <ProPic src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></ProPic>
        </PicContainer>
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
