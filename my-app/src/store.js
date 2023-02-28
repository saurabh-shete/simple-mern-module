import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import {
  imageReducer,
  imageListReducer,
  imageCountReducer
} from './reducers/imageReducer'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const userInfoFromStorage = cookies.get('userInfo')
  ? cookies.get('userInfo')
  : null

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  imageDetails: imageReducer,
  imageList: imageListReducer,
  imageCount: imageCountReducer
})

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
