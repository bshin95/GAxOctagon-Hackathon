import React, { Component } from 'react'
import './Footer.css'
import f1 from './FooterImages/foot1.jpg'
import f2 from './FooterImages/foot2.jpg'
import f3 from './FooterImages/foot3.jpg'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-button">
          <img className="footer-icon" src={f1} alt="icon"/>
          <p>Explore</p>
        </div>
        <div className="footer-button">
          <img className="footer-icon" src={f2} alt="icon"/>
          <p>My Events</p>
        </div>
        <div className="footer-button">
          <img className="footer-icon" src={f3} alt="icon"/>
          <p>Profile</p>
        </div>
      </div>
    )
  }
}

