import api from '../utils/api'
import {
  ADMIN_CLIENTS_LOADED
} from './types'

export const getAdminClients = () => async dispatch => {
  const res = await api.get('/admin/getAdminClients')

  if (res.data.success) {
    dispatch({
      type: ADMIN_CLIENTS_LOADED,
      payload: res.data.clients
    })
  }
}

export const goPage = (history, location) => async () => {
  await history.push(`/${location}`)
}

export const addNewClient = (formData, history) => async dispatch => {
  const res = await api.post('/admin/addNewClient', formData)

  if (res.data.success) {
    console.log('ok')
  }
}