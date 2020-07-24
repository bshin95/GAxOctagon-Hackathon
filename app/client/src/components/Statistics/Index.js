import React, { Component } from "react"
import { connect } from "react-redux"
import { Pie, Line } from "react-chartjs-2"
import { getEvent } from "../../actions/eventActions"
import LogoComponent from "../Logo/LogoComponent"
import styled from "styled-components"

const StatsContainer = styled.div`
  text-align: center;
  padding: 0 1rem;
`

const EventDescription = styled.div`
  text-align: left;
  font-size: 2.5rem;
  padding: 1rem 2rem;
`

const StyledH2 = styled.h2`
  text-align: left;
  font-size: 1.5rem;
`

class Statistics extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getEvent("5f1a6f9c4068c084ff9a2e71")
  }

  render() {
    const event = this.props.events[0]
    console.log("event==>>>", event)
    const pieData = {
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ["navy", "mediumpurple"],
        },
      ],
    }

    const lineData = {
      labels: ["0", "10", "20", "30", "40", 50, "60", "70"],
      datasets: [
        {
          label: "Age",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 2, 20, 40, 25, 20, 10],
        },
      ],
    }

    return (
      <div>
        <LogoComponent />
        <StatsContainer>
          {event && (
            <div>
              <h1>Event Statistics</h1>
              <hr />
              <EventDescription>
                <p>
                  <b>Event Name: </b>
                  {event.name}
                </p>
                <p>
                  <b>Location: </b>
                  {event.location}
                </p>
                <p>
                  <b>Date: </b>
                  {event.date}
                </p>
                <p>
                  <b>Time: </b>
                  {event.time}
                </p>
              </EventDescription>
              <hr />
              <EventDescription>
                <p>
                  <b>Number of Attendees: </b>
                  {event.attendees.length}
                </p>
              </EventDescription>
              <hr />
              <StyledH2>
                <b>Gender</b>
              </StyledH2>
              <div style={{ height: "200px", width: "350px" }}>
                <Pie data={pieData} />
              </div>
              <hr />
              <StyledH2>
                <b>Age</b>
              </StyledH2>
              <div style={{ height: "200px", width: "350px" }}>
                <Line data={lineData} />
              </div>
            </div>
          )}
        </StatsContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
})

const mapActionsToProps = { getEvent }

export default connect(mapStateToProps, mapActionsToProps)(Statistics)
