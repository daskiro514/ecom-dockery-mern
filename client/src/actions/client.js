import api from '../utils/api'
import {
  CLIENT_NOTIFICATIONS_LOADED,
} from './types'

export const getNotifications = clientID => async dispatch => {
  const res = await api.get(`/client/getNotifications/${clientID}`)

  if (res.data.success) {
    dispatch({
      type: CLIENT_NOTIFICATIONS_LOADED,
      payload: res.data.notifications
    })
  }
}