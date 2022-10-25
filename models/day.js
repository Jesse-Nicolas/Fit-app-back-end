import mongoose from "mongoose"


const Schema = mongoose.Schema

const likedMealsSchema = new Schema (
  {
    meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
  }
)

const daySchema = new Schema(
  {
    name: String,
    likedMeals: [likedMealsSchema],
    exercises: {type: Schema.Types.ObjectId, ref: 'Exercise'},
  }
)


const Day = mongoose.model('Day', daySchema)

export { Day }