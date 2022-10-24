import { Exercise } from '../models/exercise.js'

const create = async (req, res) => {
  try {
    req.body.author = req.user.profile
    const exercise = await Exercise.create(req.body)
    res.status(201).json(exercise)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,

}