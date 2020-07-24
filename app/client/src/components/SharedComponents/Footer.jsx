import React, { Component } from 'react'
import './Footer.css'
import f1 from './FooterImages/foot1.jpg'
import f2 from './FooterImages/foot2.jpg'
import f3 from './FooterImages/foot3.jpg'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <Link to="/dashboard">
            <div className="footer-button">
              <img className="footer-icon" src={f1} alt="icon" />
              <p>Explore</p>
            </div>
          </Link>

          <Link to='/dashboard/myevents'>
            <div className="footer-button">
              <img className="footer-icon" src={f2} alt="icon" />
              <p>My Events</p>
            </div>
          </Link>
          <Link to='/dashboard/myprofile'>
            <div className="footer-button">
              <img className="footer-icon" src={f3} alt="icon" />
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </>
    )
  }
}

