import React, { Component } from "react"
import FacebookLogin from "react-facebook-login"
import styled from "styled-components"

const Icon = styled.img`
  width: 15%;
  height: 15%;
`

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  }

  responseFacebook = (response) => {
    console.log(response)

    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      // picture: response.picture.data.url,
    })
  }

  componentClicked = () => console.log("clicked")

  render() {
    let fbContent

    if (this.state.isLoggedIn) {
      //put render display here
      fbContent = null
    } else {
      fbContent = (
        <FacebookLogin
          appId="3302463606442822"
          autoLoad={true}
          field="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return <div>{fbContent}</div>
  }
}
