import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(username, password)
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='row' style={{height: '20%'}}></div>
              <div className='row bg-white height-center'>
                <div className='col p-5'>
                  <div className='h3 text-center' style={{ color: '#B098E6' }}>Log in</div>
                  <form className='form' onSubmit={onSubmit}>
                    <div>Username</div>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        className='form-control'
                        value={username}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div>Password</div>
                    <div className='form-group'>
                      <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='form-control'
                        value={password}
                        onChange={onChange}
                        minLength='6'
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='submit'
                        className='form-control btn'
                        style={{ backgroundColor: '#B098E6', color: 'white' }}
                        value='Login'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
