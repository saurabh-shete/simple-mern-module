import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { listImages } from '../actions/imageAction'
const Header = () => {
  const [cookie, setUserCookie, removeUserCookie] = useCookies()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
    removeUserCookie('userInfo')
    navigate('/')
  }

  const { loading, error, userInfo } = useSelector(state => state.userLogin)
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/upload'>Hello</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {userInfo ? (
            <>
              <Nav className='me-auto'>
                <Nav.Link href='/upload'>Upload</Nav.Link>
                <Nav.Link href='/home'>Show Images</Nav.Link>
              </Nav>
              <Nav className='ms-auto'>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav className='ms-auto'>
              <Nav.Link href='/login'>Sign In</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
