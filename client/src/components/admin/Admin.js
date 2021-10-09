import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminSettings from './AdminSettings'
import AdminHeader from './AdminHeader'

const Admin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <AdminSidebar />
        <div className='col-md-10 p-3'>
          <AdminHeader />
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={AdminDashboard} />
            <PrivateRoute exact path="/settings" component={AdminSettings} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Admin