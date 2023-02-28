const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageData: {
      data: Buffer,
      contentType: String
    },
    count: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

const Image = mongoose.model('Image', imageSchema)
module.exports = Image
