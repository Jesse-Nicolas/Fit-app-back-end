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

export {
  create,
}