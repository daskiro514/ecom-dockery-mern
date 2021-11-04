import {
  MESSAGES_LOADED
} from '../actions/types'

const initialState = {
  messages: []
}

const messageReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case MESSAGES_LOADED: 
      return {
        ...state,
        messages: payload,
      }
    default:
      return state
  }
}

export default messageReducer