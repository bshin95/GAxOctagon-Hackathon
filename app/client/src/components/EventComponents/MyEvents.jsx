import React, { Component } from 'react'
import getAllEvents from '../../events'
import './MyEvents.css'

export default class MyEvents extends Component {
  constructor() {
    super()
    this.state = {
      events: null
    }
  }

  render() {
    return (
      <>
        <p className="myevents-title">My Events</p>
        <div className="myevents-container">
          <div className="event1">Mets vs. Yankees</div>
        </div>
      </>
    )
  }
}
