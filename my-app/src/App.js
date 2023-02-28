import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import UploadScreen from './screens/UploadScreen'

function App () {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<LoginScreen />} />
            <Route exact path='/home' element={<HomeScreen />} />
            <Route exact path='/upload' element={<UploadScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/register' element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
