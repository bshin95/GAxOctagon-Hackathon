import React, { Component } from 'react'
import Footer from '../SharedComponents/Footer'
import './MyEvents.css'

export default class MyEvents extends Component {
  render() {
    return (
      <>
      <div>
        <p className="page-title">My Events</p>
        </div>
        <div className="events e1">
            <div className="e-container">
              <p className="e-title">Mets VS. Yankees</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
            </div>
          </div>
          <div className="events e2">
            <div className="e-container">
              <p className="e-title">Bad Bunny</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
            </div>
          </div>
          <div className="events e3">
            <div className="e-container">
              <p className="e-title">Productcon</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
          </div>
          </div>
        <Footer />
        </>
    )
  }
}
