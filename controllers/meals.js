import { Meal } from '../models/meal.js'
import axios from 'axios'

// const index = async (req, res) => {
//   try {
//     console.log("Index works")
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// const show = async (req,res) => {
//   try {
//     console.log('show route')
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }

// const search = async (req,res) => {
//   axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.body.mealQuery}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
//     .then(response => {
//       res.json(response.data.hits)
//     })
// }

function search(req, res) {
  // console.log(req.body.mealQuery)
  axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${req.body.mealQuery}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
  .then(response => {
    res.json(response.data.hits)
    // console.log(response.data.hits)
  })
}

function getMealDetails(req, res) {
  axios.get(`https://api.edamam.com/api/recipes/v2/${req.params.mealId}?type=public&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`)
  .then(response => {
    console.log('RESPONSE - get meal details', response.data)
    res.json(response.data)
  })
}

export {
  // index,
  // show,
  search,
  getMealDetails
}