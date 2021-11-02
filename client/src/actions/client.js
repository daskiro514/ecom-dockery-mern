import api from '../utils/api'
import { setAlert } from './alert'
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

export const deleteNotification = (clientID, notificationID) => async dispatch => {
  const res = await api.delete(`/client/deleteNotification/${notificationID}`)

  if (res.data.success) {
    dispatch(setAlert('Notification Deleted!', 'success'))
    dispatch(getNotifications(clientID))
  }
}