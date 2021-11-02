import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminClients from './AdminClients'
import AdminClient from './admin-client/AdminClient'
import AdminNewClient from './AdminNewClient'
import AdminSettings from './AdminSettings'
import AdminHeader from './AdminHeader'
import AdminEducation from './AdminEducation'
import AdminEducationCreate from './AdminEducationCreate'

const Admin = () => {

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <AdminSidebar />
        <div className='col-lg-10 col-md-8 p-3'>
          <AdminHeader />
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={AdminDashboard} />
            <PrivateRoute exact path="/clients" component={AdminClients} />
            <PrivateRoute exact path="/client/:id" component={AdminClient} />
            <PrivateRoute exact path="/addClient" component={AdminNewClient} />
            <PrivateRoute exact path="/settings" component={AdminSettings} />
            <PrivateRoute exact path="/education" component={AdminEducation} />
            <PrivateRoute exact path="/education/create" component={AdminEducationCreate} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Admin