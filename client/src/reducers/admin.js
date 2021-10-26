import {
  CURRENT_PAGE_SET,
  ADMIN_PAGE_SET_LOADING,
  ADMIN_CLIENTS_LOADED,
  ADMIN_CLEINT_LOADED,
  ADMIN_CLIENT_SET_CURRENT_PAGE,
  ADMIN_CLIENT_ORDERS_LOADED,
} from '../actions/types'

const initialState = {
  currentPage: 'dashboard',
  isLoading: false,
  clients: [],
  adminClient: null,
  adminClientCurrentPage: 'document',
  adminClientOrders: []
}

const adminReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case CURRENT_PAGE_SET: {
      return {
        ...state,
        currentPage: payload
      }
    }
    case ADMIN_PAGE_SET_LOADING: 
      return {
        ...state,
        isLoading: payload
      }
    case ADMIN_CLIENTS_LOADED: 
      return {
        ...state,
        clients: payload,
      }
    case ADMIN_CLEINT_LOADED:
      return {
        ...state,
        adminClient: payload
      }
    case ADMIN_CLIENT_SET_CURRENT_PAGE:
      return {
        ...state,
        adminClientCurrentPage: payload
      }
    case ADMIN_CLIENT_ORDERS_LOADED:
      return {
        ...state,
        adminClientOrders: payload
      }
    default:
      return state
  }
}

export default adminReducer