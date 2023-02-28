const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const errorHandler = require('./middlewares/errorMiddleware')
const uploadMiddleware = require('./middlewares/uploadMiddleware')
const userRoutes = require('./routes/userRoutes')
const imageRoutes = require('./routes/imageRoutes')
dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/image', imageRoutes)

app.use(errorHandler)
app.use(uploadMiddleware)

const port = 8080
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
})
