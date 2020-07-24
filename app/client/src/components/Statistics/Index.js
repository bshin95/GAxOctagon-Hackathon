import React, { Component } from "react"
import { connect } from "react-redux"
import { Pie, Line } from "react-chartjs-2"
import { getEvent } from "../../actions/eventActions"

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
          backgroundColor: ["blue", "pink"],
        },
      ],
    }

    const lineData = {
      labels: ["0", "10", "20", "30", "40", 50, "60", "70"],
      datasets: [
        {
          label: "My First dataset",
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
        {event && (
          <div>
            <h1>Event Statistics</h1>
            <p>Event Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <hr />
            Number of Attendees: {event.attendees.length}
            <hr />
            <div style={{ height: "300px", width: "300px" }}>
              <Pie data={pieData} />
            </div>
            <hr />
            <div style={{ height: "400px", width: "700px" }}>
              <Line data={lineData} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.event.events,
})

const mapActionsToProps = { getEvent }

export default connect(mapStateToProps, mapActionsToProps)(Statistics)
