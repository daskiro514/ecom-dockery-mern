import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import admin from './admin'
import client from './client'

export default combineReducers({
  alert,
  auth,
  admin,
  client
})
