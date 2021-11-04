import api from '../utils/api'
import { setAlert } from './alert'
import {
  MESSAGES_LOADED
} from './types'

export const addNewMessage = (formData) => async dispatch => {
  const res = await api.post('/message/addNewMessage', formData)

  if (res.data.success) {
    dispatch(getMessages(formData.client))
  }
}

export const getMessages = clientID => async dispatch => {
  const res = await api.get(`/message/getMessages/${clientID}`)

  if (res.data.success) {
    dispatch({
      type: MESSAGES_LOADED,
      payload: res.data.messages
    })
  }
}

export const deleteMessage = (clientID, messageID) => async dispatch => {
  const res = await api.delete(`/message/deleteMessage/${messageID}`)

  if (res.data.success) {
    dispatch(getMessages(clientID))
  }
}