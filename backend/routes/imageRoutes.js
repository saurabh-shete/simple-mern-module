const express = require('express')
const {
  getAllImage,
  uploadImage,
  inCount
} = require('../controllers/imageController')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const router = express.Router()

router.route('/').post(upload.single('testImage'), uploadImage)
router.route('/incount').post(inCount)
router.route('/getall').get(getAllImage)

module.exports = router
