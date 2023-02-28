const Image = require('../models/imageModel')
const asyncHandler = require('express-async-handler')
const fs = require('fs')

const uploadImage = asyncHandler(async (req, res) => {
  const { title, description } = req.body
  const imageData = req.file.filename
  const image = await Image.create({
    title: title,
    description: description,
    imageData: {
      data: fs.readFileSync('./uploads/' + imageData),
      contentType: 'image/png'
    }
  })
  if (image) {
    res.status(201).json({
      _id: image._id,
      title: image.title,
      description: image.description,
      imageData: image.imageData
    })
  } else {
    res.status(404).json({
      error: 'User Not Found'
    })
  }
})

const getAllImage = asyncHandler(async (req, res) => {
  const allData = await Image.find()
  res.send(allData)
})

const inCount = asyncHandler(async (req, res) => {
  try {
    const images = await Image.find()
    images.forEach(async image => {
      image.count++
      await image.save()
    })
    res.send('Count Incremented')
  } catch (err) {
    console.error()
    res.status(500).send(err, 'Error Occurred')
  }
})
module.exports = {
  uploadImage,
  getAllImage,
  inCount
}
