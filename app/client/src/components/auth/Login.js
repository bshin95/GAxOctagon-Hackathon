import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"
import LogoComponent from "../Logo/LogoComponent"
import styled from "styled-components"
// import Facebook from "./Facebook"
import Google from "./Google"

const Btn = styled.button`
  border-radius: 25px;
  /* padding: 20px; */
  padding: 0rem;
  width: 200px;
  height: 50px;
  background: #fa818a;
  color: #17014c;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 375px) {
  }
`

const BtnDiv = styled.div`
  text-align: center;
`

const Register = styled(Link)`
  color: #17014c;
`

const SocialLogin = styled.div`
  /* display: flex; */
  text-align: center;
`

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      errors: {},
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard")
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.loginUser(userData)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="container">
        <LogoComponent />
        <div style={{ marginTop: "4rem" }} className="row">
          <div>
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <p className="grey-text text-darken-1">
                Don't have an account?{" "}
                <Register to="/register">Register</Register>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <BtnDiv>
                <Btn>Sign In</Btn>
              </BtnDiv>
            </form>
          </div>
        </div>
        <div>
          <SocialLogin>
            {/* <Facebook /> */}
          </SocialLogin>
          <SocialLogin>
            <Google />
          </SocialLogin>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(Login)
