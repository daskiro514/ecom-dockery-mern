import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerSidebar from './CustomerSidebar'
import CustomerDashboard from './CustomerDashboard'
import CustomerStoreManagement from './CustomerStoreManagement'
import CustomerSettings from './CustomerSettings'

const Customer = () => {

  return (
    <div className='container-fluid bg-Customer'>
      <div className='row'>
        <CustomerSidebar />
        <div className='col-md-10'>
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={CustomerDashboard} />
            <PrivateRoute exact path="/settings" component={CustomerSettings} />
            <PrivateRoute exact path="/store-manage" component={CustomerStoreManagement} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Customer