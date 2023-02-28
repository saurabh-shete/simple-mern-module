import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
const ImageScreen = ({ image, title, description, count }) => {
  return (
    <div>
      <center>
        <Card className='my-4 p-2 rounded'>
          <Card.Img src={image} />
          <Card.Body>
            <Card.Text as='div'>
              <span style={{ fontWeight: 'bold', fontSize: 19 }}>
                Title: {title}
              </span>
            </Card.Text>
            <Card.Text as='div'>
              <span style={{ fontWeight: 'bold', fontSize: 19 }}>
                Description: {description}
              </span>
            </Card.Text>
            <Card.Text as='div'>
              <span style={{ fontWeight: 'bold', fontSize: 19 }}>
                Count: {count}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  )
}

export default ImageScreen
