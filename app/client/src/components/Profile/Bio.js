import React, { Component } from "react"
import styled from "styled-components"

class Bio extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { bio } = this.props
    return (
      <div>
        <h1>BIO</h1>
        <p>{bio}</p>
      </div>
    )
  }
}

export default Bio
