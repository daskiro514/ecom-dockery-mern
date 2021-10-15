import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { addNewClient } from '../../actions/admin'

const AddNewClient = ({ addNewClient }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    bankCard: null,
  })

  const { firstName, lastName, bankCard } = formData

  const fileInputBankCardRef = React.useRef();

  const onFileChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] })
  }

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    let sendData = new FormData()
    Object.keys(formData).forEach(key => {
      sendData.append(key, formData[key])
    })
    addNewClient(sendData)
  }

  return (
    <div className='admin-new-clients'>
      <div className='h4 py-2'>
        New Client
      </div>
      <div className='bg-white rounded-lg p-3'>
        <form className='form' onSubmit={onSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>First Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='firstName'
                  value={firstName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='lastName'
                  value={lastName}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Bank/Credit Card Statement</label>
                <input
                  type='file'
                  className='file'
                  name='bankCard'
                  onChange={onFileChange}
                  ref={fileInputBankCardRef}
                  required
                />
                <input
                  type='button'
                  className={'form-control ' + (bankCard ? 'text-success' : 'text-danger')}
                  name='bankCardValue'
                  onClick={() => fileInputBankCardRef.current.click()}
                  value={bankCard ? 'Document Selected' : 'Upload Document'}
                />
              </div>
            </div>
          </div>
          <div className='form-group pt-4'>
            <input
              type='submit'
              className='form-control'
              value='Submit'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addNewClient })(AddNewClient)