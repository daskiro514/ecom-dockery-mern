import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Admin from '../admin/Admin'
import Customer from '../customer/Customer'

const Dashboard = ({ isAuthenticated, user }) => {
  if (isAuthenticated && user && user.type === "admin") {
    return (
      <Admin />
    )
  } else if (isAuthenticated && user && user.type === "customer") {
    return (
      <Customer />
    )
  } else if (isAuthenticated !== true) {
    return <Redirect to={'/'} />
  } else {
    return null
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps)(Dashboard)