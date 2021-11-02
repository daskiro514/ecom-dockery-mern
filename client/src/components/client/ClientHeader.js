import React from 'react'
import { connect } from 'react-redux'
import bell from '../../img/common/bell.png'
import { getNotifications } from '../../actions/client'
import { useHistory } from 'react-router'

const ClientHeader = ({ getNotifications, notifications, clientID }) => {
  const history = useHistory()

  React.useEffect(() => {
    getNotifications(clientID)
  }, [getNotifications, clientID])

  return (
    <div className='admin-header d-flex flex-row-reverse align-items-center pr-3'>
      {notifications.length ?
        <img src={bell} className='ml-2 cursor-pointer' alt='BELL' height='20px' />
        :
        <i className='fa fa-bell ml-2 cursor-pointer'></i>
      }
      <i onClick={() => history.push('/dashboard/email')} className='fa fa-question-circle ml-2 cursor-pointer'></i>
    </div>
  )
}

const mapStateToProps = state => ({
  clientID: state.auth.user._id,
  notifications: state.client.notifications
})

export default connect(mapStateToProps, { getNotifications })(ClientHeader)