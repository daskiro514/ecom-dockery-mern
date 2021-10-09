import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from "react-router-dom"

const CustomerSidebar = ({ logout }) => {
  let history = useHistory()

  const goPage = async location => {
    await history.push(`/`)
    await history.push(`/dashboard`)
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-md-2 p-2 sidebar'>
      <div className='container-fluid'>
        <div className='row mx-3' onClick={() => goPage('')}>
          Dashboard
        </div>
        <div className='row mx-3' onClick={() => goPage('store-manage')}>
          Store Management
        </div>
        <div className='row mx-3' onClick={() => goPage('settings')}>
          Settings
        </div>
        <div className='row mx-3' onClick={logout}>
          &#8601; Sign Out
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logout})(CustomerSidebar)
