import { Day } from '../models/day.js'

const create = async (req, res) => {
  try {
    req.body.author = req.user.profile
    const day = await Day.create(req.body)
    res.status(201).json(day)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const days = await Day.find({})
      .sort({ createdAt: 'desc' })
    res.status(200).json(blogs)
  } catch (err) {
    res.status(500).json(err)
  }
}


export {
  create, 
  index,
}