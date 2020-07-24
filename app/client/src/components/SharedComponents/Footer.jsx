import React, { Component } from "react"
import "./Footer.css"
import f1 from "./FooterImages/foot1.jpg"
import f2 from "./FooterImages/foot2.jpg"
import f3 from "./FooterImages/foot3.jpg"
import { Link } from "react-router-dom"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-button">
          <Link to='/dashboard'>
            <img className="footer-icon" alt="foot1" src={f1} />
            <p>Explore</p>
          </Link>
        </div>
        <div className="footer-button">
          <Link to="/dashboard/myevents">
            <img className="footer-icon" alt="foot2" src={f2} />
            <p>My Events</p>
          </Link>
        </div>
        <div className="footer-button">
          <Link to="/profile">
            <img className="footer-icon" alt="foot3" src={f3} />
            <p>Profile</p>
          </Link>
        </div>
      </div>
    ) // profile and events page may be /dashboard/profile or /dashboard/myevents
  }
}
