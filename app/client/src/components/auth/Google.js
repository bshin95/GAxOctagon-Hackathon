import React, { Component } from "react"
import GoogleLogin from "react-google-login"

export class Google extends Component {
  responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="991867730740-7tp5lsq6q42coas029lpcan9k5h9d23s.apps.googleusercontent.com"
          buttonText=""
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    )
  }
}

export default Google
