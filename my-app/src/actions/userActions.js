import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../constants/userConstants'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const expirationDate = new Date()
expirationDate.setDate(expirationDate.getDate() + 7)

export const logout = () => dispatch => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post(
      `${process.env.REACT_APP_PROXY_URL}api/users/login`,
      { email, password },
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    cookies.set('userInfo', data, {
      path: '/',
      expires: expirationDate
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const register = (userName, email, password) => async dispatch => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })
    const config = { headers: { 'Content-Type': 'application/json' } }
    const data = await axios.post(
      `${process.env.REACT_APP_PROXY_URL}api/users/register`,
      { userName, email, password },
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    cookies.set('userInfo', data, {
      path: '/',
      expires: expirationDate
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
