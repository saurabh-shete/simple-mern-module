import axios from 'axios'
import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL,
  LIST_IMAGE_REQUEST,
  LIST_IMAGE_SUCCESS,
  LIST_IMAGE_FAIL,
  INCREMENT_IMAGE_COUNT_REQUEST,
  INCREMENT_IMAGE_COUNT_SUCCESS,
  INCREMENT_IMAGE_COUNT_FAIL
} from '../constants/imageConstants'

export const imageUpload =
  (title, description, imageData) => async dispatch => {
    try {
      dispatch({ type: UPLOAD_IMAGE_REQUEST })
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('testImage', imageData)
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      const { data } = await axios.post(
        `${process.env.REACT_APP_PROXY_URL}api/image`,
        formData,
        config
      )
      console.log(data)
      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: UPLOAD_IMAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const listImages = () => async dispatch => {
  try {
    dispatch({ type: LIST_IMAGE_REQUEST })
    const { data } = await axios.get(
      `${process.env.REACT_APP_PROXY_URL}api/image/getall`
    )
    dispatch({
      type: LIST_IMAGE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LIST_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const incrementCount = () => async dispatch => {
  try {
    dispatch({ type: INCREMENT_IMAGE_COUNT_REQUEST })
    const { data } = await axios.post(
      `${process.env.REACT_APP_PROXY_URL}api/image/incount`
    )
    dispatch({
      type: INCREMENT_IMAGE_COUNT_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: INCREMENT_IMAGE_COUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
