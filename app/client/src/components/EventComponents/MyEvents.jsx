import React, { Component } from "react"
import "./MyEvents.css"

export default class MyEvents extends Component {
  constructor() {
    super()
    this.state = {
      events: null,
    }
  }

  goToStatPage = () => this.props.history.push("/stats")

  render() {
    return (
      <>
        <p className="myevents-title">My Events</p>
        <i
          onClick={this.goToStatPage}
          className="material-icons icon align"
          style={{
            fontSize: "50px",
            //textAlign: "center",
            //verticalAlign: "text-bottom",
          }}
        >
          check_circle
        </i>
        {/*<div className="myevents-container">
          <div className="event1">Mets vs. Yankees</div>
    </div>*/}
      </>
    )
  }
}
