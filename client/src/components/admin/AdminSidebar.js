import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from "react-router-dom"

const AdminSidebar = ({ logout }) => {
  let history = useHistory()

  const goPage = async location => {
    await history.push(`/`)
    await history.push(`/dashboard`)
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='col-lg-2 col-md-4 p-2 pt-3 sidebar'>
      <div className='container-fluid'>
        <div className='row m-1 p-2 h5 bg-white rounded-lg'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <div>
              <i className='fa fa-heart-o pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
              <span>ProtoType</span>
            </div>
            <i className='fa fa-align-justify pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
          </div>
        </div>
        <div className='row mx-1 pt-4 h5'>
          Menu
        </div>
        <div className='row mx-1 h5 menuItem' onClick={() => goPage('')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-database pt-2 mr-2 h6'></i>
            <span className='pt-1' style={{ overflow: "hidden", textOverflow: "ellipsis" }}>Dashboard</span>
          </div>
        </div>
        <div className='row mx-1 h5 menuItem' onClick={() => goPage('clients')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-database pt-2 mr-2 h6'></i>
            <span className='pt-1'>Clients</span>
          </div>
        </div>
        <div className='row mx-1 h5 menuItem' onClick={() => goPage('settings')}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-clock-o pt-2 mr-2 h6'></i>
            <span>Settings</span>
          </div>
        </div>
        <div className='row mx-1 h5 menuItem signoutLink' onClick={logout}>
          <i className='fa fa-sign-out pt-2 mr-2 h6'></i>
          <span className='pt-1'>Sign Out</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logout })(AdminSidebar)
