import mongoose from "mongoose"

const Schema = mongoose.Schema

const ingredientSchema = new Schema(
  {
    text: String,
    quantity: Number,
    measure: String,
    food: String,
    weight: Number,
  }
)

const mealSchema = new Schema(
  {
    label: String,
    ingredients: [ingredientSchema],
    description: String,
    calories: Number,
    image: String,
    day: {
      type: String,
      enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'friday', 'Saturday'],
    },
  }
)

const Meal = mongoose.model('Meal', mealSchema)

export { Meal }