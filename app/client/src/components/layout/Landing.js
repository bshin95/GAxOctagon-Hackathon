import React, { Component } from "react"
import { Link } from "react-router-dom"

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Check-In</b> to all your favorite events with Events Manager
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Easily find your favorite events and let your friends know you've
              checked-in.
            </p>
            <br />
            <div>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Create an account
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                // style={{
                //   width: "140px",
                //   borderRadius: "3px",
                //   letterSpacing: "1.5px",
                // }}
                // className="btn btn-large btn-flat waves-effect white black-text"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
