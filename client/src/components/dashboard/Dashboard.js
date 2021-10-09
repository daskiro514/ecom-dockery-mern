import React from 'react'
import { connect } from 'react-redux'
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
  } else {
    return null
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})

export default connect(mapStateToProps)(Dashboard)