exports.getServerStatus = (req, res) => {
  const currentTime = Date().toLocaleString()
  res.status(200).json({
    message: 'Job Board Admin server is running',
    status: 200,
    currentTime,
  })
}

exports.allRoutesError = (req, res) => {
  res.send({ message: 'This is not the endpoint you are looking for!' })
}
