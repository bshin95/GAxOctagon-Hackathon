import React, { Component } from 'react'
import Footer from '../SharedComponents/Footer'
import './MyEvents.css'
import { Link } from 'react-router-dom'

export default class MyEvents extends Component {

  render () {
    return (
      <>
      <div>
        <p className="page-title">My Events</p>
        </div>
        <div className="events e1">
          <Link to="/dashboard/checkin">
            <div className="e-container">
              <p className="e-title">Mets VS. Yankees</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
          </div>
          </Link>
        </div>
        <div className="events e2">
          <Link to='/dashboard/checkin'>
            <div className="e-container">
              <p className="e-title">Bad Bunny</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
            </div>
          </Link>
          </div>
        <div className="events e3">
          <Link to='/dashboard/checkin'>
            <div className="e-container">
              <p className="e-title">Productcon</p>
              <p className="e-date">April 23, 2002</p>
              <p className="e-purchased">StubHub</p>
            </div>
          </Link>
          </div>
        </>
    )
  }
}
