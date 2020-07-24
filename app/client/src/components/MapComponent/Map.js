import React, { Component } from "react"
import Layout from "./Layout.png"

class Map extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Venue Map</h1>
        </div>
        <div>
          <img src="Layout.png"></img>
        </div>
        <div>
          <p>Entrance - Exits</p>
          <p>Restrooms</p>
          <p>Sanitizing Sanitation</p>
          <p>Food & Drinks</p>
          <p>Guest Services</p>
        </div>
      </div>
    )
  }
}

export default Map
