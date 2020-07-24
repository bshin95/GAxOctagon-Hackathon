import React from 'react'
import './DashboardNAV.css'
import {Link} from 'react-router-dom'

export default function DashboardNAV() {
  return (
    <div className="nav-Container">
      <Link className="dbnav" to="/dashboard">All</Link>
      <Link className="dbnav" to="/dashboard">Concerts</Link>
      <Link className="dbnav" to="/dashboard">Sports</Link>
      <Link className="dbnav" to="/dashboard">Broadway</Link>
      <p className="dbplus"to="/dashboard">+</p>
    </div>
  )
}
