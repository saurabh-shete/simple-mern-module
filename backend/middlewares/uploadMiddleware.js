const uploadMiddleware = (err, req, res, next) => {
  if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
    res.status(400).json({ error: 'File too large' })
  } else {
    next(err)
  }
}

module.exports = uploadMiddleware
