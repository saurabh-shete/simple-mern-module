import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBContainer,
  MDBTabsContent,
  MDBBtn,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = '/home'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, userInfo } = useSelector(state => state.userRegister)
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = e => {
    dispatch(register(userName, email, password))
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler}>
      <FormContainer>
        <MDBContainer className='p-3 my-5 d-flex flex-column w-50'>
          <MDBTabsContent>
            <MDBInput
              wrapperClass='mb-4'
              label='Username'
              id='username'
              type='text'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Email'
              id='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <MDBBtn className='mb-4 w-100' type='submit'>
              Sign up
            </MDBBtn>
            <div className='text-center'>
              <p>
                Already a member? <Link to='/login'>Login</Link>
              </p>
            </div>
          </MDBTabsContent>
        </MDBContainer>
      </FormContainer>
    </form>
  )
}

export default RegisterScreen
