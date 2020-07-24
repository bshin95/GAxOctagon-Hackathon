import axios from "axios"
import { GET_EVENT } from "./types"

export const getEvent = (eventId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/events/${eventId}`)
    console.log("data==>>>", data)
    dispatch({ type: GET_EVENT, payload: data })
  } catch (err) {
    console.log("error fetching event==>>>", err)
  }
}
