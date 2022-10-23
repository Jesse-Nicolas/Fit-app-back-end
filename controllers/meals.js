import { Meal } from '../models/meal.js'

const index = async (req, res) => {
  try {
    console.log("Index works")
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req,res) => {
  try {
    //this is where we will populate//
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  index,
  show,
}