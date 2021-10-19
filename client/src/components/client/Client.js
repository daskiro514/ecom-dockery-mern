import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import ClientSidebar from './ClientSidebar'
import ClientAccount from './ClientAccount'
import ClientStoreManagement from './ClientStoreManagement'
import ClientSettings from './ClientSettings'
import ClientHeader from './ClientHeader'
import ClientStoreReport from './ClientStoreReport'

const Client = () => {

  return (
    <div className='container-fluid bg-Client bg-admin'>
      <div className='row'>
        <ClientSidebar />
        <div className='col-lg-10 col-md-8 p-3'>
          <ClientHeader />
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={ClientAccount} />
            <PrivateRoute exact path="/store-manage" component={ClientStoreManagement} />
            <PrivateRoute exact path="/store-report" component={ClientStoreReport} />
            <PrivateRoute exact path="/settings" component={ClientSettings} />
          </Router>
        </div>
      </div>
    </div>
  )
}

export default Client