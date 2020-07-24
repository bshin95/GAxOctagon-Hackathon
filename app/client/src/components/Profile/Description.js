import React, { Component } from "react"

class Description extends Component {
  render() {
    const { age, name, location } = this.props
    return (
      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <div>
            <p>Age: {age}</p>
          </div>
          <div>
            <p>{location}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Description
