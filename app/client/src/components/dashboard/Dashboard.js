import React, { Component } from "react"
import "./Dashboard.css"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import Footer from "../SharedComponents/Footer"

class Dashboard extends Component {
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
            <div>
              Hi {user.name.split(" ")[0]}!
              <p className="dboard-title">Explore nearby events: </p>
            </div>
          </div>
        </div>
        <Footer />
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
