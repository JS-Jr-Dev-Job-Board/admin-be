const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const RateLimit = require('express-rate-limit')
const expressValidator = require('express-validator')

require('colors')

// import modules
const statusRouter = require('../routes/statusRouter')

const server = express()

//db connection

// middleware
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())
server.use(cookieParser())
server.use(expressValidator())

// rate limit
const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100,
  delay: 0,
})

// routes

server.use('/', statusRouter) // this must be the last route for the '*' to work correctly

module.exports = server
