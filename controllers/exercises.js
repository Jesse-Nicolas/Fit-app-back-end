import { Exercise } from '../models/exercise.js'

const index = async (req, res) => {
  try {
    const exercises = await Exercise.find({})
    .sort({ createdAt: 'desc' })
    res.status(201).json(exercises)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

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

const show = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id)
    res.status(200).json(exercise)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(exercise)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id)
    res.status(200).json(exercise)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
  index,
  show,
  update,
  deleteExercise as delete,
}