const Job = require('../models/jobModel')

exports.getAllJobs = (req, res) => {
  //Get all jobs using callback
  Job.find().exec((err, jobs) => {
    if (err) return res.status(400).json({ error: 'Could not find jobs' })
    jobs.contactName = undefined
    res.status(200).json(jobs)
  })

  // async / await
  // try {
  //   const job = await Job.find()
  //   res.status(200).json(job)
  // } catch (err) {
  //   console.log(err)
  // }

  // promise
  // Job.find()
  //   .then((data) => res.status(200).json(data))
  //   .catch((err) => console.log(err))
}

exports.getJobById = (req, res) => {}

exports.createNewJobPosting = (req, res) => {
  const job = new Job(req.body)

  job.save((err, job) => {
    if (err) res.status(400).json({ error: 'Error creating new job' })
    job.contactName = undefined
    job.__v = undefined
    res.status(201).json(job)
  })
}

exports.updateJobPosting = (req, res) => {}

exports.deleteJobPosting = (req, res) => {}
