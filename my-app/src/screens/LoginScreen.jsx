import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = '/upload'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, userInfo } = useSelector(state => state.userLogin)
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = e => {
    dispatch(login(email, password))
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <FormContainer>
          <MDBContainer className='p-3 my-5 d-flex flex-column w-50'>
            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='form1'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='form2'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <MDBBtn className='mb-4' type='submit'>
              Sign in
            </MDBBtn>

            <div className='text-center'>
              <p>
                Not a member? <Link to='/register'>Register</Link>
              </p>
            </div>
          </MDBContainer>
        </FormContainer>
      </form>
    </>
  )
}

export default LoginScreen
