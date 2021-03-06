const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const RateLimit = require('express-rate-limit')
const expressValidator = require('express-validator')

require('colors')

// import modules
const jobRouter = require('../routes/jobRouter')
const authRouter = require('../routes/authRouter')
const userRouter = require('../routes/userRouter')
const statusRouter = require('../routes/statusRouter')

const connectDb = require('../utils/connectDb')

const server = express()

//db connection
connectDb()

// middleware
server.use(helmet())
server.use(cors())
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
server.use('/api/v1/job', jobRouter)
server.use('/api/v1/auth', authRouter)
server.use('/api/v1/user', userRouter)
server.use('/', statusRouter) // this must be the last route for the '*' to work correctly

module.exports = server
