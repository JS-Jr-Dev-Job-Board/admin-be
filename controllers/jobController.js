const Job = require('../models/jobModel')

exports.getAllJobs = (req, res) => {
  Job.find().exec((err, jobs) => {
    if (err) return res.status(400).json({ error: 'Could not find jobs' })
    jobs.contactName = undefined
    res.status(200).json(jobs)
  })
  // const jobs = {
  //   company: 'Code Shock',
  //   location: 'remote',
  //   description:
  //     'Only bad ass devs wanted! Must be interested in pushing your own limits and always learning!',
  //   salaryMin: 50000,
  //   // salaryRange: 15000
  //   skills: ['java', 'node', 'mysql', 'redux', 'angular'],
  //   benefits: 'full',
  //   employmentType: 'contract',
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   applyurl: 'https://google.com',
  // }
}

exports.getJobById = (req, res) => {}

exports.createNewJobPosting = (req, res) => {
  const job = new Job(req.body)

  job.save((err, job) => {
    if (err) res.status(400).json({ error: 'Error creating new job' })
    job.contactName = undefined
    res.status(201).json(job)
  })
}

exports.updateJobPosting = (req, res) => {}

exports.deleteJobPosting = (req, res) => {}
