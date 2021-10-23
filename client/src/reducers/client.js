import {
  CLIENT_NOTIFICATIONS_LOADED
} from '../actions/types'

const initialState = {
  notifications: []
}

const clientReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case CLIENT_NOTIFICATIONS_LOADED: 
      return {
        ...state,
        notifications: payload,
      }
    default:
      return state
  }
}

export default clientReducer