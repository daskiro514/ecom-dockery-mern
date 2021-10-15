import {
  ADMIN_CLIENTS_LOADED
} from '../actions/types'

const initialState = {
  clients: []
}

const adminReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case ADMIN_CLIENTS_LOADED: 
      return {
        ...state,
        clients: payload,
      }
    default:
      return state
  }
}

export default adminReducer