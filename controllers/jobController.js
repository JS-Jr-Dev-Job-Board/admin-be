exports.getAllJobs = (req, res) => {
  const jobs = {
    company: 'Code Shock',
    location: 'remote',
    description:
      'Only bad ass devs wanted! Must be interested in pushing your own limits and always learning!',
    salaryMin: 50000,
    // salaryRange: 15000
    skills: ['java', 'node', 'mysql', 'redux', 'angular'],
    benefits: 'full',
    employmentType: 'contract',
    startDate: new Date(),
    endDate: new Date(),
    applyurl: 'https://google.com',
  }

  res.status(200).json(jobs)
}

exports.getJobById = (req, res) => {}

exports.createNewJobPosting = (req, res) => {}

exports.updateJobPosting = (req, res) => {}

exports.deleteJobPosting = (req, res) => {}
