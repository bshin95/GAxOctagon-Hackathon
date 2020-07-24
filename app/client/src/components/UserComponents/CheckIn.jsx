import React, { Component } from 'react'
import './CheckIn.css'
import { Link } from 'react-router-dom'

export default class CheckIn extends Component {
  render() {
    const React = require('react');
    console.log(React)
    const QRCode = require('qrcode.react');
    return (
      <div className="checkin-container">
        <div className="event-info">
          <div className="event-title">Bad Bunny</div>
          <div className="event-venue">Barclays Center</div>
          <div className="event-date">June 12th, 7PM</div>
        </div>
        <div className="qrcode-container">
          <Link to='/dashboard/checkedin'>
            <QRCode value="http://facebook.github.io/react/" />
          </Link>
          <p className="event-seating">SECTION: A1 ROW:2 SEAT:3</p>
          <p className="share-button">Share</p>
        </div>
        <div className="venue-buttons">
          <Link to="/dashboard/map">
            <p className="venue-button">Venue Map</p>
          </Link>
          <Link to='/dashboard/health'>
            <p className="venue-button">Health {'&'} Safety</p>
          </Link>
          <p className="venue-button">Food {'&'} Drink </p>
          <p className="venue-button">Schedule </p>
        </div>
      </div>
    )
  }
}
