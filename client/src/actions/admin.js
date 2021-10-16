import api from '../utils/api'
import { setAlert } from './alert'
import {
  ADMIN_CLIENTS_LOADED,
  ADMIN_CLEINT_LOADED,
  ADMIN_CLIENT_SET_CURRENT_PAGE
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
    dispatch(setAlert('Client Added Successfully!', 'success'))
    dispatch(goPage(history, 'clients'))
  }
}

export const getClient = clientID => async dispatch => {
  const res = await api.get(`/admin/getClient/${clientID}`)

  if (res.data.success) {
    dispatch({
      type: ADMIN_CLEINT_LOADED,
      payload: res.data.client
    })
  }
}

export const setClientCurrentPage = page => dispatch => {
  dispatch({
    type: ADMIN_CLIENT_SET_CURRENT_PAGE,
    payload: page
  })
}

export const updateClientDocumentStatus = (clientID, keyInDB, updateType) => async dispatch => {
  const res = await api.post('/admin/updateClientDocumentStatus', {
    clientID, keyInDB, updateType
  })

  if (res.data.success) {
    if (updateType === 'Approve') dispatch(setAlert('Document Approved Successfully!', 'success'))
    if (updateType === 'Deny') dispatch(setAlert('Document Denied Successfully!', 'success'))
    dispatch(getClient(clientID))
  }
}