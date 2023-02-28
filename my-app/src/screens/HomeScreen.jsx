import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { incrementCount, listImages } from '../actions/imageAction'
import { Buffer } from 'buffer'
import { Card, Col, Row } from 'react-bootstrap'
import ImageScreen from './ImageScreen'

const HomeScreen = () => {
  const imageList = useSelector(state => state.imageList)
  const { loading, error, userInfo } = useSelector(state => state.userLogin)

  const redirect = '/login'
  const navigate = useNavigate()
  const dispatch = useDispatch()

  var imageData
  if (imageList !== undefined) {
    imageData = imageList.imageData
  }

  useEffect(() => {
    if (userInfo === null) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  useEffect(() => {
    ;(async () => {
      console.log('Calling here')
      // dispatch(incrementCount())
      //   .then(res => {
      //     dispatch(listImages())
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      dispatch(listImages())
    })()
  }, [])
  return (
    <div>
      <center>
        {imageList === undefined ? (
          <div></div>
        ) : imageData === undefined ? (
          <></>
        ) : (
          <>
            <Row>
              {imageData.map(singelData => {
                const base64Image = Buffer.from(
                  singelData.imageData.data.data
                ).toString('base64')
                return (
                  <Col key={singelData._id} md='6'>
                    <ImageScreen
                      image={`data:image/png;base64,${base64Image}`}
                      title={singelData.title}
                      description={singelData.description}
                      count={singelData.count}
                    />
                  </Col>
                )
              })}
            </Row>
          </>
        )}
      </center>
    </div>
  )
}

export default HomeScreen
