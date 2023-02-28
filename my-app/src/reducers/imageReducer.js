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

export const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return { loading: true }
    case UPLOAD_IMAGE_SUCCESS:
      return { loading: false, imageData: action.payload }
    case UPLOAD_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const imageListReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_IMAGE_REQUEST:
      return { loading: true }
    case LIST_IMAGE_SUCCESS:
      return { loading: false, imageData: action.payload }
    case LIST_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const imageCountReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT_IMAGE_COUNT_REQUEST:
      return { loading: true }
    case INCREMENT_IMAGE_COUNT_SUCCESS:
      return { loading: false, imageData: action.payload }
    case INCREMENT_IMAGE_COUNT_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
