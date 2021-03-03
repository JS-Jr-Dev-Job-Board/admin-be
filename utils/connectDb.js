const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`** MongoDB is connected: ${connect.connection.host}\n`.america)
  } catch (error) {
    console.error(colors.red(error))
    process.exit(1)
  }
}

module.exports = connectDb
