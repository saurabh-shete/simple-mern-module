import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
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
        <LinkContainer to='/home'>
          <Navbar.Brand>Hello</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {userInfo ? (
            <>
              <Nav className='me-auto'>
                <LinkContainer to='/upload'>
                  <Nav.Link>Upload</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/home'>
                  <Nav.Link>Show Images</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className='ms-auto'>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav className='ms-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
