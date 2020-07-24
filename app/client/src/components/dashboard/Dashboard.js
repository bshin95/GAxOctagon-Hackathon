import React, { Component } from "react"
import "./Dashboard.css"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import Footer from "../SharedComponents/Footer"
import { getEvents } from "../../services/event"
import DashboardNAV from "./DashboardNAV"
import { Route } from "react-router-dom"
import styled from "styled-components"

const Search = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const SearchBar = styled.input`
  border: none;
`

const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 75%;
  border-radius: 15px;
`

const LogoutContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
`

const LogoutButton = styled.button`
  text-align: center;
  background-color: #f8818a;
  padding: 1rem 4rem;
  border-radius: 25px;
`

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      events: null,
    }
  }

  async componentDidMount() {
    const events = await getEvents()
    this.setState({ events })
    console.log(events)
  }

  onLogoutClick = (e) => {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    const { user } = this.props.auth

    return (
      <>
        <div className="dboard-container">
          <div className="dboard-title">
            <p className="dboard-text">
              Hi {user.name.split(" ")[0]}!<b />
            </p>
            <p className="dboard-text">Explore nearby events:</p>
            <Search>
              <SearchContainer className="search-bar">
                <SearchBar
                  className="search-input"
                  name="Search"
                  placeholder="Search for events..."
                  type="text"
                />
              </SearchContainer>
            </Search>
            <DashboardNAV />
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
        </div>
        <LogoutContainer>
          <LogoutButton
            onClick={this.onLogoutClick}
            // className=“btn btn-large waves-effect waves-light hoverable blue accent-3”
          >
            Logout
          </LogoutButton>
        </LogoutContainer>
        <Route path="/dashboard" component={Footer} />
      </>
    )
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
