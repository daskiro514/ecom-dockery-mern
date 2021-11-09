import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import ClientSidebar from './ClientSidebar'
import ClientAccount from './ClientAccount'
import ClientStoreManagement from './ClientStoreManagement'
import ClientSettings from './ClientSettings'
import ClientHeader from './ClientHeader'
import ClientStoreReport from './ClientStoreReport'
import ClientEducation from './ClientEducation'
import ClientMessages from './ClientMessages'
import { getAdminMessageNumbers, getMessages } from '../../actions/message'
import { setAlert } from '../../actions/alert'

var firstIntervalID = -1

const Client = ({ setAlert, clientID, getMessages }) => {
  React.useEffect(() => {
    var intervalID = setInterval(async function () {
      let messageNumbersFromLocalStorage = JSON.parse(localStorage.getItem('adminMessageNumbers'))
      let messageNumbersFromDB = await getAdminMessageNumbers(clientID)

      if (messageNumbersFromDB.messageNumber === 0) {

      } else if (messageNumbersFromDB.messageNumber > messageNumbersFromLocalStorage.messageNumber) {
        setAlert(`There are ${messageNumbersFromDB.messageNumber - messageNumbersFromLocalStorage.messageNumber} new messages from Admin`, 'success')
        getMessages(clientID)
      } else if (messageNumbersFromDB.messageNumber < messageNumbersFromLocalStorage.messageNumber) {
        getMessages(clientID)
      }

      localStorage.setItem('adminMessageNumbers', JSON.stringify(messageNumbersFromDB))
    }, 5000)

    if (firstIntervalID < 0) {
      firstIntervalID = intervalID
    } else {
      clearInterval(intervalID)
    }
  }, [getMessages, setAlert, clientID])

  return (
    <div className='container-fluid bg-Client bg-admin'>
      <div className='row'>
        <ClientSidebar />
        <div className='col-lg-10 col-md-8 p-3'>
          <ClientHeader />
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={ClientStoreReport} />
            <PrivateRoute exact path="/messages" component={ClientMessages} />
            <PrivateRoute exact path="/account" component={ClientAccount} />
            <PrivateRoute exact path="/education" component={ClientEducation} />
            <PrivateRoute exact path="/store-manage" component={ClientStoreManagement} />
            <PrivateRoute exact path="/settings" component={ClientSettings} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  clientID: state.auth.user._id
})

export default connect(mapStateToProps, { setAlert, getMessages })(Client)