import mongoose from "mongoose"

const Schema = mongoose.Schema


const mealSchema = new Schema(
  {
    label: String,
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