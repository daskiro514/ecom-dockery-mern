import React from 'react'

const AdminHeader = () => {

  return (
    <div className='admin-header d-flex flex-row-reverse align-items-center pr-3'>
      <i className='fa fa-github-alt ml-2'></i>
      <i className='fa fa-bell ml-2'></i>
      <i className='fa fa-question-circle ml-2'></i>
      <div className='mr-1'>
        Feedback?
      </div>
    </div>
  )
}

export default AdminHeader