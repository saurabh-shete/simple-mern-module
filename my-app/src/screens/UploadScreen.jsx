import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import { imageUpload } from '../actions/imageAction'
import { Buffer } from 'buffer'

// // Assume that `buffer` contains the image data as a `Buffer` object

// // Create a new Blob object from the Buffer data
// const blob = new Blob([buffer], { type: 'image/png' }) // Change the MIME type to match the actual image type

// // Create a URL that represents the Blob data
// const imageUrl = URL.createObjectURL(blob)

const UploadScreen = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  //const [image, setImage] = useState(null)
  const handleFileUpload = acceptedFiles => {
    // const fileReader = new FileReader()
    // fileReader.readAsArrayBuffer(acceptedFiles[0])
    // fileReader.onload = () => {
    //   const fileBuffer = Buffer.from(fileReader.result)
    //   setFile(fileBuffer)
    // }
    setFile(acceptedFiles[0])
  }

  const submitHandler = event => {
    dispatch(imageUpload(title, description, file))
    event.preventDefault()
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <form onSubmit={submitHandler}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <MDBInput
                type='text'
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <MDBInput
                type='textarea'
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='file'>File</label>
              <Dropzone onDrop={handleFileUpload}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {file ? (
                      <p>{file.name}</p>
                    ) : (
                      <p>
                        Drag 'n' drop a file here, or click here to select a
                        file
                      </p>
                    )}
                  </div>
                )}
              </Dropzone>
            </div>
            <MDBBtn type='submit'>Submit</MDBBtn>
          </form>
          {/* {image && <img src={image} alt='Uploaded image' />} */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
export default UploadScreen
