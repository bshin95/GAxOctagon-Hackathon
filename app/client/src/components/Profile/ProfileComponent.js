import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Bio from "./Bio"
import Description from "./Description"
import { updateUser, getUser } from "../../actions/authActions"

const UpperContainer = styled.div`
  display: flex;
`

const LowerContainer = styled.div`
  text-align: left;
`

class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      location: "",
      occupation: "",
      interestOne: "",
      interestTwo: "",
      interestThree: "",
      bio: "",
      options: [
        { value: "concert", label: "Concert", disabled: false },
        { value: "sports", label: "Sports", disabled: false },
        { value: "musical", label: "Musical", disabled: false },
        { value: "conventions", label: "Conventions", disabled: false },
        { value: "exercise", label: "Exercise", disabled: false },
      ],
    }
  }

  componentDidMount() {
    const { user } = this.props
    this.props.getUser(user.id)
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props
    if (user && user !== prevProps.user) {
      this.setState({ ...user })
    }
  }

  handleInputChange = (e) => this.setState({ [e.target.id]: e.target.value })

  handleSelectChange = (e) => {
    const { options } = this.state
    const selectedOption = options.find((o) => o.value === e.target.value)
    selectedOption.disabled = true
    this.setState({ [e.target.id]: e.target.value, options })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.updateUser(this.state)
  }

  render() {
    console.log("props==>>", this.state)
    const {
      name,
      email,
      password,
      gender,
      age,
      location,
      occupation,
      interestOne,
      interestTwo,
      interestThree,
      bio,
      options,
    } = this.state
    return (
      <div>
        <UpperContainer>
          <Bio bio={bio} />
        </UpperContainer>
        <LowerContainer>
          <Description name={name} age={age} location={location} />
        </LowerContainer>

        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={this.handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={this.handleInputChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              id="gender"
              value={gender}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              value={location}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="occupation">Occupation</label>
            <input
              id="occupation"
              value={occupation}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="interestOne">Interest One</label>
            <select
              id="interestOne"
              value={interestOne}
              onChange={this.handleSelectChange}
            >
              <option value="">Select an Option</option>
              {options.map((o) => (
                <option disabled={o.disabled} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="interestTwo">Interest Two</label>
            <select
              id="interestTwo"
              value={interestTwo}
              onChange={this.handleSelectChange}
            >
              <option value="">Select an Option</option>
              {options.map((o) => (
                <option disabled={o.disabled} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="interestThree">Interest Three</label>
            <select
              id="interestThree"
              value={interestThree}
              onChange={this.handleSelectChange}
            >
              <option value="">Select an Option</option>
              {options.map((o) => (
                <option disabled={o.disabled} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input id="bio" value={bio} onChange={this.handleInputChange} />
          </div>
          <button>Submit</button> -<button type="cancel">Cancel</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

const mapActionsToProps = {
  updateUser,
  getUser,
}

export default connect(mapStateToProps, mapActionsToProps)(ProfileComponent)
