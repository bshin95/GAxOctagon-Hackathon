import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="headerContainer">
          <div className='headerNav'>
            <Link to='/'>Home</Link>
            <Link>Profile</Link>
            <Link to='/events'>BrowseEvents</Link>
            <Link>Your Upcoming Events</Link>
            <Link to='/user/signin'>Sign In</Link>
          </div>
        </div>
      </>
    )
  }
}
