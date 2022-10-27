import { Meal } from '../models/meal.js'
import axios from 'axios'

function search(req, res) {
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.body.mealQuery}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
  .then(response => {
    res.json(response.data.hits)
  })
}

function getMealDetails(req, res) {
  axios.get(`https://api.edamam.com/api/recipes/v2/${req.params.mealId}?type=public&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
  .then(response => {
    res.json(response.data)
  })
}

const createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body.recipe)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const meal = await Meal.find({})
    res.status(201).json(meal)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


export {
  search,
  getMealDetails,
  createMeal,
  index,
}