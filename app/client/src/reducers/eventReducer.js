import { GET_EVENT } from "../actions/types"

const initialState = {
  events: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        events: state.events.concat(action.payload),
      }
    default:
      return state
  }
}
