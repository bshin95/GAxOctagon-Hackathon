import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './SharedComponents/Header'
import LandingPage from './LandingPage'
import Events from './EventComponents/Events'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={() => <Header />} />
        <Route exact path='/' render={() => <LandingPage />} />
        <Route exact path='/events' render={() => <Events />} />
      </div>
    )
  }
}
