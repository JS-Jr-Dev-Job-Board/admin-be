const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    trim: true,
    required: true,
    maxLength: 64,
  },
  contactName: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    trim: true,
    maxLength: 64,
  },
  description: {
    type: String,
    trim: true,
  },
  salaryMin: {
    type: Number,
  },
  skills: {
    type: Array,
    default: [],
  },
  benefits: {
    type: String,
  },
  employmentType: {
    type: String,
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
  },
  applyUrl: {
    type: String,
    trim: true,
  },
})

module.exports = mongoose.model('Job', JobSchema)
