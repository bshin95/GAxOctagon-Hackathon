import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"

import { setCurrentUser, logoutUser } from "./actions/authActions"
import { Provider } from "react-redux"
import store from "./store"

import Landing from "./components/layout/Landing"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import PrivateRoute from "./components/private-route/PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard"
import ProfileComponent from "./components/Profile/ProfileComponent"
import Stats from "./components/Statistics/Index"
import MyEvents from "./components/UserComponents/MyEvents"

import "./App.css"
import styled from "styled-components"
import Footer from "./components/SharedComponents/Footer"
import CheckIn from "./components/UserComponents/CheckIn"
import CheckedIn from "./components/UserComponents/CheckedIn"
import Map from "./components/MapComponent/Map"

const AppContainer = styled.div`
  /* padding: 1rem; */
`

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  // Decode token and get user info and exp
  const decoded = jwt_decode(token)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))
  // Check for expired token
  const currentTime = Date.now() / 1000 // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())

    // Redirect to login
    window.location.href = "./login"
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppContainer>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={ProfileComponent} />
            <Route exact path="/stats" component={Stats} />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/dashboard/myevents"
                component={MyEvents}
              />
              <PrivateRoute
                exact
                path="/dashboard/checkin"
                component={CheckIn}
              />
              <PrivateRoute
                exact
                path="/dashboard/checkedin"
                component={CheckedIn}
              />
            </Switch>
            <Route path="/dashboard/map" component={Map} />
            <Route path="/dashboard" component={Footer} />
          </AppContainer>
        </Router>
      </Provider>
    )
  }
}
export default App
