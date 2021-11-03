import React from 'react'
import { connect } from 'react-redux'
import AdminMessagesSidebar from './AdminMessagesSidebar'
import { getClient, setChatClient } from '../../../actions/admin'

const AdminClientMessages = ({ match, getClient, admin, client, setChatClient }) => {
  const clientID = match.params.id

  React.useEffect(() => {
    getClient(clientID)
  }, [getClient, clientID])

  React.useEffect(() => {
    setChatClient(clientID)
  }, [setChatClient, clientID])

  const messagesEndRef = React.useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  const [message, setMessage] = React.useState('')

  const onSubmit = e => {
    e.preventDefault()
    alert(message)
    setMessage('')
  }

  return (
    <div className='admin-client-messages'>
      <div className='h4 pt-2 pl-1'>
        Messages
      </div>
      <div className='row'>
        <div className='col-lg-3'>
          <AdminMessagesSidebar />
        </div>
        <div className='col-lg-9'>
          <div className='bg-white m-1 rounded-lg p-3 overflow'>
            <div style={{ marginBottom: '70px' }}>
              <div className='mt-2'>
                <div className='font-13'><b>{`${client.firstName} ${client.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13 text-right'><b>{`${admin.firstName} ${admin.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded ml-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13'><b>{`${client.firstName} ${client.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13 text-right'><b>{`${admin.firstName} ${admin.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded ml-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13'><b>{`${client.firstName} ${client.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13 text-right'><b>{`${admin.firstName} ${admin.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded ml-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13'><b>{`${client.firstName} ${client.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded'>
                  Thank you.
                </div>
              </div>
              <div className='mt-2'>
                <div className='font-13 text-right'><b>{`${admin.firstName} ${admin.lastName}`}, 2021/11/03 23:13</b></div>
                <div className='p-1 message-item rounded ml-auto'>
                  You are welcome.
                </div>
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '10px', width: 'calc(100% - 85px)' }}>
              <form onSubmit={onSubmit} className='form'>
                <div className='input-group'>
                  <textarea
                    type='text'
                    placeholder={`Send a message to ${admin.firstName}`}
                    name='message'
                    className='form-control'
                    value={message}
                    row={1}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                  <div class="input-group-append">
                    <button class="btn badge-pending" type="submit"><i className='fa fa-paper-plane-o'></i></button>
                  </div>
                </div>
              </form>
            </div>

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = state => ({
  client: state.admin.adminClient,
  admin: state.auth.user
})

export default connect(mapStateToProps, { getClient, setChatClient })(AdminClientMessages)